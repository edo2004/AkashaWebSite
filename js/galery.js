const infoVimeo = document.querySelector('.info-svg')
const logoVimeo = document.querySelector('#logo-vimeo')

// logoVimeo.addEventListener('mouseover', infoVimeoLogo(1))
// logoVimeo.addEventListener('mouseout', infoVimeoLogo(2))


function infoVimeoLogo (dato) {
    if(dato==1){
        infoVimeo.classList.add('act-visible')
    }else{
        infoVimeo.classList.remove('act-visible')
    }
    
}
