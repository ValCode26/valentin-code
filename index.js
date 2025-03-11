
const toggle = document.querySelector('#toggle');
const menu = document.querySelector('.menu-bar');
const closemenu = document.querySelector('.close-menu');
const body = document.querySelector('body');
const main = document.querySelector('main');

toggle.addEventListener("click", function(){
    menu.style.display = "flex";
body.style.overflow = "hidden";
main.style.marginTop = "700px";

});

closemenu.addEventListener("click", function(){
    menu.style.display = "none";
    body.style.overflow = "auto";
    main.style.marginTop = "0";
});

const filterContainer = document.querySelector(".gallery-filter"),
  galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    filterContainer.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
    const filterValue = event.target.getAttribute("data-filter");
    galleryItems.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === 'all') {
        item.classList.remove("hide");
        item.classList.add("show");
      }
      else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});