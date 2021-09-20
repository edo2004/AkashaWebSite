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
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText)
            console.log(data)
            var idImagen = data.dataset.id
            console.log(idImagen)
            textDescription.innerHTML = "";
            textDescription.classList.add("visible")
            
            datos.forEach(item => {
                if(idImagen == item.id){
                    // console.log(item)
                    let description = item.description;
                    let imagen = item.image
                    console.log(imagen)
                    setTimeout(function () {

                        if(item.id === "1")

                        textDescription.innerHTML = `<h1>${item.title}</h1>
                                                        <ul>
                                                        <li>Hola cabros</li>
                                                        <li>Wenas</li>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                        </ul>`
                        textDescription.classList.remove("visible")
                    },500)
                    // templateNosotros.querySelector('p').textContent = description
                    // templateNosotros.querySelector('img').setAttribute("src", imagen);

                    // const clonar = templateNosotros.cloneNode(true);
                    // fragment1.appendChild(clonar);
                }
            });
            // textDescription.appendChild(fragment1)
            
        }
    }
}
function cargarHome() {
    setTimeout(function() {
        textDescription.classList.add("visible")
    },10)
    setTimeout(function () {
        textDescription.classList.remove("visible")
        textDescription.innerHTML = "";
        textDescription.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia eum ut laudantium. Reiciendis, repellendus delectus! Autem sint officia perspiciatis pariatur harum commodi, reiciendis eveniet nesciunt nostrum, saepe aspernatur sapiente fuga.</p>`
    },500)  
    
    
}

// efecto parallax

document.addEventListener('mousemove', parallax);

function parallax(e){
    this.querySelectorAll('.fondo-item').forEach(button => {
        const speed = button.getAttribute('data-speed')


        const x = (window.innerWidth - e.pageX*speed)/50
        const y = (window.innerHeight - e.pageY*speed)/50

        window.addEventListener("scroll", () => {
            if(window.screen.width < 640){
                button.style.transition = `1s transform`
            }
        })
        
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

