const toggle = document.querySelector('#toggle');
const menu = document.querySelector('.menu');
console.log(menu);
toggle.addEventListener("click", function(){
menu.style.display="flex";
})