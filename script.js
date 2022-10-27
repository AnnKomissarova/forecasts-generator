const container = document.querySelector('.container');
const generate = document.querySelector('.forecast-btn');
const forecast = document.querySelector('.current-forecast h1');
const forecastPerCent = document.querySelector('.current-forecast p');
const list = document.querySelector('#forecast-item');

const forecastes = ['У тебя все получится!', 'Ты найдешь то,что ищешь', 'Тебя ждет повышение!', 'Тебя ждет встреча с друзьми!', 'Просто расслабься и выпей вина =)']

generate.addEventListener('click', () => {
    let randForecast = Math.floor(Math.random() * forecastes.length);
    forecast.innerHTML = forecastes[randForecast];
    forecastPerCent.innerHTML = 'Вероятность: ' + Math.floor(Math.random() * 101) + '%';

    const map = makeMapForecast(forecast,forecastPerCent);
    container.append(map);
});

function makeMapForecast(forecast,forecastPerCent) {
    const forecastMap = list.content.cloneNode(true);

    forecastMap.querySelector('h3').textContent = forecast.textContent;
    forecastMap.querySelector('p').textContent = forecastPerCent.textContent;

    return forecastMap;
}


