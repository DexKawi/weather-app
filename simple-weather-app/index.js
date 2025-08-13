import { data } from "./data/weather-data.js";

const weatherDetail = document.getElementById('weather-chronology');


data.forEach(item => {
    const weatherContainer = document.createElement('div');
    const weatherClock = document.createElement('h3');
    const weatherIcons = document.createElement('p');
    const weatherTemps = document.createElement('p');

    weatherClock.textContent = item.clock;
    weatherIcons.textContent = item.weather;
    weatherTemps.textContent = `${item.temperature}°`;

    weatherIcons = {
        'sunny': '<img src="./icons/cloudy.svg" alt="sunny">',
        'cloudy': '<img src="./icons/cloudy.svg" alt="sunny">',
        'partly sunny' : '<img src="./icons/cloudy.svg" alt="sunny">'
    }

    weatherContainer.append(weatherClock, weatherIcons, weatherTemps);
    weatherDetail.append(weatherContainer);
});
