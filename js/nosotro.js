const titleGifs = document.querySelector('.title-gif')
const textGifs = document.querySelector('.desc-gif')
const vinGifs = document.querySelector('.vin-gifs')
let image = document.querySelector('.image')
let myDetails = document.querySelector('.myDetails')
let summaryElement = myDetails.querySelector('summary');

const imagesAboutText = document.querySelector('.images-about-text')
const defaultItem0 = document.getElementById('default-item-about-btn')
const defaultItem1 = document.getElementById('default-item-about-btn1')
const imagesID = document.getElementById('images-id')




const ContentGifs = [
    {
        title:'VFX',
        description:`
        <p class="hola-mundo">The impossible is possible with VFX, we will create an amazing environment or a seamless integration of 3D in real life, from a low poly scene to liquid, volumen & dynamic simulations, which apply to: </p>

        </p>`,
        items:`
        
            <details class="myDetails" id="default-item-about-btn1" >
            <summary>See more...</summary>

                <ul class="list-item">
                    <li>TV & Film</li>
                    <li>3D Demos</li>
                    <li>Motion Graphics</li>
                    <li>Physics simulations</li>
                    <li>Live Action Integration</li>
                </ul>

            </details>
                `,
        image:`./assets/Nosotros/Escritorio_VFX-min.png`,
        image1:`./assets/Nosotros/Celular_VFX-min.png`
    },
    {
        title:'Motion Graphics',
        description:`
        <p class="hola-mundo">We make your ideas come to life by mixing them with motion graphics and show them in a dynamic, attractive and exciting way.
        There is not limit to what we can do, motion graphics is the best choice to catch everyone’s attention through: </p>`,
        items:`
        <details class="myDetails">
        <summary>See more...</summary>

            <ul class="list-item">
                <li>Social Media</li>
                <li>Ads</li>
                <li>Infographics</li>
                <li>Institutional & E-learning videos</li>
                <li>And much more!</li>
            </ul>
        </details>`,
        image:`./assets/Nosotros/Escritorio_Motion-min.png`,
        image1:`./assets/Nosotros/Celular_Motion-min.png`
    },
    {
        title:'2d Animaton',
        description:`
        <p class="hola-mundo">We breathe life into ideas, creating visually engaging narratives with artistic flair. From character animations to dynamic motion graphics, our 2D expertise enhances your content with creativity and impact. Elevate your storytelling with our imaginative touch.</p>
        `,
        items: `
        <details class="myDetails">
        <summary>See more...</summary>
        <ul class="list-item">
                <li>Explainer Videos </li>
                <li>Ads</li>
                <li>Digital Content</li>
                <li>Character animation</li>
                <li>Text animation</li>
                </ul>
        </details>
        
        `,
        image: `./assets/Nosotros/Escritorio_2d_animation.webp`,
        image1: `./assets/Nosotros/Celular_2d_animation.webp`
    }
]

var set2, set3, set4, set5

function cargarGifs(data) {

    var honeyElements = document.querySelectorAll('.honey .item-image');
    honeyElements.forEach(function(item) {
        item.classList.remove('clicked');
    });
    data.classList.add('clicked');

    var idImagen = data.dataset.id
    let conten = ContentGifs[idImagen]
    
    

    clearTimeout(set2)
    clearTimeout(set3)
    clearTimeout(set4)
    clearTimeout(set5)

    titleGifs.innerHTML = "";
    textGifs.innerHTML = "";
    vinGifs.innerHTML = "";
    image.innerHTML = "";
    
    
    set1 = setTimeout(function () {
        image = document.querySelector('.image')
        titleGifs.classList.add("visible")
        vinGifs.classList.add("visible")
        textGifs.classList.add("visible")
        image.classList.add("gif-scale")

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
        summaryElement = myDetails.querySelector('summary');
        
        myDetails.addEventListener('toggle',function(){
            listItem = document.querySelector('.list-item')
            if (myDetails.open) {
                summaryElement.textContent = 'See less...';
                vinGifs.style.justifyContent = 'flex-start';
                listItem.classList.add('fade-in');
                
            } else {
                summaryElement.textContent = 'See more...';
                vinGifs.style.justifyContent = 'flex-end';
                listItem.classList.remove('fade-in');
            }
        });
    },750)
    set5 = setTimeout(function () {
        if (window.innerWidth <= 768) { 
            image.src = conten.image1;
        } else {
            image.src = conten.image;
        }
        image.onload = function() {
            image.classList.remove("gif-scale")
        }
    },1000)

}


// Efecto para las viñetas

myDetails.addEventListener('toggle',function(){
    listItem = document.querySelector('.list-item')
    if (myDetails.open) {
        summaryElement.textContent = 'See less...';
        vinGifs.style.justifyContent = 'flex-start';
        
            listItem.classList.add('fade-in');
    } else {
        summaryElement.textContent = 'See more...';
        vinGifs.style.justifyContent = 'flex-end';
        listItem.classList.remove('fade-in');

    }
});
