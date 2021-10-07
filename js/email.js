const form = document.querySelector(".contact-form")
var respuesta = document.querySelector('.gif-email');
const nameForm = document.querySelector(".name")
const phoneForm = document.querySelector(".subject")
const emailForm = document.querySelector(".email")
const messageForm = document.querySelector(".message")
const iconEmail = document.querySelector("#icon-Email")

respuesta.style.opacity = "0"
respuesta.innerHTML = `<img src="./assets/gifs/mail_Anim.gif" alt="mail_Anim">`

form.addEventListener('submit', function(e) {
    e.preventDefault();
    respuesta.innerHTML = ``
    var datos = new FormData(form);

    fetch('enviar.php',{
        method: 'POST',
        body: datos
    })
        .then( res => res.json())
        .then( data => {
            if(data === 'error'){
                respuesta.innerHTML = ``
            }else{

                setTimeout(function() {
                    respuesta.style.opacity = "1"
                    respuesta.innerHTML = `<img src="./assets/gifs/mail_Anim.gif" alt="mail_Anim">`
                },10)
                setTimeout(function() {
                    iconEmail.style.opacity = "0"
                },500)
                setTimeout(function() {
                    respuesta.innerHTML = ``
                    respuesta.style.opacity = "0"
                },3500)  
                setTimeout(function() {
                    iconEmail.style.opacity = "1"
                    iconEmail.style.transition = "opacity 1s "
                },4500)
            }
        } )

    nameForm.value = ''
    phoneForm.value = ''
    emailForm.value = ''
    messageForm.value = ''
})