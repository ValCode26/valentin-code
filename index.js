const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");
const overlay = document.getElementById("menuOverlay");

openBtn.addEventListener("click", () => {
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});