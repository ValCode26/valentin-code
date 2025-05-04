const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-link');

// Aplică efectul de typing doar pe ecrane mai mari (desktop)
if (window.innerWidth > 768) {
  navLinks.forEach((link, index) => {
    const delay = index * 1500; // 2 secunde între linkuri
    setTimeout(() => {
      link.style.opacity = '1';
      link.style.animation = `typing 2s steps(20, end), blink 0.8s step-end infinite`;
    }, delay);
  });
} else {
  // Pe mobil: asigură-te că linkurile sunt vizibile și fără animație
  navLinks.forEach((link) => {
    link.style.opacity = '1';
    link.style.animation = 'none';
  });
}