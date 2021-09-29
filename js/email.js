const form = document.querySelector(".contact-form")
var respuesta = document.querySelector('.gif-email');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("enviando formulario")
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
                    respuesta.innerHTML = `
                <img src="./assets/gifs/mail_Anim.gif" alt="mail_Anim">
                `
                },10)
                setTimeout(function() {
                    respuesta.innerHTML = ``
                },2000)
                
            }
        } )
})