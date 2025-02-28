const toggle = document.querySelector('#toggle');
const menu = document.querySelector('.topnav');
const closemenu = document.querySelector('.close-menu');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');

toggle.addEventListener("click", function(){
    menu.style.display = "flex";
nav.style.padding = "0px";
body.style.overflow = "hidden";
wrapper.style.marginTop = "600px";

});

closemenu.addEventListener("click", function(){
    menu.style.display = "none";
    nav.style.padding = "20px 50px";
    body.style.overflow = "auto";
    wrapper.style.marginTop = "0";
});

var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');
var carousel = document.querySelector('.carousel');
var list = document.querySelector('.list');
var item = document.querySelector('.item');
var runningTime = document.querySelector('.carousel .timeRunning');

let timeRunning = 3000
let timeAutoNext = 6000

nextBtn.onclick = function (){
  showSlider('next')
}
prevBtn.onclick = function (){
  showSlider('prev')
}

let runTimeOut
let runNextAuto = setTimeout (()=>{
  nextBtn.click()
}, timeAutoNext)

function resetTimeAnimation(){
  runningTime.style.animation = 'none'
  runningTime.offsetHeight
  runningTime.style.animation = null
   runningTime.style.animation = 'runningTime 6s linear 1s forwards'

}
function showSlider(type){
  let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
  if (type === 'next'){
    list.appendChild(sliderItemsDom[0])
    carousel.classList.add('next')
  }else{
    list.prepend(sliderItemsDom[sliderItemsDom.length -1])
    carousel.classList.add('prev')
  }
  clearTimeout(runTimeOut)
  runTimeOut= setTimeout(()=>{
    carousel.classList.remove('next')
    carousel.classList.remove('prev')
  }, timeRunning)
  clearTimeout(runNextAuto)
  runNextAuto = setTimeout(()=>{
    nextBtn.click()
  }, timeAutoNext)
resetTimeAnimation()
}
resetTimeAnimation()
