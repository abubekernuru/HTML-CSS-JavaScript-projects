const displayEl = document.getElementById('input');
const btnEls = document.querySelectorAll('.btn');

btnEls.forEach(btn => {
    if(btn.innerText === "C"){
        btn.addEventListener('click', clearValue)
    }else if(btn.innerText === "⌫"){
        btn.addEventListener('click', backspace)
    }else if(btn.innerText === "="){
        btn.addEventListener('click', ()=>caculate(displayEl.value))  
    } else {
        btn.addEventListener('click', ()=>appendValue(btn.innerText))
    }
});

function clearValue(){
    displayEl.value = "";
}

function backspace(){
    displayEl.value = displayEl.value.slice(0, -1);
}

function appendValue(value){
    displayEl.value += value;
}

function caculate(value){
    try {
        displayEl.value = eval(value);
    } catch (error) {
        displayEl.value = "Error";
    }
}

