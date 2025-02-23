let menubar = document.getElementById("menu");
menubar.style.maxHeight='0px';
function toggle (){
    if (menubar.style.maxHeight=='0px'){
        menubar.style.maxHeight='200px'
    }
    else {
        menubar.style.maxHeight='0px'
    }
}