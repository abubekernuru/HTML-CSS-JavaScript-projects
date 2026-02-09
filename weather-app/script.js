const API_KEY = '825ba67370fffd3d35c21c3c88ca1170';

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
// const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
const inputEl = document.getElementById("cityInput");
const weatherInfo = document.getElementById('weather-info');
const weatherIcon = weatherInfo.querySelector('img');
const weatherTem = document.getElementById('temp');
const weatherType = document.getElementById('weather-type');
const cityName = document.getElementById("city-name");
const detailsContEl = document.getElementById('details');

const formEl = document.getElementById("form");
formEl.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(inputEl.value.trim().length === 0){
        alert("Please Enter the city name!")
    } else {
        fetchWeatherData()
    }
});

async function fetchWeatherData() {
    let city = inputEl.value.trim();
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);

        const data = await res.json();
        // console.log(data)
        if(!res.ok){
            throw new Error(data.message);
        }
        inputEl.value = "";
        detailsContEl.innerHTML= ""
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        const imgEl = document.getElementById('weather-img');
        console.log(imgEl)
        if(iconCode){
            imgEl.classList.remove('hidden')
            imgEl.src= iconUrl;
        }

        weatherTem.innerText = `${Math.round(data.main.temp)}°C`;
        cityName.innerText = `${data.name}`;
        weatherType.innerText = `${data.weather[0].description}`;
        const detailsText = [
            {label: "Feels like", value: `${Math.round(data.main.feels_like)}°C`},
            {label: "Humidity", value: `${Math.round(data.main.humidity)}%`},
            {label: "Wind speed", value: `${Math.round(data.wind.speed)}m/s`}
        ]
            detailsText.forEach(item => {
                const div = document.createElement('div');
                div.innerHTML = `${item.label}: ${item.value}`;
                detailsContEl.appendChild(div);
            })
            inputEl.value = "";

    } catch (error) {
        console.log(error)
        cityName.innerText="City not found";
    }
}


