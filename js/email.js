const form = document.querySelector(".contact-form")
var respuesta = document.querySelector('.gif-email');
const nameForm = document.querySelector(".name")
const phoneForm = document.querySelector(".subject")
const emailForm = document.querySelector(".email")
const messageForm = document.querySelector(".message")
const iconEmail = document.querySelector("#icon-Email")
const alertInputs = document.querySelector(".alert-inputs")
const datoAlert = document.querySelector(".dato-alert")

const templateGif = document.querySelector('#gif-revelde').content;
const fragment1 = document.createDocumentFragment();
respuesta.innerHTML = ``
urlGif = './assets/gifs/mail_Anim.gif'

// respuesta.style.opacity = "0"
// respuesta.innerHTML = `<img src="./assets/gifs/mail_Anim.gif" alt="mail_Anim">`

function visibleAlert(){
    setTimeout(function() {
        alertInputs.classList.add('alert-visible')
    },10)
    setTimeout(function() {
        alertInputs.classList.remove('alert-visible')
    },3000)
}

function ValidarEmail(email) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.value.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var datos = new FormData(form);
    
    console.log(datos.get('mail'))
    if(datos.get('name') === '' ){
        datoAlert.innerHTML = 'Please, introduce your name.'
        visibleAlert()
    }
    else if(ValidarEmail(emailForm) === false){
        datoAlert.innerHTML = 'Please, introduce your valid Email address to contact you.'
        visibleAlert()
    }else{
        fetch('enviar.php',{
            method: 'POST',
            body: datos
        })
            .then( res => res.json())
            .then( data => {
                if(data === 'error'){
                    respuesta.innerHTML = ``
                }else{
                    respuesta.innerHTML = ``
                    templateGif.querySelector('img').setAttribute("src", urlGif);
                    
                    const clonar = templateGif.cloneNode(true);
                    fragment1.appendChild(clonar);
                    respuesta.appendChild(fragment1)
                    
                    setTimeout(function() {
                        iconEmail.style.opacity = "0"
                    },500)
                    setTimeout(function() {
                        respuesta.innerHTML = ``
                        // respuesta.style.opacity = "0"
                    },3500)  
                    setTimeout(function() {
                        iconEmail.style.opacity = "1"
                        iconEmail.style.transition = "opacity 1s "
                    },4500)
                }
             } )
        dateForm()
        }

})

function dateForm (){
        messageForm.value = 'SENT'
        nameForm.setAttribute('placeholder', '')
        phoneForm.setAttribute('placeholder', '')
        phoneForm.setAttribute('type', 'text')
        emailForm.setAttribute('placeholder', '')
        messageForm.setAttribute('placeholder', '')
        nameForm.classList.add('background-change')
        phoneForm.classList.add('background-change')
        emailForm.classList.add('background-change')
        messageForm.classList.add('area-change')

        setTimeout(function() {
            nameForm.value = ''
            phoneForm.value = ''
            emailForm.value = ''
            
        },1500)
        
        setTimeout(function() {
            nameForm.classList.remove('background-change')
            nameForm.classList.remove('background-change')
            phoneForm.classList.remove('background-change')
            emailForm.classList.remove('background-change')
            messageForm.classList.remove('area-change')
            messageForm.value = ''
        },3000)
        setTimeout(function() {
            nameForm.setAttribute('placeholder', 'Name/Company')
            phoneForm.setAttribute('placeholder', 'Telephone')
            phoneForm.setAttribute('type', 'number')
            emailForm.setAttribute('placeholder', 'Email address')
            messageForm.setAttribute('placeholder', 'Message')
        },3600)
}