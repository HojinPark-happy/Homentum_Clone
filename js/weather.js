const weather = document.querySelector(".js-weather");
const API_KEY = "d2ce5728c951b2bd7870766866e58cbc";
const COORDS = "coords";

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
    ).then(function(response) {
        return response.json()
    }).then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${temperature}°F @ ${place}`
    })
}

function saveCoords(locationObj) {
    localStorage.setItem(COORDS, JSON.stringify(locationObj));

}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const locationObj = {
        latitude,
        longitude
    }
    saveCoords(locationObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Cannot get your location!")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoordinates() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoordinates();
}

init();