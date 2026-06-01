/**
 * ╔══════════════════════════════════════════════════════╗
 * ║  MAIN INTERACTIONS                                   ║
 * ║  File: js/main.js                                    ║
 * ║  Do NOT edit unless changing interaction logic.      ║
 * ╚══════════════════════════════════════════════════════╝
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll shadow ── */
  const nav = document.getElementById('navbar');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  /* ── Mobile hamburger ── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const open = mobileNav.classList.contains('open');
      hamburger.querySelectorAll('span').forEach(s => {
        s.style.background = open ? 'var(--accent)' : 'var(--navy)';
      });
    });
  }

  /* ── Active nav link ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = (link.getAttribute('href') || '').split('/').pop();
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Scroll reveal ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  // Observe static + dynamically added .reveal elements
  function observeReveals() {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
  }
  observeReveals();

  // Re-observe after dynamic render (data.js fills DOM after DOMContentLoaded)
  setTimeout(observeReveals, 200);

  /* ── Skill bar animation ── */
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          const w = bar.getAttribute('data-width') || bar.style.width;
          bar.style.transition = 'width 1.1s ease';
          bar.style.width = parseInt(w) + '%';
        });
        barObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.25 });

  function observeBars() {
    document.querySelectorAll('.skill-category, .skill-section, #hero-panel-skills').forEach(el => barObserver.observe(el));
    // Also trigger hero panel bars
    document.querySelectorAll('.hero-right .skill-bar-fill, #hero-panel-skills .skill-bar-fill').forEach(bar => {
      const w = bar.getAttribute('data-width');
      if (w) { bar.style.transition = 'width 1.2s ease'; setTimeout(() => { bar.style.width = w + '%'; }, 600); }
    });
  }
  observeBars();
  setTimeout(observeBars, 300);

  /* ── Contact form ── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name    = document.getElementById('name')?.value.trim();
      const email   = document.getElementById('email')?.value.trim();
      const message = document.getElementById('message')?.value.trim();
      if (!name || !email || !message) return;
      form.style.opacity = '0.4';
      form.style.pointerEvents = 'none';
      const success = document.getElementById('form-success');
      if (success) success.style.display = 'block';
      // ← Wire to Formspree or EmailJS here for real email delivery
    });
  }

  /* ── Smooth scroll anchors ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

});
