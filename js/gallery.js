const fondo1 = document.querySelector('.fondo1')
const fondo2 = document.querySelector('.fondo2')
const fondo3 = document.querySelector('.fondo3')
const video = document.querySelector('.video-gallery')
const templateVideo = document.querySelector('#template-video').content;
var set2, set3

const fragment = document.createDocumentFragment();
video.innerHTML = ""
var images = ["./assets/Galeria/Corporative_Video.png"];
fondo3.style.opacity = "0"
console.log(video.innerHTML)
if (video.innerHTML == '') {
    video.innerHTML = `<iframe class="video-galery" src="https://player.vimeo.com/video/583627240?title=0&dnt=0&byline=0&playsinline=0" frameborder="0" allow="autoplay"; fullscreen" allowfullscreen></iframe>`
}
setTimeout(function () {
    fondo3.style.opacity = "1"
    fondo3.style.transition = "2s"
    fondo1.style.filter = "grayscale(100%)"
},2000)


function traerDatos(data) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '../videos.json',true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if(this.readyState==4 && this.status==200){
            let datos = JSON.parse(this.responseText)
            console.log(data)
            var idImagen = data.dataset.id
            console.log(idImagen)
            video.innerHTML = "";
            datos.forEach(item => {
                if(idImagen == item.id){
                    // console.log(item)
                    let urlVideo = item.video;
                    let imagen = item.image

                    transicionImagen(imagen)
                    console.log(urlVideo)
                    templateVideo.querySelector('iframe').setAttribute("src", urlVideo);
                    
                    const clonar = templateVideo.cloneNode(true);
                    fragment.appendChild(clonar);
                }
            });
            video.appendChild(fragment)
            
        }
    }
}


function transicionImagen(imagen) {

    images.push(imagen)
    var tamaño = images.length

    clearTimeout(set2)
    clearTimeout(set3)

    setTimeout(function() {
        fondo3.style.opacity = "0"
        fondo2.style.display = "none"
        fondo1.style.filter = ""
        fondo2.style.display = ""
    },5)
    set2 = setTimeout(function() {
        fondo2.setAttribute("src", imagen)
        fondo2.classList.add('traslate')
        fondo2.style.width = "100%"
        fondo2.style.transition = "2s"
        // fondo1.classList.add('scaleFondo')
        fondo1.style.transform = `scale(1.3)`
        fondo1.style.transition = "2s"
    },20)
    set3 = setTimeout(function () {
        // fondo1.classList.remove('scaleFondo')
        fondo1.style.transform = `scale(1)`
        fondo1.style.transition = "none"
        fondo2.classList.remove('traslate')
        fondo2.style.width = "0%"
        fondo2.style.transition = "none"
        fondo1.setAttribute("src", images[tamaño-1])
        fondo3.style.opacity = "1"
        fondo3.style.transition = "2s"
        fondo1.style.filter = "grayscale(100%)"
        fondo1.style.transition= "filter 2s"
    },2020)  
    
}
