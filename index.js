
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const dropdowns = document.querySelectorAll('.dropdown');
const overlay = document.getElementById('menuOverlay');

hamburger.addEventListener('click', () => {
  const isActive = hamburger.classList.toggle('active');
  navLinks.classList.toggle('show');
  overlay.classList.toggle('show');

  document.body.classList.toggle('no-scroll', isActive);
});

overlay.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navLinks.classList.remove('show');
  overlay.classList.remove('show');

  document.body.classList.remove('no-scroll');
});
