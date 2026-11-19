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
      const color = n.bad ? 'var(--bad)' : n.key ? 'var(--accent)' : 'var(--soft)';
      return `
        <g class="nm-node${n.key ? ' key' : ''}${n.bad ? ' bad' : ''}">
          ${n.key ? `<circle cx="${n.x}" cy="${n.y}" r="${r}" fill="none" stroke="var(--accent)" opacity=".5"><animate attributeName="r" values="${r};${r + 14}" dur="2.4s" repeatCount="indefinite"/><animate attributeName="opacity" values=".5;0" dur="2.4s" repeatCount="indefinite"/></circle>` : ''}
          ${k === 'agent' ? `<circle cx="${n.x}" cy="${n.y}" r="${r + 8}" fill="none" stroke="var(--ok)" stroke-dasharray="3 4" opacity=".7"><animateTransform attributeName="transform" type="rotate" from="0 ${n.x} ${n.y}" to="360 ${n.x} ${n.y}" dur="14s" repeatCount="indefinite"/></circle>` : ''}
          <circle cx="${n.x}" cy="${n.y}" r="${r}" fill="var(--card)" stroke="${stroke}" stroke-width="1.5"/>
          ${glyph(n.g, n.x, n.y, n.key ? 24 : 20, color)}
          <text x="${n.x}" y="${n.y + r + 16}" text-anchor="middle" class="nm-label">${esc(n.label)}</text>
        </g>`;
    };
    const packet = (id, dur, begin, color = 'var(--accent-2)', rev = false) =>
      `<circle r="3.2" fill="${color}" filter="url(#nmGlow)"><animateMotion dur="${dur}s" begin="${begin}s" repeatCount="indefinite"${rev ? ' keyPoints="1;0" keyTimes="0;1" calcMode="linear"' : ''}><mpath href="#${id}"/></animateMotion></circle>`;

    return `
      <svg class="netmap" viewBox="0 0 480 400" role="img" aria-label="Illustration: a network map. Traffic flows from the internet through a firewall and SD-WAN edge to a branch, Sydney HQ and a data centre. An AI agent connects through guardrails, and an incoming threat is blocked at the firewall.">
        <defs>
          <pattern id="nmDots" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="var(--line)"/></pattern>
          <filter id="nmGlow" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <linearGradient id="nmLink" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--ok)" stop-opacity=".6"/><stop offset="1" stop-color="var(--accent-2)" stop-opacity=".4"/></linearGradient>
        </defs>
        <rect width="480" height="400" fill="url(#nmDots)"/>
        <rect x="150" y="196" width="180" height="186" rx="16" fill="rgba(var(--ok-rgb),.05)" stroke="rgba(var(--ok-rgb),.28)" stroke-dasharray="4 5"/>
        <text x="320" y="214" text-anchor="end" class="nm-zone">protected network</text>
        ${links.map(([id, a, b]) => `<path id="${id}" d="${path(a, b)}" stroke="url(#nmLink)" stroke-width="1.6" fill="none"/>`).join('')}
        <path id="lt" d="M84 131 L212 140" stroke="var(--bad)" stroke-width="1.6" stroke-dasharray="5 5" fill="none" opacity=".8">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite"/>
        </path>
        ${packet('l1', 2.2, 0)}${packet('l2', 2.2, .6)}${packet('l3', 2.6, 1.1)}${packet('l4', 2.4, 1.4)}${packet('l5', 2.6, .9)}
        ${packet('l6', 2.8, .3, 'var(--ok)')}${packet('l2', 2.2, 1.7, 'var(--ok)', true)}
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
    <ol class="journey-path" aria-label="Career path" style="--n:${items.length}">
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
  // Palette colours for SMIL <animate values="…">, which can't read CSS variables.
  const css = (name, fallback) => (getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback);
  const f = n => +n.toFixed(4);
  // Each illustration loops while on screen (js/main.js plays/pauses them).
  // data-rest = the moment shown as a still frame for reduced-motion visitors.
  const art = (type, p) => {
    const frame = (inner, rest) => `<div class="proj-art" aria-hidden="true"><svg viewBox="0 0 320 120" preserveAspectRatio="xMidYMid meet" data-rest="${rest}">${inner}</svg></div>`;
    const anim = (attr, values, keyTimes, dur, extra = '') =>
      `<animate attributeName="${attr}" values="${values}" keyTimes="${keyTimes}" dur="${dur}s" repeatCount="indefinite" calcMode="linear"${extra}/>`;

    /* Attack chain: a packet moves from compromise to containment; each stage pulses as it's reached. */
    if (type === 'chain') {
      const D = 4.5;
      const steps = (p.flow || []).slice(0, 4);
      const hex = [css('--bad', '#f43f5e'), '#fb923c', css('--warn', '#fbbf24'), css('--ok', '#4f8cff')];
      const cols = ['var(--bad)', '#fb923c', 'var(--warn)', 'var(--ok)'];
      const gl = ['bug', 'lock', 'sales', 'shield'];
      const xs = steps.map((_, i) => 40 + i * (240 / Math.max(1, steps.length - 1)));
      const travel = .7;                                   // share of the cycle the packet is moving
      const at = i => travel * i / Math.max(1, steps.length - 1);
      return frame(`
        <path d="M${xs[0]} 50 L${xs[xs.length - 1]} 50" stroke="var(--line-2)" stroke-width="2"/>
        <path d="M${xs[0]} 50 L${xs[xs.length - 1]} 50" stroke="url(#chainG)" stroke-width="2" stroke-dasharray="240" stroke-dashoffset="240" class="draw"/>
        <defs><linearGradient id="chainG"><stop offset="0" stop-color="var(--bad)"/><stop offset=".6" stop-color="var(--warn)"/><stop offset="1" stop-color="var(--ok)"/></linearGradient></defs>
        ${steps.map((s, i) => `
          <circle cx="${xs[i]}" cy="50" r="17" fill="none" stroke="${cols[i]}" stroke-width="1.6" opacity="0">
            <animate attributeName="r" values="17;28;28" keyTimes="0;.14;1" dur="${D}s" begin="${f(at(i) * D)}s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values=".9;0;0" keyTimes="0;.14;1" dur="${D}s" begin="${f(at(i) * D)}s" repeatCount="indefinite"/>
          </circle>
          <circle cx="${xs[i]}" cy="50" r="17" fill="var(--bg)" stroke="${cols[i]}" stroke-width="1.6"/>
          ${glyph(gl[i], xs[i], 50, 16, cols[i])}
          <text x="${xs[i]}" y="84" text-anchor="middle" class="art-label">${twoLines(s).map((l, k) => `<tspan x="${xs[i]}" dy="${k ? 12 : 0}">${esc(l)}</tspan>`).join('')}</text>`).join('')}
        <circle r="4.2" fill="${hex[0]}" opacity="0">
          <animateMotion dur="${D}s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;${travel};1" path="M${xs[0]} 50 L${xs[xs.length - 1]} 50"/>
          ${anim('fill', hex.join(';') + ';' + hex[3], steps.map((_, i) => f(at(i))).join(';') + ';1', D)}
          ${anim('opacity', '0;1;1;0;0', `0;.03;${travel - .02};${travel + .06};1`, D)}
        </circle>
        <text x="${xs[0]}" y="16" class="art-tag" fill="var(--bad)">attack</text>
        <text x="${xs[xs.length - 1]}" y="16" class="art-tag" text-anchor="end" fill="var(--ok)">response</text>`, 4.3);
    }

    /* EdgeClosure: device data flows into a read-only collector, then into signed evidence. */
    if (type === 'verify') {
      const D = 4;
      const cyan = css('--accent-2', '#22d3ee');
      const dev = [[34, 28], [34, 60], [34, 92]];
      const lines = [[244, 40, 32], [244, 50, 26], [244, 60, 30], [244, 70, 20]];
      return frame(`
        ${dev.map(([x, y], i) => `<rect x="${x - 16}" y="${y - 11}" width="32" height="22" rx="5" fill="var(--bg)" stroke="var(--line-2)"/>${glyph(i === 1 ? 'shield' : 'router', x, y, 14, 'var(--muted)')}<path id="vfy${i}" d="M${x + 16} ${y} C110 ${y} 110 60 134 60" stroke="var(--line-2)" stroke-width="1.4" fill="none" stroke-dasharray="3 3"/>`).join('')}
        ${dev.map((_, i) => `<circle r="2.8" fill="${cyan}" opacity="0">
          <animateMotion dur="${D}s" begin="${i * .22}s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;.28;1"><mpath href="#vfy${i}"/></animateMotion>
          ${anim('opacity', '0;1;1;0;0', '0;.02;.26;.29;1', D, ` begin="${i * .22}s"`)}
        </circle>`).join('')}
        <text x="34" y="116" text-anchor="middle" class="art-label">devices</text>
        <rect x="134" y="40" width="58" height="40" rx="9" fill="var(--bg)" stroke="var(--accent-2)" stroke-width="1.4"/>
        <rect x="130" y="36" width="66" height="48" rx="12" fill="none" stroke="var(--accent-2)" stroke-width="1.2" opacity="0">${anim('opacity', '0;0;.8;0;0', '0;.3;.38;.52;1', D)}</rect>
        ${glyph('search', 163, 60, 18, 'var(--accent-2)')}
        <text x="163" y="98" text-anchor="middle" class="art-label">read-only</text>
        <path d="M192 60 L226 60" stroke="var(--accent-2)" stroke-width="1.4"/><path d="M222 56l5 4-5 4" fill="none" stroke="var(--accent-2)" stroke-width="1.4"/>
        <circle r="2.8" fill="${cyan}" opacity="0">
          <animateMotion dur="${D}s" repeatCount="indefinite" calcMode="linear" keyPoints="0;0;1;1" keyTimes="0;.4;.5;1" path="M192 60 L226 60"/>
          ${anim('opacity', '0;0;1;1;0;0', '0;.39;.4;.49;.51;1', D)}
        </circle>
        <rect x="232" y="22" width="56" height="74" rx="6" fill="var(--bg)" stroke="var(--line-2)"/>
        <path d="M244 40h32M244 50h26M244 60h30M244 70h20" stroke="var(--line-2)" stroke-width="3" stroke-linecap="round"/>
        ${lines.map(([x, y, w], i) => `<path d="M${x} ${y}h${w}" stroke="${cyan}" stroke-opacity=".75" stroke-width="3" stroke-linecap="round" stroke-dasharray="${w}" stroke-dashoffset="${w}">
          ${anim('stroke-dashoffset', `${w};${w};0;0;${w}`, `0;${f(.5 + i * .05)};${f(.58 + i * .05)};.94;1`, D)}</path>`).join('')}
        <circle cx="282" cy="88" r="15" fill="var(--bg)" stroke="var(--ok)" stroke-width="1.6">${anim('r', '15;15;18.5;15;15', '0;.76;.81;.87;1', D)}</circle>
        <path d="M275 88l5 5 9-10" fill="none" stroke="var(--ok)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="22" stroke-dashoffset="22">
          ${anim('stroke-dashoffset', '22;22;0;0;22', '0;.76;.84;.95;1', D)}</path>
        <text x="260" y="116" text-anchor="middle" class="art-label">signed evidence</text>`, 3.6);
    }

    /* Password meter: characters type in, bars fill, the verdict climbs from weak to strong. */
    if (type === 'meter') {
      const D = 5;
      const N = 13, t0 = .06, dt = .034;                   // one dot every ~0.17s
      const tk = k => f(t0 + k * dt), end = f(t0 + N * dt);
      const segs = [['var(--bad)', 1], ['#fb923c', 3], ['var(--warn)', 6], ['var(--ok)', 9], ['var(--ok)', 12]];
      const phases = [                                      // [label, colour, entropy, crack time, from, to]
        ['weak', 'var(--bad)', '18 bits', 'seconds', 0, tk(4)],
        ['fair', 'var(--warn)', '46 bits', 'months', tk(4), tk(9)],
        ['strong', 'var(--ok)', '72 bits', 'centuries', tk(9), 1],
      ];
      const win = (from, to) => from === 0
        ? anim('opacity', '1;1;0;0', `0;${f(to - .005)};${to};1`, D)
        : anim('opacity', `0;0;1;1;0;0`, `0;${f(from - .005)};${from};${to === 1 ? .93 : f(to - .005)};${to === 1 ? .97 : to};1`, D);
      return frame(`
        <rect x="24" y="18" width="272" height="34" rx="8" fill="var(--bg)" stroke="var(--line-2)"/>
        ${glyph('lock', 44, 35, 16, 'var(--muted)')}
        ${Array.from({ length: N }, (_, k) => `<circle cx="${f(66 + k * 10.4)}" cy="35" r="2.7" fill="var(--soft)" opacity="0">${anim('opacity', '0;0;1;1;0;0', `0;${f(tk(k) - .002)};${tk(k)};.93;.96;1`, D)}</circle>`).join('')}
        <rect x="62" y="27" width="1.5" height="16" fill="var(--accent)">${anim('x', `62;${f(62 + N * 10.4)};${f(62 + N * 10.4)};62`, `0;${end};.96;1`, D)}${anim('opacity', '1;0;1;0;1;0;1;0;1', '0;.12;.24;.36;.48;.6;.72;.84;1', D, ' calcMode="discrete"')}</rect>
        <rect x="24" y="64" width="270" height="7" rx="3.5" fill="var(--line)"/>
        ${segs.map(([c, at], i) => `<rect x="${24 + i * 55}" y="64" width="50" height="7" rx="3.5" fill="${c}" opacity="0">${anim('opacity', '0;0;1;1;0;0', `0;${f(tk(at) - .002)};${tk(at)};.93;.96;1`, D)}</rect>`).join('')}
        <text x="24" y="96" class="art-label" text-anchor="start">strength</text>
        ${phases.map(([label, col, bits, crack, from, to]) => `
          <g opacity="${from === 0 ? 1 : 0}">${win(from, to)}
            <text x="296" y="96" class="art-label" text-anchor="end" fill="${col}">${label}</text>
            <text x="24" y="114" class="art-mono">entropy ${bits}</text>
            <text x="296" y="114" class="art-mono" text-anchor="end">offline GPU: ${crack}</text>
          </g>`).join('')}`, 4.5);
    }
    /* Speech emotion: waveform → MFCC features → emotion probabilities (illustrative). */
    if (type === 'speech') {
      const D = 4, cyan = css('--accent-2', '#22d3ee');
      const bars = Array.from({ length: 22 }, (_, i) => {
        const x = 16 + i * 5, h = 6 + Math.abs(Math.sin(i * 1.3)) * 22;
        return `<rect x="${x}" y="${60 - h / 2}" width="3" height="${h}" rx="1.5" fill="${cyan}" opacity=".85">${anim('height', `${h};${h * .35};${h}`, '0;.5;1', 1.2, ` begin="${f(i * .05)}s"`)}${anim('y', `${60 - h / 2};${60 - h * .175};${60 - h / 2}`, '0;.5;1', 1.2, ` begin="${f(i * .05)}s"`)}</rect>`;
      }).join('');
      const grid = Array.from({ length: 16 }, (_, i) => `<rect x="${140 + (i % 4) * 9}" y="${42 + Math.floor(i / 4) * 9}" width="7" height="7" rx="1.5" fill="var(--accent)" opacity="${f(.2 + ((i * 7) % 5) / 7)}">${anim('opacity', `.15;${f(.3 + ((i * 3) % 5) / 7)};.15`, '0;.5;1', D, ` begin="${f(i * .08)}s"`)}</rect>`).join('');
      const emo = [['happy', 'var(--ok)', 46], ['calm', 'var(--accent-2)', 26], ['angry', 'var(--bad)', 12], ['sad', 'var(--muted)', 8]];
      return frame(`
        ${bars}
        <text x="70" y="98" text-anchor="middle" class="art-label">audio</text>
        <path d="M128 60h8" stroke="var(--line-2)" stroke-width="1.4"/>
        ${grid}<text x="158" y="98" text-anchor="middle" class="art-label">MFCC</text>
        <path d="M180 60h10" stroke="var(--line-2)" stroke-width="1.4"/>
        ${emo.map(([n, c, w], i) => `<text x="196" y="${38 + i * 15}" class="art-mono">${n}</text><rect x="232" y="${32 + i * 15}" width="${w * 1.6}" height="6" rx="3" fill="${c}">${anim('width', `0;0;${w * 1.6};${w * 1.6};0`, '0;.2;.45;.92;1', D)}</rect>`).join('')}
        <text x="258" y="98" text-anchor="middle" class="art-label">emotion</text>`, 3);
    }

    /* Smart campus: map with buildings; a GPS dot follows a route to the destination (illustrative). */
    if (type === 'campus') {
      const D = 5, ok = css('--ok', '#4f8cff');
      const blds = [[30, 20, 40, 26], [92, 14, 34, 34], [150, 60, 46, 28], [222, 18, 38, 30], [262, 70, 40, 26], [40, 72, 50, 24]];
      return frame(`
        <path d="M0 52H320M118 0V120M210 0V120" stroke="var(--line)" stroke-width="10"/>
        ${blds.map(([x, y, w, h]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="var(--bg)" stroke="var(--line-2)"/>`).join('')}
        <path id="campusRoute" d="M20 52 H118 V100 H210 V52 H282" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4" stroke-linecap="round"/>
        <circle cx="20" cy="52" r="4" fill="var(--muted)"/>
        <g transform="translate(282 40)"><path d="M0 12s-8-7-8-12a8 8 0 0116 0c0 5-8 12-8 12z" fill="var(--accent)"/><circle cy="0" r="3" fill="var(--bg)"/></g>
        <circle r="5" fill="${ok}" stroke="#fff" stroke-width="1.5">
          <animateMotion dur="${D}s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;.8;1"><mpath href="#campusRoute"/></animateMotion>
        </circle>
        <circle r="5" fill="none" stroke="${ok}">
          <animateMotion dur="${D}s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;.8;1"><mpath href="#campusRoute"/></animateMotion>
          ${anim('r', '5;14', '0;1', 1.2)}${anim('opacity', '.8;0', '0;1', 1.2)}
        </circle>
        <text x="282" y="70" text-anchor="middle" class="art-label">library</text>`, 4.2);
    }

    /* DeceptID: consented camera → evidence processing (face + PAD) → policy decision → audit. Illustrative. */
    if (type === 'identity') {
      const D = 4.5, cyan = css('--accent-2', '#22d3ee'), ok = css('--ok', '#4f8cff'), bad = css('--bad', '#f43f5e');
      const box = (x, w, label, g, col) => `<rect x="${x}" y="40" width="${w}" height="40" rx="9" fill="var(--bg)" stroke="${col}" stroke-width="1.4"/>${glyph(g, x + w / 2, 60, 17, col)}<text x="${x + w / 2}" y="98" text-anchor="middle" class="art-label">${label}</text>`;
      return frame(`
        <text x="160" y="16" text-anchor="middle" class="art-tag" fill="var(--muted)">illustrative architecture</text>
        <path id="idp" d="M58 60 L262 60" stroke="var(--line-2)" stroke-width="1.4" stroke-dasharray="3 3"/>
        ${box(14, 44, 'camera', 'search', 'var(--muted)')}
        ${box(92, 56, 'face + PAD', 'sales', 'var(--accent-2)')}
        <rect x="88" y="36" width="64" height="48" rx="12" fill="none" stroke="var(--accent-2)" opacity="0">${anim('opacity', '0;0;.8;0;0', '0;.22;.3;.42;1', D)}</rect>
        ${box(182, 48, 'policy', 'shield', 'var(--ok)')}
        <rect x="178" y="36" width="56" height="48" rx="12" fill="none" stroke="var(--ok)" opacity="0">${anim('opacity', '0;0;.85;0;0', '0;.46;.54;.66;1', D)}</rect>
        ${box(262, 44, 'audit', 'doc', 'var(--muted)')}
        <circle r="3" fill="${cyan}" opacity="0">
          <animateMotion dur="${D}s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;.7;1"><mpath href="#idp"/></animateMotion>
          ${anim('fill', `${cyan};${cyan};${ok};${ok}`, '0;.45;.52;1', D)}
          ${anim('opacity', '0;1;1;0;0', '0;.03;.68;.74;1', D)}
        </circle>
        <text x="206" y="116" text-anchor="middle" class="art-mono" fill="${bad}" opacity="0">spoof → deny${anim('opacity', '0;0;1;1;0;0', '0;.55;.58;.8;.84;1', D)}</text>`, 3.2);
    }
    return '';
  };

  /* ── Tool logo tile ──────────────────────────────────────── */
  const lum = hex => { const n = parseInt(hex, 16); const [r, g, b] = [n >> 16 & 255, n >> 8 & 255, n & 255].map(v => v / 255); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  const toolTile = t => {
    const L = t.logo && window.LOGOS && window.LOGOS[t.logo];
    const color = L ? (lum(L.hex) < 0.3 ? 'var(--soft)' : '#' + L.hex) : null;
    const mark = L
      ? `<svg viewBox="0 0 24 24" aria-hidden="true" style="--brand:${color}"><path d="${L.path}"/></svg>`
      : `<span class="tool-mono">${esc(t.mono || t.name.slice(0, 2).toUpperCase())}</span>`;
    return `<li class="tool reveal">${mark}<span>${esc(t.name)}</span></li>`;
  };

  return { heroMap, journey, art, toolTile, glyph };
})();
