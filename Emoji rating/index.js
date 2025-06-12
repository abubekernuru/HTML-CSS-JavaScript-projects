const emojiEls = document.querySelectorAll(".fa-regular");
const starEls = document.querySelectorAll(".fa-solid");
const colors = ["#e74c3c", "#f1c40f", "#2ecc71", "#3498db", "#9b59b6"];


starEls.forEach((starEl, index)=>{
    starEl.addEventListener("click", ()=>{
        updateRatings(index);
    })
})

function updateRatings(index) {
    starEls.forEach((starEl, idx)=>{
        if(idx <= index){
            starEl.classList.add('active');
        }else {
            starEl.classList.remove('active');
        }
    })
    
    emojiEls.forEach((emoji)=>{
            emoji.style.transform = `translateX(${index * -50}px)`;
            emoji.style.color = colors[index];
    })
}

