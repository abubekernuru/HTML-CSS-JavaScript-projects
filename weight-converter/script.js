const weightInputEl = document.getElementById('weight-kg');
const weightDisplayEl = document.getElementById('weight-display');
// console.log(weightInputEl)

weightInputEl.addEventListener("input", weightConveter);

function weightConveter(){
    if(weightInputEl.value < 0){
        document.getElementById('error').innerText = "Please Enter only positive numbers!"
    }
    const poundValue = weightInputEl.value * 2.20462;
    weightDisplayEl.innerText = `Weight in Pounds is: ${poundValue.toFixed(2)} lbs`;
}
weightConveter()