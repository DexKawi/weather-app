import { data } from "./data/weather-data.js";

const weatherDetail = document.getElementById('weather-chronology');
const weatherDetailDetails = document.getElementById('weather-detail');


// Define the weather icon mapping
const weatherIconsMap = {
    'sunny': '<img src="./icons/sunny.svg" alt="sunny">',
    'cloudy': '<img src="./icons/cloudy.svg" alt="cloudy">',
    'partly sunny': '<img src="./icons/partly-sunny.svg" alt="partly sunny">'
};


data.forEach(item => {
    const weatherContainer = document.createElement('div');
    const weatherClock = document.createElement('p');
    const weatherIcons = document.createElement('p');
    const weatherTemps = document.createElement('p');

    weatherClock.textContent = item.clock;
    weatherIcons.innerHTML = weatherIconsMap[item.weather] || item.weather;
    weatherTemps.textContent = `${item.temperature}°`;

    weatherClock.className = 'weather-p1';
    weatherTemps.className = 'weather-p3';

    weatherContainer.append(weatherClock, weatherIcons, weatherTemps);
    weatherContainer.className = 'weather-container';
    weatherDetail.append(weatherContainer);
});

weatherDetailDetails.addEventListener('onclick', () => {
    window.alert("Testing");
})


