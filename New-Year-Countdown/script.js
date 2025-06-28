const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

/* 
- first store in a variable the new year date time in milliseconds
- retrive the current date using js built in method
- store in a variable the difference between the new year and now
*/

const newYearDate = new Date("jan 1, 2026, 00:00:00").getTime();
// console.log(newYearDate);

updateCountdown();

function updateCountdown(){
    const now = new Date().getTime();
    // console.log(now);
    const gap = newYearDate - now;
    // console.log(gap, now)

    const s = 1000;
    const m = s * 60;
    const h = m * 60;
    const d = h * 24;

    const day = Math.floor(gap/d);
    // console.log(day)
    const hour = Math.floor((gap % d)/h);
    // console.log(hour);
    const minute = Math.floor((gap % h)/ m);
    // console.log(minute);
    const second = Math.floor((gap % m)/s);
    // console.log(second);

    dayEl.innerText = formatTime(day);
    hourEl.innerText = formatTime(hour);
    minuteEl.innerText = formatTime(minute);
    secondEl.innerText = formatTime(second);

    setTimeout(updateCountdown, 1000);

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
}
