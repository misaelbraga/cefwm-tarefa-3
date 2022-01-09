// const targetDate = new Date('2022-01-01T00:00:00.000Z');
const targetDate = new Date();
targetDate.setTime(targetDate.getTime() + 5000);

const counterDays = document.querySelector("#counter-days");
const counterHours = document.querySelector("#counter-hours");
const counterMinutes = document.querySelector("#counter-minutes");
const counterSeconds = document.querySelector("#counter-seconds");

let timer = null;

let dayDiff = 0;
let hourDiff = 0;
let minuteDiff = 0;
let secondDiff = 0;

if(targetDate - new Date() > 0) {
    timer = setInterval(() => updateStopwatch(), 1000)
}

function updateStopwatch() {
    if(targetDate - new Date() <= 0) {
        clearInterval(timer);
        updateColors();
        return;
    }

    dayDiff = (targetDate - new Date()) / ( 1000 * 60 * 60 * 24 );
    hourDiff = (dayDiff - Math.floor(dayDiff)) * 24;
    minuteDiff = (hourDiff - Math.floor(hourDiff)) * 60;
    secondDiff = (minuteDiff - Math.floor(minuteDiff)) * 60;

    counterDays.innerHTML = Math.trunc(dayDiff);
    counterHours.innerHTML = Math.trunc(hourDiff);
    counterMinutes.innerHTML = Math.trunc(minuteDiff);
    counterSeconds.innerHTML = Math.trunc(secondDiff);
    showCounters();
}

function updateColors() {
    const counterContainer = document.querySelectorAll("div.text-white");
    counterContainer.forEach((node) => {
        node.classList.remove('bg-dark');
        node.classList.add('bg-success');
    })
}

function showCounters() {
    counterDays.classList.remove('invisible');
    counterHours.classList.remove('invisible');
    counterMinutes.classList.remove('invisible');
    counterSeconds.classList.remove('invisible');
}