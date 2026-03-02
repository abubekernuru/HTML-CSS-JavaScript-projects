const buttonsEl = document.querySelectorAll('button');
const displayEl = document.getElementById('result');


buttonsEl.forEach(button => {
    button.addEventListener('click', (e)=>{
        if(button.textContent === 'C'){
            clearDisplay()
        } else if(button.textContent === '='){
            try {
                calculate()
            } catch (error) {
                displayEl.value = "Error"
            }
        } else if(button.textContent.trim() === '←'){
            backDisplay()
        } else{
            appendValue(button.textContent)
        }
    })
});

function clearDisplay(){
    displayEl.value = ''
}

function calculate(){
    const result = eval(displayEl.value)
    displayEl.value = result.toString()
}

function appendValue(content){
    displayEl.value += content.toString()
}

function backDisplay(){
    displayEl.value = displayEl.value.slice(0, -1)
}