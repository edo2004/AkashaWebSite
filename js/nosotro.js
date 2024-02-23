const titleGifs = document.querySelector('.title-gif')
const textGifs = document.querySelector('.desc-gif')
const gifImage = document.querySelector('.images-about-container')

const ContentGifs = [
    {
        title:'VFX',
        description:`We make your ideas come to life by mixing them with motion graphics and show them in a dynamic, attractive and exciting way.
        There is not limit to what we can do, motion graphics is the best choice to catch everyone’s attention through:`,
        image:`<img src="./assets/gifs/gif_Motion_graphics.gif" alt="LogoFooter">`
    },
    {
        title:'Motion Graphics',
        description:`You will have a preview draft of your audiovisual idea, so you can offer feedback before it is filmed or animated.`,
        image:`<img src="./assets/gifs/gif_Cinematics.gif" alt="LogoFooter">`
    },
    {
        title:'AArchViz',
        description:`We are a Digital Studio that creates audiovisual products which tell stories, resolve problems and help brands position in the market.`,
        image: `<img src="./assets/LogoGIF.svg" alt="LogoGIF">`
    }
]

var set2, set3, set4

function cargarGifs(data) {

    var idImagen = data.dataset.id
    let conten = ContentGifs[idImagen]
    

    clearTimeout(set2)
    clearTimeout(set3)
    clearTimeout(set4)

    titleGifs.innerHTML = "";
    textGifs.innerHTML = "";
    gifImage.innerHTML = "";
    
    set1 = setTimeout(function () {
        titleGifs.classList.add("visible")
        textGifs.classList.add("visible")
        gifImage.classList.add("gif-scale")
    },10)
    
    set2 = setTimeout(function () {
        titleGifs.innerHTML = conten.title
        titleGifs.classList.remove("visible")
    },250)
    set3 = setTimeout(function () {
        textGifs.innerHTML =  conten.description
        textGifs.classList.remove("visible")
    },500)
    set4 = setTimeout(function () {
        gifImage.innerHTML = conten.image
        gifImage.classList.remove("gif-scale")
    },750)
            
}


// efecto parallax

document.addEventListener('mousemove', parallaxNosotros);

function parallaxNosotros(e){
    this.querySelectorAll('.fondo-item').forEach(button => {
        const speed = button.getAttribute('data-speed')


        const x = (window.innerWidth + e.pageX*speed)/30
        const y = (window.innerHeight - e.pageY*speed)/40

        window.addEventListener("scroll", () => {
            if(window.screen.width < 640){
                button.style.transition = `1s transform`
            }
        })
        button.style.transform = `translateX(${x}px) translateY(${y}px)`

        
        

    })
}