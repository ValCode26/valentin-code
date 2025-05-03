
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
function toggleModal() {
  const modal = document.getElementById('authModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function switchForm(form) {
  document.getElementById('loginForm').style.display = form === 'login' ? 'block' : 'none';
  document.getElementById('signupForm').style.display = form === 'signup' ? 'block' : 'none';
}

function handleLogin() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;
  alert(`Login cu: ${email} / ${pass}`);
}

function handleSignup() {
  const email = document.getElementById('signupEmail').value;
  const pass = document.getElementById('signupPassword').value;
  alert(`Cont creat: ${email}`);
}