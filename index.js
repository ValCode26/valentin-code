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

document.querySelectorAll('.hero-btn.login, .login-btn').forEach(btn =>
  btn.addEventListener('click', e => {
    e.preventDefault();
    showModal('login');
  })
);

document.querySelectorAll('.hero-btn.signup, .signup-btn').forEach(btn =>
  btn.addEventListener('click', e => {
    e.preventDefault();
    showModal('signup');
  })
);

document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('auth-modal').classList.add('hidden');
});

document.getElementById('show-login').addEventListener('click', () => {
  toggleForms('login');
});

document.getElementById('show-signup').addEventListener('click', () => {
  toggleForms('signup');
});

function showModal(type) {
  document.getElementById('auth-modal').classList.remove('hidden');
  toggleForms(type);
}

function toggleForms(type) {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const loginTab = document.getElementById('show-login');
  const signupTab = document.getElementById('show-signup');

  if (type === 'login') {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
  } else {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    loginTab.classList.remove('active');
    signupTab.classList.add('active');
  }
}