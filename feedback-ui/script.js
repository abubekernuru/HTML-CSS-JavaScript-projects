const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener("click", (e)=>{
        // console.log(e.target.innerText || e.target.parentNode.innerText)
        removeClass();
        selectedRating = e.target.innerText || e.target.parentNode.innerText;
        e.target.classList.add("active");
        e.target.parentNode.classList.add("active");

    })
})

function removeClass() {
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove("active");
    })
}

btnEl.addEventListener('click', ()=>{
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <h3>Thank you!</h3>
        <div><b>Feedback: ${selectedRating}</b></div>
        <p>Your feedback will help us improve our customer support thank you once again for your feedback.</p>
        <button class="btn2">Go back</button>
        `
    }
    // Added for the return button let's explore it what happens
    const btnEl2 = document.querySelector(".btn2");

    btnEl2.addEventListener('click', ()=>{
        location.reload();
    })
})

