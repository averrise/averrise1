const clock=document.querySelector(".clock");

function browserClock () {
const nowTime= new Date();
const clockHours= String(nowTime.getHours()).padStart(2, "0");
const clockMinutes= String(nowTime.getMinutes()).padStart(2, "0");
const clockseconds=String(nowTime.getSeconds()).padStart(2,"0");
clock.innerText=`${clockHours}:${clockMinutes}:${clockseconds}`;
}

browserClock();
setInterval(browserClock, 1000);