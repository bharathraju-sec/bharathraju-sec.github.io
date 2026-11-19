/**
 * Builds every section of the page from window.PORTFOLIO (js/data.js).
 * You normally don't need to edit this file — change js/data.js instead.
 */
(() => {
  const D = window.PORTFOLIO;
  if (!D) { console.error('js/data.js did not load'); return; }

  /* ── helpers ───────────────────────────────── */
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // escape, then turn **text** into <b>text</b>
  const rich = (s, tag = 'strong') => esc(s).replace(/\*\*(.+?)\*\*/g, `<${tag}>$1</${tag}>`);
  const chip = t => t.startsWith('*') ? `<span class="chip core">${esc(t.slice(1))}</span>` : `<span class="chip">${esc(t)}</span>`;
  const chips = (tags = []) => `<div class="chips">${tags.map(chip).join('')}</div>`;
  const pad = n => String(n).padStart(2, '0');
  const ext = 'target="_blank" rel="noopener"';
  const head = (label, title, em, lede) => `
    <div class="sec-head reveal">
      <div class="label">${esc(label)}</div>
      <h2>${esc(title)} <em>${esc(em)}</em></h2>
      ${lede ? `<p class="lede">${esc(lede)}</p>` : ''}
    </div>`;

  const ICONS = {
    network: '<circle cx="5" cy="12" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 12h5m0 0l5-6m-5 6l5 6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
    shield: '<path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/>',
    shieldCheck: '<path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/>',
    terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M8 15h3"/>',
    alert: '<path d="M12 9v4m0 4h.01M10.3 3.9L2 18a2 2 0 001.7 3h16.6a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/>',
    chip: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h6v6H9z"/>',
    tool: '<path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z"/>',
    code: '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/>',
    mic: '<path d="M12 3a3 3 0 013 3v6a3 3 0 01-6 0V6a3 3 0 013-3zM5 11a7 7 0 0014 0M12 18v3"/>',
    pin: '<path d="M12 21s-7-6.2-7-12a7 7 0 0114 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    download: '<path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h3"/>',
    people: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0M16 4.5a3.5 3.5 0 010 7M18 20a6.5 6.5 0 00-2.5-5.1"/>',
  };
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">${ICONS[name] || ICONS.shield}</svg>`;
  const GH = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.6 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .5z"/></svg>';
  const LI = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z"/></svg>';

  const P = D.person;
  const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };

  /* ── nav ───────────────────────────────────── */
  const NAV = [['focus', 'Focus'], ['about', 'About'], ['experience', 'Experience'], ['projects', 'Projects'], ['skills', 'Skills'], ['credentials', 'Credentials'], ['contact', 'Contact']];
  set('brand', `<span class="dot"></span>${esc(P.terminalUser)}`);
  set('links', NAV.map(([id, t]) => `<a href="#${id}">${t}</a>`).join(''));
  set('sheetLinks', NAV.map(([id, t]) => `<a href="#${id}">${t}</a>`).join(''));
  document.querySelectorAll('[data-resume]').forEach(a => a.setAttribute('href', P.resume));

  /* ── hero ──────────────────────────────────── */
  set('heroText', `
    ${P.status ? `<div class="status"><i></i>${esc(P.status)}</div>` : ''}
    <div class="h1-wrap"><h1 id="heroName">${esc(P.firstLine)}<br><span class="grad">${esc(P.secondLine)}</span></h1></div>
    <div class="role">${P.roles.map(r => `<span>${esc(r)}</span>`).join('')}</div>
    <p class="tagline">${esc(P.tagline)}${P.taglineStrong ? ` <b>${esc(P.taglineStrong)}</b>` : ''}</p>
    <div class="cta">
      <a href="#projects" class="btn primary">View my work →</a>
      <a href="${esc(P.resume)}" class="btn" download>Download résumé</a>
      <a href="#contact" class="btn">Get in touch</a>
    </div>`);
  const GFX = window.GFX || {};
  if (GFX.heroMap) set('heroMap', GFX.heroMap());

  /* ── sections ──────────────────────────────── */
  const stats = `
    <div class="stats"><div class="wrap">
      ${D.stats.map(s => `<div class="stat"><div class="n" data-count="${+s.value}">${+s.value}${s.suffix ? `<sup>${esc(s.suffix)}</sup>` : ''}</div><div class="t">${esc(s.label)}</div></div>`).join('')}
    </div></div>`;

  const F = D.focus;
  const focus = `
    <section id="focus"><div class="wrap">
      ${head(F.label, F.title, F.titleEm, F.lede)}
      <div class="focus">
        ${F.items.map(i => `
          <article class="pillar reveal">
            <div class="ico">${icon(i.icon)}</div>
            <h3>${esc(i.title)}</h3>
            <p>${esc(i.text)}</p>
            <div class="proof">${rich(i.proof, 'b')}</div>
          </article>`).join('')}
      </div>
    </div></section>`;

  const A = D.about;
  const about = `
    <section class="about" id="about" style="padding-top:20px"><div class="wrap about-grid">
      <div class="reveal">
        <div class="label">About</div>
        <h2>${esc(A.title)}<br><em>${esc(A.titleEm)}</em></h2>
        ${A.paragraphs.map(p => `<p>${rich(p)}</p>`).join('')}
      </div>
      <div class="term reveal" id="term" role="img" aria-label="${esc('Terminal summary: ' + D.terminal.map(l => l.out.replace(/\n/g, ', ')).join('. '))}">
        <div class="term-bar"><b></b><b></b><b></b><span>~/profile — zsh</span></div>
        <pre id="termText" aria-hidden="true"></pre>
      </div>
    </div></section>`;

  const job = j => j.compact ? `
    <article class="job compact reveal">
      <div class="job-head">
        <div><h3 style="font-size:18px">${esc(j.role)}</h3><span class="co">${esc(j.company)}</span></div>
        <div class="when">${esc(j.period)} · ${esc(j.location)}</div>
      </div>
      ${j.summary ? `<p>${esc(j.summary)}</p>` : ''}
    </article>` : `
    <article class="job${j.current ? ' current' : ''} reveal">
      <div class="job-head">
        <div><h3>${esc(j.role)}</h3><span class="co">${esc(j.company)}</span></div>
        <div class="when"><b>${esc(j.period)}</b><br>${esc(j.location)}</div>
      </div>
      ${j.highlight ? `<div class="highlight"><b>${esc(j.highlight.label)}</b>${esc(j.highlight.text)}</div>` : ''}
      <ul>${(j.bullets || []).map(b => `<li>${esc(b)}</li>`).join('')}</ul>
      ${chips(j.tags)}
    </article>`;
  const experience = `
    <section id="experience" style="padding-top:40px"><div class="wrap">
      ${head('Experience', "Where I've", 'worked')}
      ${D.journey?.length && GFX.journey ? GFX.journey(D.journey) : ''}
      <div class="timeline">${D.experience.map(job).join('')}</div>
    </div></section>`;

  const story = rows => `<div class="case">${rows.map(([k, v]) => `<div><b>${esc(k)}</b>${esc(v)}</div>`).join('')}</div>`;
  const miniFlow = (steps, label) => !steps ? '' :
    `<div class="mini-flow" aria-label="${esc(label)}">${steps.map((s, i) => `<span${i === steps.length - 1 ? ' class="on"' : ''}>${esc(s)}</span>`).join('<em>→</em>')}</div>`;
  // --i orders each step in the animated walk-through (see .flow.live in css/style.css)
  const diagram = d => {
    const n = d.steps.length;
    return `
    <div class="flow" aria-label="${esc(d.label)}" style="--n:${n}">
      ${d.steps.map((s, i) => `<div class="row"><div class="node fstep${s.gate ? ' gate' : ''}" style="--i:${i}">${esc(s.text)}<small>${esc(s.tag)}</small></div></div><div class="arrow" style="--i:${i}"></div>`).join('')}
      <div class="split">
        <div class="node gate fallow">${esc(d.allow.text)}<small>${esc(d.allow.tag)}</small></div>
        <div class="node bad fblock">${esc(d.block.text)}<small>${esc(d.block.tag)}</small></div>
      </div>
      <div class="caption">${esc(d.caption)}</div>
    </div>`;
  };
  const projLink = l => !l ? '' : `<a class="proj-link" href="${esc(l.url)}" ${ext}>${GH}${esc(l.text)}</a>`;
  const project = (p, i) => {
    const titleHtml = `${esc(p.title)}${p.badge ? ` <span class="badge">${esc(p.badge)}</span>` : ''}`;
    if (p.featured) return `
      <article class="proj featured reveal">
        <span class="num">${pad(i + 1)}</span>
        <div>
          <div class="kind">${esc(p.kind)}</div>
          <h3>${titleHtml}</h3>
          <div class="meta">${esc(p.meta)}</div>
          ${story(p.story)}
          ${chips(p.tags)}
          ${projLink(p.link)}
        </div>
        ${p.diagram ? diagram(p.diagram) : ''}
      </article>`;
    return `
      <article class="proj reveal">
        ${p.art && GFX.art ? GFX.art(p.art, p) : ''}
        <span class="num">${pad(i + 1)}</span>
        <div class="kind">${esc(p.kind)}</div>
        <h3>${titleHtml}</h3>
        <div class="meta">${esc(p.meta)}</div>
        ${p.art === 'chain' ? '' : miniFlow(p.flow, p.title + ' flow')}
        ${story(p.story)}
        ${chips(p.tags)}
        ${projLink(p.link)}
      </article>`;
  };
  const projects = `
    <section id="projects"><div class="wrap">
      ${head('Selected work', 'Security', 'projects', 'Research and builds across agentic AI security, incident response and network assurance.')}
      <div class="projects">${D.projects.map(project).join('')}</div>
      ${D.earlierProjects?.length ? `
        <div class="earlier reveal">
          <h3>// Earlier projects</h3>
          <div class="earlier-grid">
            ${D.earlierProjects.map(e => `
              <div class="mini${e.art ? ' has-art' : ''}">
                ${e.art && GFX.art ? GFX.art(e.art, e) : ''}
                <div class="ic">${icon(e.icon)}</div>
                <div><b>${esc(e.title)}</b><p>${esc(e.text)}</p>${chips(e.tags)}${projLink(e.link)}</div>
              </div>`).join('')}
          </div>
        </div>` : ''}
      <div class="more reveal"><a class="btn" href="${esc(P.github)}" ${ext}>All code on GitHub ↗</a></div>
    </div></section>`;

  const skills = `
    <section id="skills" style="background:var(--bg-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)"><div class="wrap">
      <div class="sec-head reveal">
        <div class="label">Toolkit</div>
        <h2>Skills &amp; <em>stack</em></h2>
      </div>
      ${D.tools?.length && GFX.toolTile ? `<ul class="tools" aria-label="Tools I use">${D.tools.map(GFX.toolTile).join('')}</ul>` : ''}
      <div class="legend reveal"><span><i class="core"></i>Used day-to-day / in projects</span><span><i></i>Working knowledge</span></div>
      <div class="matrix reveal">
        ${D.skills.map(s => `<div class="mrow"><h3>${icon(s.icon)}${esc(s.name)}</h3>${chips(s.tags)}</div>`).join('')}
      </div>
    </div></section>`;

  const credentials = `
    <section id="credentials"><div class="wrap">
      ${head('Credentials', 'Certifications &', 'education')}
      <div class="cred-grid">
        <div>
          ${[['Certifications', D.certifications.filter(c => !c.training)], ['Training', D.certifications.filter(c => c.training)]].filter(([, l]) => l.length).map(([t, list]) => `
            <h3 class="cred-sub reveal">${t}</h3>
            <div class="certs">
              ${list.map(c => `<div class="cert${c.key ? ' key' : ''} reveal"><div class="ic">${esc(c.abbr)}</div><div><b>${esc(c.name)}</b><span>${esc(c.issuer)}</span></div></div>`).join('')}
            </div>`).join('')}
        </div>
        <div class="side">
          ${D.education.map(e => `
            <div class="edu reveal">
              <small>Education · ${esc(e.period)}</small>
              <b>${esc(e.degree)}</b>
              <span>${esc(e.school)}</span>
            </div>`).join('')}
          ${D.activities?.length ? `
            <div class="acts reveal">
              <small>Leadership &amp; activities</small>
              <ul>${D.activities.map(a => `<li>${esc(a)}</li>`).join('')}</ul>
            </div>` : ''}
        </div>
      </div>
    </div></section>`;

  // "Send email" opens the visitor's mail app directly, with the subject pre-filled
  const subj = encodeURIComponent(D.contact.subject || `Hello ${P.firstLine.split(' ')[0]}`);
  const mailto = `mailto:${esc(P.email)}?subject=${subj}`;
  const contact = `
    <section class="contact" id="contact"><div class="wrap reveal">
      <div class="label">Contact</div>
      <h2>Let's <em>connect</em></h2>
      <p class="lede">${esc(D.contact.lede)}</p>
      <div class="mail">
        <a href="${mailto}" id="mailLink">${esc(P.email)}</a>
        <a href="${mailto}" class="mail-send">${icon('mail')}Send email</a>
      </div>
      <div class="socials">
        <a href="${esc(P.linkedin)}" ${ext}>${LI}LinkedIn</a>
        <a href="${esc(P.github)}" ${ext}>${GH}GitHub</a>
        <a href="${esc(P.resume)}" download>${icon('download')}Résumé (PDF)</a>
      </div>
    </div></section>`;

  set('main', stats + focus + about + experience + projects + skills + credentials + contact);
  set('footerText', `© ${new Date().getFullYear()} ${esc(P.fullName)} · ${esc(P.location)}`);
})();
