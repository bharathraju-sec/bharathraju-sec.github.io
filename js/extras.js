/**
 * Extra security-themed interactions, layered on top of the rendered page:
 *  1. boot sequence (once per session, skippable)
 *  2. typed section headings
 *  3. click "ping" ripple on empty space
 *  4. scan-progress readout in the nav
 */
(() => {
  const D = window.PORTFOLIO || {};
  const P = D.person || {};
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const plain = s => String(s ?? '').replace(/\*\*(.+?)\*\*/g, '$1');
  const EMPTY = 'body, main, section, .hero, .hero .wrap, .hero canvas, header, .wrap, footer, .projects, .earlier, .earlier-grid, .skill-grid, .cred-grid, .timeline, .about-grid, .focus, .stats, .stats .wrap, .stat';

  /* ── 1. Boot sequence ─────────────────────────── */
  (() => {
    let seen = false;
    try { seen = sessionStorage.getItem('booted') === '1'; sessionStorage.setItem('booted', '1'); } catch (_) {}
    if (seen || reduce) return;
    const lines = [
      ['> initialising secure session', 'ok'],
      ['> tls handshake · aes-256-gcm', 'ok'],
      ['> verifying identity · bharath@sec', 'ok'],
      ['> loading portfolio modules', 'ok'],
      ['> access granted', 'go'],
    ];
    const el = document.createElement('div');
    el.className = 'boot'; el.setAttribute('aria-hidden', 'true');
    el.innerHTML = `<div class="boot-box"><div class="boot-lines"></div><div class="boot-bar"><i></i></div><div class="boot-skip">click or press any key to skip</div></div>`;
    document.body.appendChild(el);
    const box = el.querySelector('.boot-lines');
    let i = 0, done = false;
    const close = () => { if (done) return; done = true; el.classList.add('out'); setTimeout(() => el.remove(), 500); };
    const step = () => {
      if (done) return;
      if (i >= lines.length) { setTimeout(close, 260); return; }
      const [t, s] = lines[i++];
      box.insertAdjacentHTML('beforeend', `<div><span>${esc(t)}</span><b class="${s}">${s === 'go' ? '✓' : '[ ok ]'}</b></div>`);
      setTimeout(step, 190);
    };
    setTimeout(step, 120);
    el.addEventListener('click', close);
    addEventListener('keydown', close, { once: true });
    setTimeout(close, 3000);
  })();

  /* ── 2. Typed section headings ────────────────── */
  (() => {
    if (reduce) return;
    $$('.sec-head h2, .about h2').forEach(h => {
      h.classList.add('typed');
      h.style.setProperty('--chars', Math.max(8, h.textContent.trim().length));
    });
    // observe the heading's container: the clipped heading itself never reports as visible
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target._h.classList.add('typing'); io.unobserve(e.target); }
    }), { threshold: 0.1 });
    $$('h2.typed').forEach(h => { const box = h.parentElement; box._h = h; io.observe(box); });
    // safety net: never leave a heading hidden
    setTimeout(() => $$('h2.typed:not(.typing)').forEach(h => {
      const r = h.parentElement.getBoundingClientRect();
      if (r.top < innerHeight && r.bottom > 0) h.classList.add('typing');
    }), 2500);
  })();

  /* ── 3. Click ping on empty space ─────────────── */
  addEventListener('pointerdown', e => {
    if (reduce || e.button !== 0 || !e.target.matches?.(EMPTY)) return;
    const p = document.createElement('span');
    p.className = 'ping'; p.setAttribute('aria-hidden', 'true');
    p.style.left = e.clientX + 'px'; p.style.top = e.clientY + 'px';
    p.innerHTML = '<i></i><i></i><i></i><em>ping ✓</em>';
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1400);
  });

  /* ── 4. Scan-progress readout ─────────────────── */
  (() => {
    const nav = $('#nav');
    if (!nav) return;
    const r = document.createElement('div');
    r.className = 'scan-pct'; r.setAttribute('aria-hidden', 'true');
    nav.appendChild(r);
    const upd = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const pct = max > 0 ? Math.round(scrollY / max * 100) : 0;
      r.textContent = pct >= 100 ? 'scan complete ✓' : `scan ${String(pct).padStart(2, '0')}%`;
      r.classList.toggle('done', pct >= 100);
      r.classList.toggle('show', scrollY > 40);
    };
    addEventListener('scroll', upd, { passive: true }); upd();
  })();

  // No right-click menu on the page (text fields keep theirs for paste/spellcheck)
  addEventListener('contextmenu', e => {
    if (!e.target.closest?.('input, textarea, [contenteditable="true"]')) e.preventDefault();
  });

})();
