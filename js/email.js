const form = document.querySelector(".contact-form")
var respuesta = document.querySelector('.gif-email');
const nameForm = document.querySelector(".name")
const phoneForm = document.querySelector(".subject")
const emailForm = document.querySelector(".email")
const messageForm = document.querySelector(".message")
const iconEmail = document.querySelector("#icon-Email")


form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Hola guarros')

    var datos = new FormData(form);

    console.log(datos)
    console.log(datos.get('name'))
    console.log(datos.get('mail'))

    fetch('enviar.php',{
        method: 'POST',
        body: datos
    })
        .then( res => res.json())
        .then( data => {
            console.log(data)
            if(data === 'error'){
                respuesta.innerHTML = ``
            }else{

                setTimeout(function() {
                    respuesta.innerHTML = `<img src="./assets/gifs/mail_Anim.gif" alt="mail_Anim">`
                    iconEmail.style.opacity = "0"
                },10)
                setTimeout(function() {
                    respuesta.innerHTML = ``
                },3000)  
            }
        } )

    nameForm.value = ''
    phoneForm.value = ''
    emailForm.value = ''
    messageForm.value = ''
})