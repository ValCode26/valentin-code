// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAD8mBRsbdWbseu0qwXP40ytqg0CbF3IoE",
  authDomain: "valentin-borsan.firebaseapp.com",
  projectId: "valentin-borsan",
  storageBucket: "valentin-borsan.firebasestorage.app",
  messagingSenderId: "654735968292",
  appId: "1:654735968292:web:3af5e08478e774fd1db0b1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// LOGIN
document.getElementById("login-form").addEventListener("submit", e => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  const password = e.target.querySelector('input[type="password"]').value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Autentificare reușită!");
      closeModal();
    })
    .catch(err => alert("Eroare: " + err.message));
});

// SIGNUP
document.getElementById("signup-form").addEventListener("submit", e => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  const password = e.target.querySelector('input[type="password"]').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Înregistrare reușită!");
      closeModal();
    })
    .catch(err => alert("Eroare: " + err.message));
});

// Funcții globale pt modale
window.openModal = function(mode) {
  document.getElementById("auth-modal").style.display = "block";
  document.getElementById("modal-title").textContent = mode === 'signup' ? "Înregistrare" : "Autentificare";
  document.getElementById("login-form").style.display = mode === 'signup' ? "none" : "block";
  document.getElementById("signup-form").style.display = mode === 'signup' ? "block" : "none";
}

window.closeModal = function() {
  document.getElementById("auth-modal").style.display = "none";
}
window.openModal = function(mode) {
    document.getElementById("auth-modal").style.display = "block";
    document.getElementById("modal-title").textContent = mode === 'signup' ? "Înregistrare" : "Autentificare";
    document.getElementById("login-form").style.display = mode === 'signup' ? "none" : "block";
    document.getElementById("signup-form").style.display = mode === 'signup' ? "block" : "none";
  }
  
  window.closeModal = function() {
    document.getElementById("auth-modal").style.display = "none";
  }