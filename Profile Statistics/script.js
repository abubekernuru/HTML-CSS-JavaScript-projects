/*
-select all counters
-foreach counter add initial text
-add the increment variable that allow all to finish the same time
-update the initial value
- using set time out command to count up to data ceil

*/
const counterEls = document.querySelectorAll(".counter");
counterEls.forEach(counterEl => {
    counterEl.innerText = "0";
    let currentCounter = counterEl.innerText;
    increaseCounter()
    function increaseCounter(){
    const dataCeil = parseInt(counterEl.getAttribute("data-ceil"));
    // console.log(dataCeil);
    let increment = Math.ceil(dataCeil / 15);
    currentCounter = parseInt(currentCounter) + increment;
    // console.log(increment);
    
    if(currentCounter <= dataCeil){
        counterEl.innerText = currentCounter;
        setTimeout(increaseCounter, 100)
    } else {
        counterEl.innerText = dataCeil;
    }
    }
    
})