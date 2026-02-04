const API_KEY = '825ba67370fffd3d35c21c3c88ca1170';

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

const formEl = document.getElementById("form");
formEl.addEventListener('submit', fetchWeatherData);

async function fetchWeatherData() {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);

    } catch (error) {
        
    }
}


