const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container")
// console.log(navbarEl)
// console.log(bottomContainerEl)

window.addEventListener('scroll', ()=>{
    if(window.scrollY > navbarEl.offsetHeight - bottomContainerEl.offsetTop - 50){
        navbarEl.classList.add("active");
    }else{
        navbarEl.classList.remove("active");
    }
})

