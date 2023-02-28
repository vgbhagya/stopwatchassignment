let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;

function start() {
    intervalId = setInterval(updateTime, 1000);
    document.getElementById("start").disabled = true;
    document.getElementById("pause").disabled = false;
}

function pause() {
    clearInterval(intervalId);
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
}

function reset() {
    clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = false;
    document.getElementById("cast-list").innerHTML = "";
}

function cast() {
    const cast = document.createElement("li");
    cast.innerHTML = getTimeString();
    document.getElementById("cast-list").appendChild(cast);
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

function updateDisplay() {
    document.querySelector(".display").innerHTML = getTimeString();
}

function getTimeString() {
    return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

function pad(value) {
    return value < 10 ? "0" + value : value;
}