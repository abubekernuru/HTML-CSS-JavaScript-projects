const btnEl = document.querySelector(".btn");
const crossIconEl = document.querySelector(".cross-icon");

const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.remove("active")
})

crossIconEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.add("active")
    videoEl.pause();
    videoEl.currentTime = 0;
})