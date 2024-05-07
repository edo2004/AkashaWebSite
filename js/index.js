const button = document.querySelectorAll('.item-image')
const items = document.querySelector('.honey')
const navegador = document.querySelector('.header-nav')
const videoHeader = document.querySelector('#bgvid')
const franjaDerecha = document.querySelector('.franja-derecha')
// const topTop = document.querySelector(".to-top");
const socialMediaVideo = document.querySelector(".footer-social_video")



function redesHiddenMobile(alto,ancho){
    if(window.pageYOffset < (alto+(ancho/1.185185))){
        socialMediaVideo.classList.remove("inactive");
    }else{
        socialMediaVideo.classList.add("inactive");
    }
}

function redesHiddenDeskop(alto,ancho){
    if(window.pageYOffset < (alto+(ancho/1.77))){
        socialMediaVideo.classList.remove("inactive");
    }else{
        socialMediaVideo.classList.add("inactive");
    }
}

window.addEventListener("scroll", (e) => {
    let tAncho = fondo1.width
    let tAlto = fondo1.height

    if(fondo1.width>=640){
        let tamañofranja = Math.round(tAncho/1.7778 + 3*tAlto)
        franjaDerecha.style.height = `${tamañofranja}px`
        redesHiddenDeskop(tAlto,tAncho)
    }else{
        let tamañofranja = Math.round(tAncho/1.185185 + 3*tAlto)
        franjaDerecha.style.height = `${tamañofranja}px`
        navegador.style.height = `${tAncho/(1.185185*1.2)}px`
        console.log(tAncho/(1.185185*1.8))
        redesHiddenMobile(tAlto,tAncho)
    }


    // console.log(tamañofranja)

    e.stopPropagation();
})


// window.addEventListener("scroll", () => {
//     if(window.pageYOffset > 100){
//         topTop.classList.add("active");
//     }else{
//         topTop.classList.remove("active");
//     }
// })


// Fondo menú navegacion
const navMenu = document.querySelector('.nav__menu')
const navCheckbox = document.querySelector('#nav_checkbox')
const cerrarMenú = document.querySelector('.close')
const mostrarMenú = document.querySelector('.menu')
const options = document.querySelectorAll('.options')



window.addEventListener("scroll", () => {
    if(fondo1.width>=640){
        console.log(fondo1.width)
        navegador.style.background = "none"
        navMenu.style.opacity = '1'
        options.forEach(option => {
            option.style.display = 'block'
        })
    }
})

function removeBackground() {
    if(fondo1.width>=640){
        navegador.style.background = "none"
    }else{
        navCheckbox.checked = false
        navegador.style.background = "none"
        navMenu.style.opacity = '0'
        options.forEach(option => {
            option.style.display = 'none'
        })
    }
}

function gestionarMenu() {
    
    let valorCheck = navCheckbox.checked
    console.log(valorCheck)
    if(valorCheck){
        navegador.style.background = "rgba(136, 78, 207, 0.8)"
        navMenu.style.opacity = '1'
        options.forEach(option => {
            option.style.display = 'block'
        })
        
        
        // console.log(valorCheck)
    }else {
        navegador.style.background = "none"
        navMenu.style.opacity = '0'
        options.forEach(option => {
            option.style.display = 'none'
        })
    }
}


