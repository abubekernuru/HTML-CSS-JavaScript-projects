const prevBtnEl = document.querySelector(".prev");
const nextBtnEl = document.querySelector(".next");
const imgContainerEl = document.querySelector(".image-container");
const imgEls = document.querySelectorAll("img");


    let currentImg = 1;
    let timeout;

nextBtnEl.addEventListener('click', ()=>{
    currentImg++
    clearTimeout(timeout)
    updateImg();
})

prevBtnEl.addEventListener('click', ()=>{
    currentImg--
    clearTimeout(timeout)
    updateImg();
})

updateImg();

function updateImg() {
    if(currentImg > imgEls.length){
        currentImg = 1 
    } else if(currentImg < 1){
        currentImg = imgEls.length
    }
    imgContainerEl.style.transform = `translateX(${(currentImg - 1) * -500}px)`;

    timeout = setTimeout(() => {
        currentImg++
        updateImg();
    }, 3000);
}
