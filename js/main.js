/* ══════════════════════════════════════════════
   Ran Talks Design — Main JavaScript
   ══════════════════════════════════════════════ */



// ── Scroll Animations ────────────────────────
const animObserver = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.anim').forEach(el => animObserver.observe(el));

// ── Active Nav Link ──────────────────────────
(function setActiveNav() {
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();
