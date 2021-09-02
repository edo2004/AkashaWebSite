document.querySelector('.fondo3').style.display = "none"
document.querySelector('.fondo2').style.display = "none"
document.querySelector('.button').addEventListener('click', function () {
    document.querySelector('.fondo2').style.display = ""
    setTimeout(function() {
        document.querySelector('.fondo2').classList.add('traslate')
        document.querySelector('.fondo2').style.width = "100%"
    document.querySelector('.fondo1').classList.add('scaleFondo')
    },5)
    
    setTimeout(function () {
        document.querySelector('.fondo3').style.display = ""
        document.querySelector('.fondo2').style.filter = "grayscale(100%)"
        document.querySelector('.fondo1').classList.remove('scaleFondo')
    },3000)  
})