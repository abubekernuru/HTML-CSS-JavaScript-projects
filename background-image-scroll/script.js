const bgImgEl = document.getElementById("bg-img");

window.addEventListener("scroll", ()=>{
    updateImg();
})

function updateImg() {
    bgImgEl.style.backgroundSize = 160 - window.pageYOffset/12 + '%';
    // console.log(window.pageYOffset/900)
    bgImgEl.style.opacity = 1 - window.pageYOffset/900;
}