let nav = document.querySelector("nav")
window.addEventListener("scroll" , function(){
    if(window.pageYOffset > 100){
        nav.classList.add('navBar-fondo')
    }else{
        nav.classList.remove('navBar-fondo')
    }
})


  