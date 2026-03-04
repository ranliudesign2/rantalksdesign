/* ══════════════════════════════════════════════
   Ran Talks Design — Main JavaScript
   ══════════════════════════════════════════════ */

// ── Custom Cursor ────────────────────────────
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');

if (cursor && ring) {
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  function animCursor() {
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animCursor);
  }

  animCursor();
}

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
