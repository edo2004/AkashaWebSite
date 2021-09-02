const fondo1 = document.querySelector('.fondo1')
const fondo2 = document.querySelector('.fondo2')
const fondo3 = document.querySelector('.fondo3')
const button = document.querySelector('.button')


fondo3.style.display = "none"
fondo2.style.display = "none"
button.addEventListener('click', function () {
    fondo2.style.display = ""
    setTimeout(function() {
        fondo2.classList.add('traslate')
        fondo2.style.width = "100%"
    fondo1.classList.add('scaleFondo')
    },5)
    setTimeout(function () {
        fondo1.classList.remove('scaleFondo')
        fondo3.style.display = ""
        fondo2.style.filter = "grayscale(100%)"
    },3000)  
})