const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");

const progresBar = document.querySelector(".progress-bar-front");

const stepEls = document.querySelectorAll(".step");
console.log(stepEls);

let currentChecked = 1;

nextEl.addEventListener("click", ()=>{
    currentChecked++;
    console.log(currentChecked);
    if(currentChecked > stepEls.length){
        currentChecked = stepEls.length;
    }
    updateStepBar();
})

prevEl.addEventListener("click", ()=>{
    currentChecked--;
    if(currentChecked < 1){
        currentChecked = 1;
    }
    updateStepBar();
})

function updateStepBar() {
    stepEls.forEach((stepEl, index)=>{
        if(index < currentChecked){
            stepEl.classList.add("checked");
            stepEl.innerHTML= `
            <i class="fa-solid fa-check"></i>
            <small>${ index === 0 ? "Start" : index === stepEls.length -1 ? "Final" : "Step " + index} <small>
            `
        }else{
            stepEl.classList.remove("checked");
            stepEl.innerHTML = `
            <i class="fa-solid fa-xmark"></i>
            `
        }
    })
    
    const checkedSteps = document.querySelectorAll(".checked");
    progresBar.style.width = (checkedSteps.length - 1 )/( stepEls.length -1) * 100 + "%";

    if(currentChecked === stepEls.length){
        nextEl.disabled = true;
    }else if(currentChecked === 1){
        prevEl.disabled = true;
    }else {
        nextEl.disabled = false;
        prevEl.disabled = false;
    }
}