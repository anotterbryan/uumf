// ── SHARED COMPONENTS ── UUMF Website
// Loaded on every page via <script src="assets/js/components.js"></script>

// ── NAV TOGGLE + ACTIVE LINK ──
function initNav() {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => links.classList.toggle('open'));

  links.querySelectorAll('a').forEach(a => {
    // Close mobile nav on link click
    a.addEventListener('click', () => links.classList.remove('open'));

    // Highlight active page
    const href = a.getAttribute('href');
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    if (href === filename || (href === 'index.html' && (filename === '' || filename === '/'))) {
      a.classList.add('active');
    }
  });
}

// ── SCROLL REVEAL ──
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── SONG ACCORDION ──
// Called via onclick="toggleSong(this)" on .song-card-header elements
window.toggleSong = function(header) {
  const card = header.parentElement; // .song-card-full
  const isOpen = card.classList.contains('open');
  document.querySelectorAll('.song-card-full.open').forEach(c => c.classList.remove('open'));
  if (!isOpen) card.classList.add('open');
};

// ── PARTIAL LOADER ──
function loadPartials(navPath, footerPath) {
  navPath    = navPath    || 'assets/partials/nav.html';
  footerPath = footerPath || 'assets/partials/footer.html';

  const navEl    = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');

  if (navEl) {
    fetch(navPath)
      .then(r => r.text())
      .then(html => {
        navEl.innerHTML = html;
        initNav();
      })
      .catch(() => {
        // Fallback for environments where fetch of local files fails
        navEl.style.height = '64px';
      });
  }

  if (footerEl) {
    fetch(footerPath)
      .then(r => r.text())
      .then(html => { footerEl.innerHTML = html; });
  }
}

// ── AUTO-INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
});
