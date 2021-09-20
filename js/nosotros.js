const textDescription = document.querySelector('.text-description')
const fondoNosotros = document.querySelector('.fondo-nosotros')
const fragment1 = document.createDocumentFragment();

const ContentGifs = [
    {
        description:`<h1>Motion Graphics</h1>
        <p class="hola-mundo">Damos vida a tus ideas, mezclándolas con gráficos en movimiento para expresarlas de manera dinámica, atractiva y emocionante.</p>
        <p class="hola-mundo">No hay límites en lo que podamos crear, es la mejor manera de capturar la atención de tu público en:</p>
        <ul>
            <li>Redes sociales</li>
            <li>Comerciales</li>
            <li>Infografías.</li>
            <li>Videos institucionales y Educativos</li>
        </ul>
        <p>¡Y mucho más!</p>
        <img src="./assets/gifs/gif_Motion_graphics.gif" alt="LogoFooter">`
    },
    {
        description:`<h1>Animatics y Storyboards</h1>
        <p class="hola-mundo">Te damos un primer vistazo de tu idea audiovisual para que puedas revisarla y modificarla antes de que llegue a filmarse o animarse en tus proyectos de:</p>
        <ul>
            <li>Comerciales</li>
            <li>Cine</li>
            <li>TV</li>
            <li>Videos institucionales y educativos</li>
        </ul>
        <img src="./assets/gifs/gif_Cinematics.gif" alt="LogoFooter">`
    },
    {
        description:`<h1>Nosotros</h1>
        <p class="hola-mundo">Somos un estudio digital donde creamos productos audiovisuales que cuentan historias, resuelven problemas y dan de qué hablar.</p>
        <p class="hola-mundo">Buscamos los medios para llegar a hacer realidad diferentes ideas, nuevas formas de hacer reír, emocionar y sorprender. Estamos explorando el universo de la animación para satisfacer el mercado.</p>
        <img src="./assets/LogoFooter.svg" alt="LogoFooter">`
    },
    {
        description:`<h1>Visualización Arquitectónica</h1>
        <p class="hola-mundo">Proyectamos tus ideas inmobiliarias en imágenes y animaciones digitales para mejorar el marketing y la promoción de tus proyectos.</p>
        <ul>
            <li>Imágenes</li>
            <li>Recorridos Animados</li>
            <li>Panoramicas 360</li>
        </ul>
        <img src="./assets/LogoFooter.svg" alt="LogoFooter">`
    },
    {
        description:`<h1>Animatics y Storyboards</h1>
        <p class="hola-mundo">Resuelve lo que creías complicado de expresar con imágenes bidimensionales en movimiento mediante la técnica CutOut digital aplicado a:</p>
        <ul>
            <li>Infografías</li>
            <li>Personajes</li>
            <li>Redes Sociales</li>
            <li>Textos</li>
        </ul>
        <img src="./assets/gifs/gif_Animacion2D.gif" alt="animation-2d">`
    },
    {
        description:`<h1>Animatics y Storyboards</h1>
        <p class="hola-mundo">Soluciona lo que creías imposible de lograr con un entorno tridimensional desde polígonos sencillos hasta fluidos y dinámicas aplicadas a:</p>
        <ul>
            <li>Demos 3D</li>
            <li>Personajes</li>
            <li>Infografías 3D</li>
            <li>Simulaciones físicas</li>
            <li>Integración Live Action</li>
        </ul>
        <img src="./assets/gifs/gif_Animacion3D.gif" alt="LogoFooter">`
    }
]


function cargarGifs(data) {

    var idImagen = data.dataset.id
    textDescription.innerHTML = "";
    textDescription.classList.add("visible")
    
    setTimeout(function () {

        textDescription.innerHTML =  ContentGifs[idImagen-1].description
        textDescription.classList.remove("visible")
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

