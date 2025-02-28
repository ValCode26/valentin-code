const toggle = document.querySelector('#toggle');
const menu = document.querySelector('.topnav');
const closemenu = document.querySelector('.close-menu');
const body = document.querySelector('body');
const hero = document.querySelector('.hero');

toggle.addEventListener("click", function(){
    menu.style.display = "flex";
body.style.overflow = "hidden";
hero.style.marginTop = "600px";

});

closemenu.addEventListener("click", function(){
    menu.style.display = "none";
    body.style.overflow = "auto";
    hero.style.marginTop = "0";
});