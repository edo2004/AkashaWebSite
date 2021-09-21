const items = document.querySelector('.honey')

window.addEventListener("mousemove", () => {
    if(window.screen.width > 640){
        // console.log(screen.width)
        items.addEventListener('mousemove', parallax);
    }
})

function parallax(e){
    this.querySelectorAll('.item').forEach(button => {
        const speed = button.getAttribute('data-speed')
        // console.log(button)
        const x = (window.innerWidth - e.pageX*speed)/10

        button.style.transform = `translateX(${x}px)`

    })
}