const API_KEY = '825ba67370fffd3d35c21c3c88ca1170';

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
// const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
const inputEl = document.getElementById("cityInput");
const weatherInfo = document.getElementById('weather-info');
const weatherIcon = weatherInfo.querySelector('img');
const weatherTem = document.getElementById('temp');
const weatherType = document.getElementById('weather-type');
const cityName = document.getElementById("city-name");
const detailsContEl = document.getElementById("details")

const formEl = document.getElementById("form");
formEl.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(inputEl.value.trim().length === 0){
        alert("Please Enter the city name!")
        submitEl.disabled = true;
    } else {
        fetchWeatherData()
    }
});

const submitEl = document.getElementById("btn");
// inputEl.addEventListener('input', () => {
//     submitEl.disabled = inputEl.value.trim().length === 0;
// });

// fetchWeatherData()
async function fetchWeatherData() {
    let city = inputEl.value.trim();
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);

        const data = await res.json();
        console.log(data)
        if(!res.ok){
            throw new Error(data.message);
        }
        inputEl.value = "";
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        weatherIcon.src = iconUrl;

        weatherTem.innerText = `${Math.round(data.main.temp)}°C`;
        cityName.innerText = `${data.name}`;
        weatherType.innerText = `${data.weather[0].description}`;
        const detailsText = [
            {label: "Feels like", value: `${Math.round(data.main.feels_like)}°C`},
            {label: "Humidity", value: `${Math.round(data.main.humidity)}%`},
            {label: "Wind speed", value: `${Math.round(data.wind.speed)}m/s`}
        ]

        const detailsEls = detailsContEl.querySelectorAll('div');
        detailsEls.forEach((div, index)=>{
            const item = detailsText[index];
            div.innerHTML = `${item.label}: ${item.value}`;
        })


    } catch (error) {
        console.log(error)
        cityName.innerText = error;
    }
}


