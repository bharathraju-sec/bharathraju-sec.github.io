(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];

  // nav: scrolled state, progress bar, mobile menu
  const nav = $('#nav'), bar = $('#progress'), menuBtn = $('#menuBtn');
  const onScroll = () => {
    nav.classList.toggle('scrolled', scrollY > 20);
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (max > 0 ? scrollY / max * 100 : 0) + '%';
  };
  addEventListener('scroll', onScroll, {passive:true}); onScroll();
  // ── Mobile menu sheet ─────────────────────────────────────────────
  // Apple-style fluid behaviour: a spring (damping ratio + response) that always
  // starts from the sheet's live position and velocity, 1:1 drag tracking,
  // rubber-banding past the top, and momentum projection to decide open vs close.
  const sheet = $('#sheet'), scrim = $('#scrim');
  const Sheet = (() => {
    let y = 0, v = 0, H = 1, raf = 0, isOpen = false;
    const apply = () => {
      sheet.style.transform = `translate3d(0,${y}px,0)`;
      scrim.style.opacity = String(Math.max(0, Math.min(1, 1 - y / H)));
    };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };
    const hide = () => { if (!isOpen) { sheet.hidden = true; scrim.hidden = true; } };
    const springTo = (target, { damping = 1, response = .35 } = {}, done) => {
      stop();
      if (reduce) {               // reduced motion: cross-fade instead of sliding
        const fadeIn = target === 0;
        y = target === 0 ? 0 : y; apply();
        const a = sheet.animate([{ opacity: fadeIn ? 0 : 1 }, { opacity: fadeIn ? 1 : 0 }], { duration: 200, easing: 'ease' });
        scrim.animate([{ opacity: fadeIn ? 0 : 1 }, { opacity: fadeIn ? 1 : 0 }], { duration: 200, easing: 'ease' });
        a.onfinish = () => { y = target; v = 0; apply(); done && done(); };
        return;
      }
      const k = Math.pow(2 * Math.PI / response, 2), c = 4 * Math.PI * damping / response;
      let last = performance.now();
      const step = now => {
        const dt = Math.min(.032, (now - last) / 1000); last = now;
        for (let i = 0, h = dt / 4; i < 4; i++) { const acc = -k * (y - target) - c * v; v += acc * h; y += v * h; }
        if (Math.abs(y - target) < .5 && Math.abs(v) < 10) { y = target; v = 0; apply(); raf = 0; done && done(); return; }
        apply(); raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    const open = () => {
      if (isOpen) return;
      isOpen = true;
      if (sheet.hidden) { sheet.hidden = false; scrim.hidden = false; H = sheet.offsetHeight + 16; y = H; v = 0; apply(); }
      document.body.style.overflow = 'hidden';
      menuBtn.setAttribute('aria-expanded', 'true');
      springTo(0, { damping: 1, response: .35 });
      sheet.focus({ preventScroll: true });
    };
    const close = (velocity = 0, returnFocus = true) => {
      if (!isOpen) return;
      isOpen = false; v = velocity;
      document.body.style.overflow = '';
      menuBtn.setAttribute('aria-expanded', 'false');
      springTo(H, { damping: 1, response: .3 }, hide);
      if (returnFocus) menuBtn.focus({ preventScroll: true });
    };
    const rubber = (o, d, c = .55) => (o * d * c) / (d + c * Math.abs(o));
    const project = (vel, rate = .99) => (vel / 1000) * rate / (1 - rate);
    let drag = null, suppressClick = false;
    sheet.addEventListener('pointerdown', e => {
      if (e.button !== 0) return;
      stop();                      // interrupt: carry on from the live on-screen value
      drag = { id: e.pointerId, startY: e.clientY, from: y, active: false, hist: [{ y: e.clientY, t: e.timeStamp }] };
      suppressClick = false;
    });
    sheet.addEventListener('pointermove', e => {
      if (!drag || e.pointerId !== drag.id) return;
      if (!drag.active) {          // ~10px of hysteresis before it counts as a drag
        if (Math.abs(e.clientY - drag.startY) < 10) return;
        drag.active = true; suppressClick = true;
        sheet.setPointerCapture(e.pointerId);
        drag.startY = e.clientY; drag.from = y;
      }
      const raw = drag.from + (e.clientY - drag.startY);
      y = raw < 0 ? -rubber(-raw, H) : raw;   // resist past the top instead of a hard stop
      apply();
      drag.hist.push({ y: e.clientY, t: e.timeStamp }); if (drag.hist.length > 6) drag.hist.shift();
    });
    const end = e => {
      if (!drag || e.pointerId !== drag.id) return;
      const d = drag; drag = null;
      if (!d.active) { isOpen ? springTo(0) : springTo(H, {}, hide); return; }
      const a = d.hist[0], b = d.hist[d.hist.length - 1];
      const vel = (b.y - a.y) / Math.max(1, b.t - a.t) * 1000;          // px/s at release
      if (y + project(vel) > H * .45) close(vel);                      // where the flick is heading
      else { v = vel; springTo(0, { damping: Math.abs(vel) > 300 ? .8 : 1, response: .35 }); }
    };
    sheet.addEventListener('pointerup', end);
    sheet.addEventListener('pointercancel', end);
    sheet.addEventListener('click', e => { if (suppressClick) { e.preventDefault(); e.stopPropagation(); suppressClick = false; } }, true);
    return { open, close, get isOpen() { return isOpen; } };
  })();
  menuBtn.onclick = () => Sheet.isOpen ? Sheet.close() : Sheet.open();
  scrim.onclick = () => Sheet.close();
  $$('#sheet a[href^="#"]').forEach(a => a.addEventListener('click', () => Sheet.close(0, false)));
  addEventListener('keydown', e => { if (e.key === 'Escape' && Sheet.isOpen) Sheet.close(); });
  matchMedia('(min-width: 761px)').addEventListener('change', e => { if (e.matches && Sheet.isOpen) Sheet.close(0, false); });

  // scroll-spy (top nav and the mobile sheet)
  const navLinks = $$('#links a, #sheetLinks a');
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
  }), {rootMargin:'-45% 0px -50% 0px'});
  $$('section[id]').forEach(s => spy.observe(s));

  // reveal
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold:.1});
  $$('.reveal').forEach(el => io.observe(el));

  // counters
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; cio.unobserve(e.target);
    const el = e.target, end = +el.dataset.count, t0 = performance.now(), dur = reduce ? 0 : 1300;
    const tick = t => { const p = dur ? Math.min(1, (t - t0) / dur) : 1; el.firstChild.nodeValue = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }), {threshold:.6});
  $$('[data-count]').forEach(el => cio.observe(el));

  // terminal typing
  // lines come from js/data.js → terminal: [{ cmd, out, warn }]
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const lines = ((window.PORTFOLIO && window.PORTFOLIO.terminal) || []).map(({ cmd, out, warn }) => {
    const [bin, ...rest] = cmd.split(' ');
    const head = `<span class="p">➜</span> <span class="k">${esc(bin)}</span>${rest.length ? ' ' + esc(rest.join(' ')) : ''}`;
    return [head, warn ? `<span class="w">${esc(out)}</span>` : esc(out)];
  });
  const out = $('#termText'), done = '<span class="p">➜</span> <span class="cursor"></span>';
  if (!out) { /* no terminal on page */ }
  else if (reduce) out.innerHTML = lines.map(l => l.join('\n')).join('\n\n') + '\n\n' + done;
  else {
    let html = '', i = 0;
    const typeCmd = (cmd, res) => {
      const plain = cmd.replace(/<[^>]+>/g, ''); let n = 2;
      const step = () => {
        if (n <= plain.length) { out.innerHTML = html + '<span class="p">➜</span> ' + plain.slice(2, n++) + '<span class="cursor"></span>'; setTimeout(step, 38); }
        else { html += cmd + '\n' + res + '\n\n'; out.innerHTML = html + '<span class="cursor"></span>'; setTimeout(next, 380); }
      };
      step();
    };
    const next = () => { if (i >= lines.length) { out.innerHTML = html + done; return; } typeCmd(...lines[i++]); };
    out.innerHTML = '<span class="cursor"></span>';
    // start typing when the terminal scrolls into view
    const tio = new IntersectionObserver(([e]) => { if (e.isIntersecting) { tio.disconnect(); setTimeout(next, 300); } }, {threshold:.4});
    tio.observe(out);
  }

  // hero name "decrypts" from random glyphs
  const h1 = $('.hero h1');
  if (h1 && !reduce && !document.hidden) {
    const CH = '01<>/\\{}#$%&*+=?ABCDEF';
    const targets = [...h1.childNodes].flatMap(n => n.nodeType === 3 ? [n] : [...n.childNodes].filter(c => c.nodeType === 3));
    const finals = targets.map(t => t.nodeValue);
    const DUR = 1100, t0 = performance.now();
    const finish = () => targets.forEach((t, k) => t.nodeValue = finals[k]);
    // time-based, so it always ends on schedule even if the tab was throttled
    const scramble = now => {
      const p = Math.min(1, (now - t0) / DUR);
      if (p >= 1) return finish();
      targets.forEach((t, k) => {
        const f = finals[k], done = Math.floor(f.length * p);
        t.nodeValue = f.split('').map((c, i) => i < done || c === ' ' ? c : CH[Math.random() * CH.length | 0]).join('');
      });
      requestAnimationFrame(scramble);
    };
    requestAnimationFrame(scramble);
    setTimeout(finish, DUR + 400);   // safety net
  }

  // respect reduced motion for SVG (SMIL) animations too
  if (reduce) $$('svg').forEach(s => s.pauseAnimations && s.pauseAnimations());

  // project illustrations: loop only while on screen; reduced motion gets a finished still frame
  const arts = $$('.proj-art svg'), flows = $$('.flow');
  arts.forEach(s => { if (s.pauseAnimations) { s.pauseAnimations(); s.setCurrentTime(reduce ? (+s.dataset.rest || 0) : 0); } });
  if (!reduce) {
    const pio = new IntersectionObserver(es => es.forEach(e => {
      const el = e.target;
      if (el.classList.contains('flow')) el.classList.toggle('live', e.isIntersecting);
      else if (el.unpauseAnimations) e.isIntersecting ? el.unpauseAnimations() : el.pauseAnimations();
    }), { threshold: .25 });
    arts.forEach(s => pio.observe(s));
    flows.forEach(fl => pio.observe(fl));
  }

  // network-topology canvas
  const CSSV = getComputedStyle(document.documentElement), V = n => CSSV.getPropertyValue(n).trim();
  const C = { ok: V('--ok-rgb'), accent: V('--accent-rgb'), data: V('--accent-2-rgb'), bad: V('--bad-rgb') };
  const cv = $('#net'), ctx = cv.getContext('2d'), dpr = Math.min(devicePixelRatio || 1, 2), LINK = 150;
  let W, H, nodes = [], packets = [], rings = [], running = true;
  const resize = () => {
    W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(70, W * H / 22000));
    nodes = Array.from({length:n}, () => ({x:Math.random()*W, y:Math.random()*H, vx:(Math.random()-.5)*.25, vy:(Math.random()-.5)*.25, r:Math.random()*1.6+1, hub:Math.random()<.12}));
    packets = [];
  };
  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    if (!reduce) for (const a of nodes) { a.x += a.vx; a.y += a.vy; if (a.x < 0 || a.x > W) a.vx *= -1; if (a.y < 0 || a.y > H) a.vy *= -1; }
    for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < LINK) {
        ctx.strokeStyle = `rgba(${C.ok},${(1 - d / LINK) * .28})`; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        if (!reduce && Math.random() < .0009 && packets.length < 14) {
          // ~1 in 6 packets is malicious and heads for a hub ("firewall") node
          const bad = Math.random() < .17 && (a.hub || b.hub);
          packets.push(bad ? {a: a.hub ? b : a, b: a.hub ? a : b, t:0, bad:true} : {a, b, t:0});
        }
      }
    }
    for (const n of nodes) {
      ctx.fillStyle = n.hub ? `rgb(${C.accent})` : 'rgba(170,190,210,.55)'; ctx.beginPath(); ctx.arc(n.x, n.y, n.hub ? n.r + 1.2 : n.r, 0, 7); ctx.fill();
      if (n.hub) { ctx.strokeStyle = `rgba(${C.accent},.3)`; ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 5, 0, 7); ctx.stroke(); }
    }
    packets = packets.filter(p => {
      p.t += p.bad ? .012 : .018;
      if (p.t >= 1) { if (p.bad) rings.push({x:p.b.x, y:p.b.y, life:1}); return false; }
      const x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t, c = p.bad ? `rgb(${C.bad})` : `rgb(${C.data})`;
      ctx.fillStyle = c; ctx.shadowColor = c; ctx.shadowBlur = 10; ctx.beginPath(); ctx.arc(x, y, p.bad ? 2.6 : 2.2, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
      return true;
    });
    // blocked-threat effect: shield ring + ✕ at the hub
    rings = rings.filter(r => {
      r.life -= .02; if (r.life <= 0) return false;
      const k = 1 - r.life;
      ctx.strokeStyle = `rgba(${C.accent},${r.life * .8})`; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(r.x, r.y, 6 + k * 22, 0, 7); ctx.stroke();
      ctx.strokeStyle = `rgba(${C.bad},${r.life})`; ctx.lineWidth = 2; const s = 4;
      ctx.beginPath(); ctx.moveTo(r.x - s, r.y - s); ctx.lineTo(r.x + s, r.y + s); ctx.moveTo(r.x + s, r.y - s); ctx.lineTo(r.x - s, r.y + s); ctx.stroke();
      ctx.lineWidth = 1;
      return true;
    });
    if (running && !reduce) requestAnimationFrame(draw);
  };
  resize(); draw();
  addEventListener('resize', () => { resize(); if (reduce) draw(); });
  new IntersectionObserver(([e]) => { const was = running; running = e.isIntersecting; if (running && !was && !reduce) requestAnimationFrame(draw); }).observe(cv);
})();
