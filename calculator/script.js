const buttonsEl = document.querySelectorAll('button');


buttonsEl.forEach(button => {
    button.addEventListener('click', (e)=>{
        if(button.textContent === 'C'){
            clearDisplay()
        } else if(button.textContent === '='){
            claculate()
        } else if(button.textContent === '❌'){
            backDisplay()
        } else{
            appendValue()
        }
    })
});

function clearDisplay(){

}

function claculate(){

}

function backDisplay(){

}

function appendValue(){
    
}