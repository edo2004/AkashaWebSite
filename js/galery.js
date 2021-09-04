const items = document.querySelector('.items')
const video = document.querySelector('.video')
const imagenFondo = document.querySelector('.image-fondo')
const templateVideo = document.querySelector('#template-video').content;
const fragment = document.createDocumentFragment();
video.innerHTML = ""

console.log(video.innerHTML)
if (video.innerHTML == '') {
    video.innerHTML = `<iframe class="video-galery" src="https://player.vimeo.com/video/583627240" width="640" height="564" frameborder="0" allow="autoplay"; fullscreen" allowfullscreen></iframe>`
}


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

items.addEventListener('mousemove', parallax);

function parallax(e){
    this.querySelectorAll('.button').forEach(button => {
        const speed = button.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/5

        button.style.transform = `translateX(${x}px)`
    })
}
