// ── ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function setActiveNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

// ── ANIMATE SKILL BARS ON SCROLL ──
function animateBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  bars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      const target = bar.getAttribute('data-width');
      bar.style.width = target;
    }
  });
}

// Store target widths in data attributes and reset initial width to 0
document.querySelectorAll('.skill-bar-fill').forEach(bar => {
  const inlineWidth = bar.style.width;
  bar.setAttribute('data-width', inlineWidth);
  bar.style.width = '0';
});

// ── SCROLL TO TOP BUTTON ──
const scrollTopBtn = document.getElementById('scrollTop');

function handleScroll() {
  setActiveNav();
  animateBars();
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
}

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── SMOOTH NAV CLICK ──
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ── INIT ──
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
  handleScroll();
  animateBars();
});
