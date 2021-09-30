const titleGifs = document.querySelector('.title-gif')
const textGifs = document.querySelector('.desc-gif')
const vinGifs = document.querySelector('.vin-gifs')
const gifImage = document.querySelector('.gif-image')
const fondoNosotros = document.querySelector('.fondo-nosotros')
const fragment1 = document.createDocumentFragment();

const ContentGifs = [
    {
        title:'Motion Graphics',
        description:`
        <p class="hola-mundo">We make your ideas come to life by mixing them with motion graphics and show them in a dynamic, attractive and exciting way. </p>
        <p class="hola-mundo">There is not limit to what we can do, motion graphics is the best choice to catch everyone’s attention through:
        </p>`,
        items:`<ul>
                    <li>Social Media</li>
                    <li>Ads</li>
                    <li>Infographics</li>
                    <li>Institutional & E-learning videos</li>
                </ul>
                <p>And much more!</p>`,
        image:`<img src="./assets/gifs/gif_Motion_graphics.gif" alt="LogoFooter">`
    },
    {
        title:'Animatics y Storyboards',
        description:`
        <p class="hola-mundo">You will have a preview draft of your audiovisual idea, so you can offer feedback before it is filmed or animated.</p>`,
        items:`<ul>
                <li>TV Ads</li>
                <li>Films</li>
                <li>TV</li>
                <li>Institutional Videos</li>
            </ul>`,
        image:`<img src="./assets/gifs/gif_Cinematics.gif" alt="LogoFooter">`
    },
    {
        title:'About Us',
        description:`
        <p class="hola-mundo">We are a Digital Studio that creates audiovisual products which tell stories, resolve problems and help brands position in the market.</p>
        <p class="hola-mundo">We always find a way to help your ideas come true, new ways to surprise, make people have fun and generate emotions. We are exploring the animation universe to fill a gap in the market.</p>`,
        items: '',
        image: `<img src="./assets/LogoGIF.svg" alt="LogoGIF">`
    },
    {
        title:'Archviz',
        description:`
        <p class="hola-mundo">We use pictures and digital animation to portray your real-estate ideas and promote your projects the best way.</p>
        `,
        items: `<ul>
                <li>Pictures </li>
                <li>Virtual tours</li>
                <li>360° Panoramics</li>
            </ul>`,
        image: `<img src="./assets/gifs/gif_ARCHVIZ.gif" alt="gif_ARCHVIZ">`
    },
    {
        title:'2D Animation',
        description:`
        <p class="hola-mundo">Do you have no clue how to communicate an idea? <br> Don’t worry, we’ll create bidimensional motion elements and characters to express this idea, by using the CutOut technique, which applies to:</p>
        `,
        items: `<ul>
                    <li>Infographics </li>
                    <li>Characters </li>
                    <li>Social Media</li>
                    <li>Text</li>
                </ul>`,
        image:`<img src="./assets/gifs/gif_Animacion2D.gif" alt="animation-2d">`
    },
    {
        title:'3D Animation',
        description:`
        <p class="hola-mundo">We will create a three-dimensional environment, by using from low poly scene to liquid and dynamic simulations, which apply to:</p>
        `,
        items: `<ul>
                    <li>3D Demos</li>
                    <li>Characters</li>
                    <li>Motion Graphics</li>
                    <li>Physics simulations</li>
                    <li>Live Action Integration</li>
                </ul>`,
        image:`<img src="./assets/gifs/gif_Animacion3D.gif" alt="LogoFooter">`
    }
]


function cargarGifs(data) {

    var idImagen = data.dataset.id
    titleGifs.innerHTML = "";
    textGifs.innerHTML = "";
    vinGifs.innerHTML = "";
    gifImage.innerHTML = "";
    
    setTimeout(function () {
        titleGifs.classList.add("visible")
        gifImage.classList.add("gif-scale")
    },10)
    
    setTimeout(function () {

        let conten = ContentGifs[idImagen-1]

        titleGifs.innerHTML = conten.title
        textGifs.innerHTML =  conten.description
        vinGifs.innerHTML = conten.items
        gifImage.innerHTML = conten.image
        titleGifs.classList.remove("visible")
        gifImage.classList.remove("gif-scale")
    },500)
            
}


// efecto parallax

// document.addEventListener('mousemove', parallaxNosotros);

function parallaxNosotros(e){
    this.querySelectorAll('.fondo-item').forEach(button => {
        const speed = button.getAttribute('data-speed')


        const x = (window.innerWidth - e.pageX*speed)/40
        const y = (window.innerHeight - e.pageY*speed)/40

        window.addEventListener("scroll", () => {
            if(window.screen.width < 640){
                button.style.transition = `1s transform`
            }
        })
        
        button.style.transform = `translateX(${x}px) translateY(${y}px)`

        
        

    })
}