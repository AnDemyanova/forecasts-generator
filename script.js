/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let forecastButton = document.querySelector('.forecast-btn');
const heading = document.querySelector('.current-forecast h1');
const paragraph = document.querySelector('.current-forecast p');
const forecastContainer = document.querySelector('.forecasts');
const forcastTemplate = document.getElementById('forecast-item');




forecastButton.addEventListener('click', function() {
    const predictionNumber = getRandom(1, 5);

    let predictionText = "";

    switch (predictionNumber) {
        case 1:
            predictionText = "За твоей дверью уже стоит счастье.";
            break;
        case 2:
            predictionText = "Совсем скоро ты встретишь интересного человека.";
            break;
        case 3:
            predictionText = "В любом начинании будет преследовать удача.";
            break;
        case 4:
            predictionText = "Не отказывай себе в отдыхе, он обещает быть незабываемым!";
            break;
        case 5:
            predictionText = "Сегодня следуй за настроением, никуда не сворачивай!";
            break;

    }


    const probability = getRandom(0, 100);

    heading.textContent = predictionText;
    paragraph.textContent = `Вероятность: ${probability} %`;

    const myForecasts = makeForcastByTemplate(predictionText, probability);
    forecastContainer.prepend(myForecasts);
});

function makeForcastByTemplate(predictionText, probability) {

    const newForecast = forcastTemplate.content.cloneNode(true);
    newForecast.querySelector('h3').textContent = predictionText;
    newForecast.querySelector('p').textContent = `Вероятность: + ${probability} + %`;
    return newForecast;



}