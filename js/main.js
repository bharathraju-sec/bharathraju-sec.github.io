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
  const setMenu = open => { nav.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', open); menuBtn.textContent = open ? '✕' : '☰'; };
  menuBtn.onclick = () => setMenu(!nav.classList.contains('open'));
  $$('#links a').forEach(a => a.onclick = () => setMenu(false));
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  // scroll-spy
  const navLinks = $$('#links a');
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

  // copy email
  const copyBtn = $('#copyBtn');
  copyBtn.onclick = async () => {
    try { await navigator.clipboard.writeText($('#mailLink').textContent); copyBtn.textContent = 'Copied ✓'; }
    catch { copyBtn.textContent = 'Select ↑'; }
    setTimeout(() => copyBtn.textContent = 'Copy', 1800);
  };

  // terminal typing
  // lines come from js/data.js → terminal: [{ cmd, out, warn }]
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const lines = ((window.PORTFOLIO && window.PORTFOLIO.terminal) || []).map(({ cmd, out, warn }) => {
    const [bin, ...rest] = cmd.split(' ');
    const head = `<span class="p">➜</span> <span class="k">${esc(bin)}</span>${rest.length ? ' ' + esc(rest.join(' ')) : ''}`;
    return [head, warn ? `<span class="w">${esc(out)}</span>` : esc(out)];
  });
  const out = $('#termText'), done = '<span class="p">➜</span> <span class="cursor"></span>';
  if (reduce) out.innerHTML = lines.map(l => l.join('\n')).join('\n\n') + '\n\n' + done;
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
    setTimeout(next, 600);
  }

  // network-topology canvas
  const cv = $('#net'), ctx = cv.getContext('2d'), dpr = Math.min(devicePixelRatio || 1, 2), LINK = 150;
  let W, H, nodes = [], packets = [], running = true;
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
        ctx.strokeStyle = `rgba(92,242,166,${(1 - d / LINK) * .22})`; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        if (!reduce && Math.random() < .0009 && packets.length < 14) packets.push({a, b, t:0});
      }
    }
    for (const n of nodes) { ctx.fillStyle = n.hub ? '#5cf2a6' : 'rgba(170,190,210,.55)'; ctx.beginPath(); ctx.arc(n.x, n.y, n.hub ? n.r + 1.2 : n.r, 0, 7); ctx.fill(); }
    packets = packets.filter(p => {
      p.t += .018; if (p.t >= 1) return false;
      const x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t;
      ctx.fillStyle = '#3ab8ff'; ctx.shadowColor = '#3ab8ff'; ctx.shadowBlur = 10; ctx.beginPath(); ctx.arc(x, y, 2.2, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
      return true;
    });
    if (running && !reduce) requestAnimationFrame(draw);
  };
  resize(); draw();
  addEventListener('resize', () => { resize(); if (reduce) draw(); });
  new IntersectionObserver(([e]) => { const was = running; running = e.isIntersecting; if (running && !was && !reduce) requestAnimationFrame(draw); }).observe(cv);
})();
