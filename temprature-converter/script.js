const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

celsiusEl.addEventListener("change", computeTemp);
fahrenheitEl.addEventListener("change", computeTemp);
kelvinEl.addEventListener("change", computeTemp);


function computeTemp(e) {
    const currentValue = +e.target.value;
    const currentUnit = e.target.name;
    switch (currentUnit) {
        case "celsius":
            fahrenheitEl.value = ((currentValue * 1.8) + 32);
            kelvinEl.value = currentValue + 273.15;
            break;
        case "fahrenheit":
            celsiusEl.value = (currentValue - 32) / 1.8;
            kelvinEl.value = ((currentValue - 32) / 1.8) + 273.15;
            break;
        case "kelvin":
            fahrenheitEl.value = ((currentValue -273.15)  * 1.8) + 32;
            celsiusEl.value = currentValue - 273.15;
            break;
    
        default:
            break;
    }
}