/**
 * ╔══════════════════════════════════════════════════════╗
 * ║  SHARED NAV + FOOTER                                 ║
 * ║  File: js/nav.js                                     ║
 * ║  Do NOT edit unless changing nav structure.          ║
 * ╚══════════════════════════════════════════════════════╝
 */

function buildNav(isHome) {
  const base = isHome ? '' : '../';
  return `
<nav class="nav" id="navbar">
  <div class="nav-inner">
    <a href="${base}index.html" class="nav-logo">BHARATH<span>.</span>RAJU</a>
    <ul class="nav-links">
      <li><a href="${base}index.html">Home</a></li>
      <li><a href="${base}pages/about.html">About</a></li>
      <li><a href="${base}pages/experience.html">Experience</a></li>
      <li><a href="${base}pages/projects.html">Projects</a></li>
      <li><a href="${base}pages/skills.html">Skills</a></li>
      <li><a href="${base}pages/contact.html" class="btn btn-accent nav-cta">Hire Me</a></li>
    </ul>
    <div class="nav-hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </div>
  </div>
  <div class="nav-mobile" id="mobile-nav">
    <a href="${base}index.html">Home</a>
    <a href="${base}pages/about.html">About</a>
    <a href="${base}pages/experience.html">Experience</a>
    <a href="${base}pages/projects.html">Projects</a>
    <a href="${base}pages/skills.html">Skills</a>
    <a href="${base}pages/contact.html">Contact</a>
  </div>
</nav>`;
}

function buildFooter() {
  return `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-logo">BHARATH<span>.</span>RAJU</div>
    <ul class="footer-links">
      <li><a href="#" data-email data-email-label="Email">Email</a></li>
      <li><a href="#" data-linkedin target="_blank" rel="noopener">LinkedIn</a></li>
      <li><a href="#" data-github target="_blank" rel="noopener">GitHub</a></li>
    </ul>
    <p class="footer-copy">© <span class="year"></span> Bharath Raju Subramani · Sydney, AU</p>
  </div>
</footer>`;
}

// Inject nav
const navEl = document.getElementById('nav-placeholder');
if (navEl) {
  const isHome = navEl.dataset.home === 'true';
  navEl.outerHTML = buildNav(isHome);
}

// Inject footer
const footerEl = document.getElementById('footer-placeholder');
if (footerEl) footerEl.outerHTML = buildFooter();
