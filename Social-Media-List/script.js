const menuEl = document.querySelector(".menu");
const socialMListEl = document.querySelector(".social-media-list");
const arrowEl = document.querySelector(".menu .fa-solid");
const menuText = document.querySelector(".menu p");

const liEls = document.querySelectorAll(".social-media-list li");


menuEl.addEventListener("click", ()=>{
    socialMListEl.classList.toggle("hide");
    arrowEl.classList.toggle("rotate")
})

liEls.forEach(liEl => {
    liEl.addEventListener("click", ()=>{
        socialMListEl.classList.add("hide");
        menuText.innerHTML = liEl.innerHTML;
        arrowEl.classList.toggle("rotate")
    })
});