const clock = document.querySelector(".js-clock .clock__text");


function getTime() {
    const date = new Date();
    const min = date.getMinutes();
    const hour = date.getHours();
    const time = `${hour < 10 ? `0${hour}` : hour}:${
        min < 10 ? `0${min}` : min}`;
    clock.innerText = time;
    return;
}

function init() {
    getTime();
    setInterval(getTime, 1000); 
    return
}

init();