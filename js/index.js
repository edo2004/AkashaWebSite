const topTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        topTop.classList.add("active");
    }else{
        topTop.classList.remove("active");
    }
})