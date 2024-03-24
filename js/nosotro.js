const titleGifs = document.querySelector('.title-gif')
const textGifs = document.querySelector('.desc-gif')
const gifImage = document.querySelector('.images-about-container')
const vinGifs = document.querySelector('.vin-gifs')
const myDetails = document.querySelector('.myDetails')
const imagesAboutText = document.querySelector('.images-about-text')


const ContentGifs = [
    {
        title:'VFX',
        description:`
        <p class="hola-mundo">The impossible is possible with VFX, we will create an amazing environment or a seamless integration of 3D in real life, from a low poly scene to liquid, volumen & dynamic simulations, which apply to: </p>

        </p>`,
        items:`
        
            <details class="myDetails">
            <summary></summary>

                <ul>
                    <li>TV & Film</li>
                    <li>3D Demos</li>
                    <li>Motion Graphics</li>
                    <li>Physics simulations</li>
                    <li>Live Action Integration</li>
                </ul>

            </details>
                `,
        image:`<img src="./assets/Nosotros/Escritorio_VFX-2-min.png" alt="LogoFooter" class="img2">`
    },
    {
        title:'Motion Graphics',
        description:`
        <p class="hola-mundo">We make your ideas come to life by mixing them with motion graphics and show them in a dynamic, attractive and exciting way.
        There is not limit to what we can do, motion graphics is the best choice to catch everyone’s attention through: </p>`,
        items:`
        <details class="myDetails">
        <summary></summary>

            <ul>
                <li>Social Media</li>
                <li>Ads</li>
                <li>Infographics</li>
                <li>Institutional & E-learning videos</li>
                <li>And much more!</li>
            </ul>
        </details>`,
        image:`<img src="./assets/Nosotros/Escritorio_Motion-min.png" alt="Motion-Graphics" class="img3">`
    },
    {
        title:'ArchViz',
        description:`
        <p class="hola-mundo">We use pictures and digital animation to portray your real-estate ideas and promote your projects the best way</p>
        `,
        items: `
        <details class="myDetails">
        <summary></summary>
        <ul>
                <li>Pictures </li>
                <li>Virtual tours</li>
                <li>360° Panoramics</li>
                </ul>
        </details>
        
        `,
        image: `<img src="./assets/Nosotros/Escritorio_VFX-min.png" alt="LogoGIF" class="img4">`
    }
]

// const ContentGifs = [
//     {
//         title:'VFX',
//         description:`We make your ideas come to life by mixing them with motion graphics and show them in a dynamic, attractive and exciting way.
//         There is not limit to what we can do, motion graphics is the best choice to catch everyone’s attention through:`,
//         image:`<img src="./assets/Nosotros/Escritorio_VFX-2-min.png" alt="LogoFooter">`
//     },
//     {
//         title:'Motion Graphics',
//         description:`You will have a preview draft of your audiovisual idea, so you can offer feedback before it is filmed or animated.`,
//         image:`<img src="./assets/Nosotros/Escritorio_Motion-min.png" alt="LogoFooter">`
//     },
//     {
//         title:'ArchViz',
//         description:`We are a Digital Studio that creates audiovisual products which tell stories, resolve problems and help brands position in the market.`,
//         image: `<img src="./assets/Nosotros/Escritorio_VFX-min.png" alt="LogoGIF">`
//     }
// ]

var set2, set3, set4, set5

function cargarGifs(data) {

    var idImagen = data.dataset.id
    let conten = ContentGifs[idImagen]

    imagesAboutText.classList.remove('responsive-margin');
    

    clearTimeout(set2)
    clearTimeout(set3)
    clearTimeout(set4)
    clearTimeout(set5)

    titleGifs.innerHTML = "";
    textGifs.innerHTML = "";
    vinGifs.innerHTML = "";
    gifImage.innerHTML = "";
    
    set1 = setTimeout(function () {
        titleGifs.classList.add("visible")
        vinGifs.classList.add("visible")
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
        vinGifs.innerHTML = conten.items
        vinGifs.classList.remove("visible")
        myDetails = document.querySelector('.myDetails');
        myDetails.addEventListener('click',function(){
            imagesAboutText.classList.toggle('responsive-margin');
        });
    },750)
    set5 = setTimeout(function () {
        gifImage.innerHTML = conten.image
        gifImage.classList.remove("gif-scale")
    },750)

}


// Efecto para las viñetas

myDetails.addEventListener('click',function(){
    imagesAboutText.classList.toggle('responsive-margin');
});




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