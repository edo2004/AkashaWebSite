const textDescription = document.querySelector('.text-description')
const fondoNosotros = document.querySelector('.fondo-nosotros')
const templateNosotros = document.querySelector('#template-nosotros').content;
const fragment1 = document.createDocumentFragment();

// textDescription.innerHTML = ""


// if (textDescription.innerHTML == '') {
//     textDescription.innerHTML = `<iframe class="video-galery" src="https://player.vimeo.com/video/583627240?title=0&dnt=0&byline=0&playsinline=0" frameborder="0" allow="autoplay"; fullscreen" allowfullscreen></iframe>`
// }

function cargarGifs(data) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '../nosotros.json',true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if(this.readyState==4 && this.status==200){
            let datos = JSON.parse(this.responseText)
            console.log(data)
            var idImagen = data.dataset.id
            console.log(idImagen)
            textDescription.innerHTML = "";
            datos.forEach(item => {
                if(idImagen == item.id){
                    // console.log(item)
                    let description = item.description;
                    let imagen = item.image
                    
                    templateNosotros.querySelector('p').textContent = description
                    templateNosotros.querySelector('img').setAttribute("src", imagen);
                    templateNosotros.querySelector('img').style.opacity = "1";
                    
                    const clonar = templateNosotros.cloneNode(true);
                    fragment1.appendChild(clonar);
                }
            });
            textDescription.appendChild(fragment1)
            
        }
    }
}
function cargarHome() {
    textDescription.innerHTML = "";
    textDescription.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia eum ut laudantium. Reiciendis, repellendus delectus! Autem sint officia perspiciatis pariatur harum commodi, reiciendis eveniet nesciunt nostrum, saepe aspernatur sapiente fuga.</p>`
}

// efecto parallax

document.addEventListener('mousemove', parallax);

function parallax(e){
    this.querySelectorAll('.fondo-item').forEach(button => {
        const speed = button.getAttribute('data-speed')


        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        button.style.transform = `translateX(${x}px) translateY(${y}px)`

    })
}

// Todo iba bien hasta cuando...xD

// let Semana = ['Lunes', 'Martes', 'Jueves', 'Viernes','Sabado', 'Domingo'];
// Semana.forEach(dia => {
//     if(dia === "Miercoles") {
//         console.log("Veo a mi novia")
//     }else {
//         console.log(`Voy a tomar el: ${dia}`)
//     }
// }) 

