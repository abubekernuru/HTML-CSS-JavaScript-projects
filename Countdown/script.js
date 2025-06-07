const month = document.getElementById('time__month')
const day = document.getElementById('time__day')
const hour = document.getElementById('time__hour')
const minute = document.getElementById('time__minute')
const second = document.getElementById('time__second')
let newYear = "1 Jan 2025"
const couuntdown = () => {
    let currentDay = new Date();
    // console.log(currentDay)
    let initialDay = new Date(newYear);
    // console.log(initialDay)
    let timeDiff = Math.abs(currentDay - initialDay);
    let seconds = Math.round(timeDiff/1000);
    let months = Math.floor(seconds/2592000);
    seconds = seconds %= 2592000;
    // console.log(monthBn)
    let days = Math.floor(seconds/86400);
    seconds %= 86400;
    // console.log(day)
    let hours = Math.floor(seconds/3600);
    seconds %= 3600;
    // console.log(hour)
    let minutes = Math.floor(seconds/60);
    seconds %= 60;
    // console.log(minutes);

    month.innerHTML = formatNumber(months);
    day.innerHTML = formatNumber(days);
    hour.innerHTML = formatNumber(hours);
    minute.innerHTML = formatNumber(minutes);
    second.innerHTML = formatNumber(seconds);
    



}

// couuntdown();
setInterval(couuntdown, 1000);

const formatNumber = (num) => num < 10 ? `0${num}`: num;