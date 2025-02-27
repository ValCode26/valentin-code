const toggle = document.querySelector('#toggle');
const menu = document.querySelector('.topnav');
const closemenu = document.querySelector('.close-menu');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const hero = document.querySelector('.hero');

toggle.addEventListener("click", function(){
    menu.style.display = "flex";
nav.style.padding = "0px";
body.style.overflow = "hidden";
hero.style.marginTop = "440px";

});

closemenu.addEventListener("click", function(){
    menu.style.display = "none";
    nav.style.padding = "20px 50px";
    body.style.overflow = "auto";
    hero.style.marginTop = "0";
});