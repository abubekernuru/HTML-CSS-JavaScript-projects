const hourEl = document.getElementById('hours');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm'); 

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampmEl = "AM";

    (h > 12) ? (h = h - 12, ampmEl.innerText = "PM") : h;
    // h = h < 10 ? "0" + h : h;
    // m = m < 10 ? "0" + m : m;
    // s = s < 10 ? "0" + s : s;

    // It can be done like this in short
    function formatTime(time){
        return time = time < 10 ? "0" + time : time;
    }
    hourEl.innerText = formatTime(h);
    minuteEl.innerText = formatTime(m);
    secondEl.innerText = formatTime(s);
    
    setTimeout(() => {
        updateClock()
    }, 1000);
}

updateClock();