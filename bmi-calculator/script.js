const btnEl = document.getElementById("btn");
const weightEl = document.getElementById("weight");
const heightEl = document.getElementById("height");
const dataDisplayEl = document.getElementById("dataDisplay");
const categoryTextEl = document.querySelector(".category span");
const dataDisplaySectionEls = document.querySelector(".dataDisplay");

dataDisplaySectionEls.style.display = 'none';
btnEl.addEventListener('click', caclBmi);

function caclBmi() {
    dataDisplaySectionEls.style.display = 'block';
    let weight = +weightEl.value;
    let height = +heightEl.value;
    let heightInMeter = height / 100;

    let bmi = (weight/(heightInMeter ** 2));
    dataDisplayEl.value = bmi.toFixed(4);

    switch (true) {
        case (bmi < 18.5):
            categoryTextEl.innerText = "Underweight"
            break;
        case (bmi >= 18 && bmi < 25):
            categoryTextEl.innerText = "Normal"
            break;
        case (bmi >= 25 && bmi < 30):
            categoryTextEl.innerText = "Overweight"
            break;
        case (bmi >= 30):
            categoryTextEl.innerText = "Obese"
            break;
    
        default:
            categoryTextEl.innerText = "Enter your height and weight"
            break;
    }
}