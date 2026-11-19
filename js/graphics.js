/**
 * SVG illustrations used by js/render.js.
 * Pure functions that return markup strings; no content lives here.
 */
window.GFX = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // 24×24 line glyphs, drawn inside nodes
  const G = {
    cloud: '<path d="M7 18h10a4 4 0 00.6-7.95A6 6 0 006.2 9.1 4.5 4.5 0 007 18z"/>',
    shield: '<path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/>',
    hub: '<circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/>',
    building: '<path d="M4 21V5l8-3 8 3v16M9 21v-4h6v4M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01"/>',
    server: '<rect x="4" y="3" width="16" height="7" rx="1.5"/><rect x="4" y="14" width="16" height="7" rx="1.5"/><path d="M8 6.5h.01M8 17.5h.01"/>',
    store: '<path d="M4 9l1.5-5h13L20 9M4 9h16v11H4zM10 20v-6h4v6"/>',
    bot: '<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M9.5 16.5h5"/>',
    bug: '<path d="M8 8a4 4 0 018 0v6a4 4 0 01-8 0zM4 10h4M16 10h4M4 16h4M16 16h4M9 4l1.5 2M15 4l-1.5 2"/>',
    sales: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>',
    router: '<rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 16.5h.01M11 16.5h.01M8 13l-2-6M16 13l2-6M9.5 7.5a3.5 3.5 0 015 0"/>',
    cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M22 9v6"/>',
    field: '<path d="M12 21s-7-6.2-7-12a7 7 0 0114 0c0 5.8-7 12-7 12z"/><path d="M9 9h6M12 6v6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    doc: '<path d="M6 2h9l4 4v16H6z"/><path d="M15 2v4h4M9 12h7M9 16h5"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  };
  const glyph = (name, x, y, size = 20, color = 'currentColor') =>
    `<g transform="translate(${x - size / 2} ${y - size / 2}) scale(${size / 24})" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${G[name] || ''}</g>`;

  /* ── Hero: animated network map ─────────────────────────── */
  const heroMap = () => {
    const N = {
      cloud:  { x: 240, y: 52,  g: 'cloud',    label: 'Internet' },
      threat: { x: 62,  y: 128, g: 'bug',      label: 'Threat',    bad: true },
      fw:     { x: 240, y: 142, g: 'shield',   label: 'Firewall',  key: true },
      agent:  { x: 418, y: 142, g: 'bot',      label: 'AI agent' },
      hub:    { x: 240, y: 238, g: 'hub',      label: 'SD-WAN edge' },
      br:     { x: 82,  y: 330, g: 'store',    label: 'Branch' },
      hq:     { x: 240, y: 346, g: 'building', label: 'Sydney HQ' },
      dc:     { x: 398, y: 330, g: 'server',   label: 'Data centre' },
    };
    const links = [
      ['l1', 'cloud', 'fw'], ['l2', 'fw', 'hub'], ['l3', 'hub', 'br'],
      ['l4', 'hub', 'hq'], ['l5', 'hub', 'dc'], ['l6', 'agent', 'fw'],
    ];
    const path = (a, b) => `M${N[a].x} ${N[a].y} L${N[b].x} ${N[b].y}`;
    const node = (k) => {
      const n = N[k], r = n.key ? 26 : 22;
      const stroke = n.bad ? 'var(--bad)' : n.key ? 'var(--accent)' : 'var(--line-2)';
      const color = n.bad ? 'var(--bad)' : n.key ? 'var(--accent)' : '#c3ccd6';
      return `
        <g class="nm-node${n.key ? ' key' : ''}${n.bad ? ' bad' : ''}">
          ${n.key ? `<circle cx="${n.x}" cy="${n.y}" r="${r}" fill="none" stroke="var(--accent)" opacity=".5"><animate attributeName="r" values="${r};${r + 14}" dur="2.4s" repeatCount="indefinite"/><animate attributeName="opacity" values=".5;0" dur="2.4s" repeatCount="indefinite"/></circle>` : ''}
          ${k === 'agent' ? `<circle cx="${n.x}" cy="${n.y}" r="${r + 8}" fill="none" stroke="var(--accent)" stroke-dasharray="3 4" opacity=".7"><animateTransform attributeName="transform" type="rotate" from="0 ${n.x} ${n.y}" to="360 ${n.x} ${n.y}" dur="14s" repeatCount="indefinite"/></circle>` : ''}
          <circle cx="${n.x}" cy="${n.y}" r="${r}" fill="var(--card)" stroke="${stroke}" stroke-width="1.5"/>
          ${glyph(n.g, n.x, n.y, n.key ? 24 : 20, color)}
          <text x="${n.x}" y="${n.y + r + 16}" text-anchor="middle" class="nm-label">${esc(n.label)}</text>
        </g>`;
    };
    const packet = (id, dur, begin, color = '#3ab8ff', rev = false) =>
      `<circle r="3.2" fill="${color}" filter="url(#nmGlow)"><animateMotion dur="${dur}s" begin="${begin}s" repeatCount="indefinite"${rev ? ' keyPoints="1;0" keyTimes="0;1" calcMode="linear"' : ''}><mpath href="#${id}"/></animateMotion></circle>`;

    return `
      <svg class="netmap" viewBox="0 0 480 400" role="img" aria-label="Illustration: a network map. Traffic flows from the internet through a firewall and SD-WAN edge to a branch, Sydney HQ and a data centre. An AI agent connects through guardrails, and an incoming threat is blocked at the firewall.">
        <defs>
          <pattern id="nmDots" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#1b232d"/></pattern>
          <filter id="nmGlow" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <linearGradient id="nmLink" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5cf2a6" stop-opacity=".55"/><stop offset="1" stop-color="#3ab8ff" stop-opacity=".35"/></linearGradient>
        </defs>
        <rect width="480" height="400" fill="url(#nmDots)"/>
        <rect x="150" y="196" width="180" height="186" rx="16" fill="rgba(92,242,166,.035)" stroke="rgba(92,242,166,.18)" stroke-dasharray="4 5"/>
        <text x="320" y="214" text-anchor="end" class="nm-zone">protected network</text>
        ${links.map(([id, a, b]) => `<path id="${id}" d="${path(a, b)}" stroke="url(#nmLink)" stroke-width="1.6" fill="none"/>`).join('')}
        <path id="lt" d="M84 131 L212 140" stroke="var(--bad)" stroke-width="1.6" stroke-dasharray="5 5" fill="none" opacity=".8">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite"/>
        </path>
        ${packet('l1', 2.2, 0)}${packet('l2', 2.2, .6)}${packet('l3', 2.6, 1.1)}${packet('l4', 2.4, 1.4)}${packet('l5', 2.6, .9)}
        ${packet('l6', 2.8, .3, '#5cf2a6')}${packet('l2', 2.2, 1.7, '#5cf2a6', true)}
        <circle r="3.4" fill="var(--bad)" filter="url(#nmGlow)">
          <animateMotion dur="1.8s" repeatCount="indefinite"><mpath href="#lt"/></animateMotion>
          <animate attributeName="opacity" values="1;1;0" keyTimes="0;.85;1" dur="1.8s" repeatCount="indefinite"/>
        </circle>
        <g class="nm-block"><circle cx="206" cy="139" r="9" fill="var(--bg)" stroke="var(--bad)" stroke-width="1.5"/><path d="M202 135l8 8M210 135l-8 8" stroke="var(--bad)" stroke-width="2" stroke-linecap="round"/>
          <animate attributeName="opacity" values=".4;1;.4" dur="1.8s" repeatCount="indefinite"/></g>
        ${Object.keys(N).map(node).join('')}
      </svg>`;
  };

  /* ── Career path ─────────────────────────────────────────── */
  const journey = items => `
    <ol class="journey-path" aria-label="Career path">
      ${items.map(j => `
        <li class="jp${j.current ? ' current' : ''}${j.next ? ' next' : ''} reveal">
          <div class="jp-dot"><svg viewBox="0 0 24 24" aria-hidden="true">${G[j.icon] || G.target}</svg></div>
          <span class="jp-year">${esc(j.year)}</span>
          <b>${esc(j.title)}</b>
          <span class="jp-org">${esc(j.org)}</span>
        </li>`).join('')}
    </ol>`;

  /* ── Project card header art ─────────────────────────────── */
  // split a short label into at most two balanced lines
  const twoLines = s => {
    const w = String(s).split(' ');
    if (w.length < 2) return [s];
    let best = 1, diff = Infinity;
    for (let k = 1; k < w.length; k++) { const d = Math.abs(w.slice(0, k).join(' ').length - w.slice(k).join(' ').length); if (d < diff) { diff = d; best = k; } }
    return [w.slice(0, best).join(' '), w.slice(best).join(' ')];
  };
  const art = (type, p) => {
    const frame = inner => `<div class="proj-art" aria-hidden="true"><svg viewBox="0 0 320 120" preserveAspectRatio="xMidYMid meet">${inner}</svg></div>`;
    if (type === 'chain') {
      const steps = (p.flow || []).slice(0, 4);
      const cols = ['var(--bad)', '#ff8f6b', 'var(--warn)', 'var(--accent)'];
      const gl = ['bug', 'lock', 'sales', 'shield'];
      const xs = steps.map((_, i) => 40 + i * (240 / Math.max(1, steps.length - 1)));
      return frame(`
        <path d="M${xs[0]} 50 L${xs[xs.length - 1]} 50" stroke="#28333f" stroke-width="2"/>
        <path d="M${xs[0]} 50 L${xs[xs.length - 1]} 50" stroke="url(#chainG)" stroke-width="2" stroke-dasharray="240" stroke-dashoffset="240" class="draw"/>
        <defs><linearGradient id="chainG"><stop offset="0" stop-color="#ff6b6b"/><stop offset=".6" stop-color="#ffb547"/><stop offset="1" stop-color="#5cf2a6"/></linearGradient></defs>
        ${steps.map((s, i) => `
          <circle cx="${xs[i]}" cy="50" r="17" fill="var(--bg)" stroke="${cols[i]}" stroke-width="1.6"/>
          ${glyph(gl[i], xs[i], 50, 16, cols[i])}
          <text x="${xs[i]}" y="84" text-anchor="middle" class="art-label">${twoLines(s).map((l, k) => `<tspan x="${xs[i]}" dy="${k ? 12 : 0}">${esc(l)}</tspan>`).join('')}</text>`).join('')}
        <text x="${xs[0]}" y="16" class="art-tag" fill="var(--bad)">attack</text>
        <text x="${xs[xs.length - 1]}" y="16" class="art-tag" text-anchor="end" fill="var(--accent)">response</text>`);
    }
    if (type === 'verify') {
      const dev = [[34, 28], [34, 60], [34, 92]];
      return frame(`
        ${dev.map(([x, y], i) => `<rect x="${x - 16}" y="${y - 11}" width="32" height="22" rx="5" fill="var(--bg)" stroke="#28333f"/>${glyph(i === 1 ? 'shield' : 'router', x, y, 14, '#8693a1')}<path d="M${x + 16} ${y} C110 ${y} 110 60 134 60" stroke="#28333f" stroke-width="1.4" fill="none" stroke-dasharray="3 3"/>`).join('')}
        <text x="34" y="116" text-anchor="middle" class="art-label">devices</text>
        <rect x="134" y="40" width="58" height="40" rx="9" fill="var(--bg)" stroke="var(--accent-2)" stroke-width="1.4"/>
        ${glyph('search', 163, 60, 18, 'var(--accent-2)')}
        <text x="163" y="98" text-anchor="middle" class="art-label">read-only</text>
        <path d="M192 60 L226 60" stroke="var(--accent-2)" stroke-width="1.4"/><path d="M222 56l5 4-5 4" fill="none" stroke="var(--accent-2)" stroke-width="1.4"/>
        <rect x="232" y="22" width="56" height="74" rx="6" fill="var(--bg)" stroke="#28333f"/>
        <path d="M244 40h32M244 50h26M244 60h30M244 70h20" stroke="#28333f" stroke-width="3" stroke-linecap="round"/>
        <circle cx="282" cy="88" r="15" fill="var(--bg)" stroke="var(--accent)" stroke-width="1.6"/>
        <path d="M275 88l5 5 9-10" fill="none" stroke="var(--accent)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="260" y="116" text-anchor="middle" class="art-label">signed evidence</text>`);
    }
    if (type === 'meter') {
      const segs = [['var(--bad)', 1], ['#ff8f6b', 1], ['var(--warn)', 1], ['var(--accent)', 1], ['var(--accent)', .25]];
      return frame(`
        <rect x="24" y="18" width="272" height="34" rx="8" fill="var(--bg)" stroke="#28333f"/>
        ${glyph('lock', 44, 35, 16, '#8693a1')}
        <text x="62" y="40" class="art-pw">•••••••••••••</text><rect x="196" y="27" width="1.5" height="16" fill="var(--accent)" class="blink"/>
        ${segs.map(([c, o], i) => `<rect x="${24 + i * 55}" y="64" width="50" height="7" rx="3.5" fill="${c}" opacity="${o}" class="seg" style="animation-delay:${i * .15}s"/>`).join('')}
        <text x="24" y="96" class="art-label" text-anchor="start">strength</text><text x="296" y="96" class="art-label" text-anchor="end" fill="var(--accent)">strong</text>
        <text x="24" y="114" class="art-mono">entropy 72 bits</text><text x="296" y="114" class="art-mono" text-anchor="end">offline GPU: centuries</text>`);
    }
    return '';
  };

  /* ── Tool logo tile ──────────────────────────────────────── */
  const lum = hex => { const n = parseInt(hex, 16); const [r, g, b] = [n >> 16 & 255, n >> 8 & 255, n & 255].map(v => v / 255); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  const toolTile = t => {
    const L = t.logo && window.LOGOS && window.LOGOS[t.logo];
    const color = L ? (lum(L.hex) < 0.3 ? '#c3ccd6' : '#' + L.hex) : null;
    const mark = L
      ? `<svg viewBox="0 0 24 24" aria-hidden="true" style="--brand:${color}"><path d="${L.path}"/></svg>`
      : `<span class="tool-mono">${esc(t.mono || t.name.slice(0, 2).toUpperCase())}</span>`;
    return `<li class="tool reveal">${mark}<span>${esc(t.name)}</span></li>`;
  };

  return { heroMap, journey, art, toolTile, glyph };
})();
