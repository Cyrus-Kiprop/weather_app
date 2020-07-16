import utils from '../UxUtils';

const { make, appendBulkChild } = utils;

function todaysTemp(temp, weatherDesc) {
  updateBackground(weatherDesc);
  const tempWrapper = make('div', 'temp-container d-flex flex-column');

  make('i', 'fa fa-sun-o temp-icon', tempWrapper, {
    'aria-hidden': true,
  });

  const celsius = Math.round(Number(temp) - 272);
  const fahrenheit = celsius + 32;

  const tempCelsius = make('p', 'temp-value ');
  tempCelsius.appendChild(document.createTextNode(`${celsius} °C`));
  const tempFahrenheit = make('span', 'temp-value d-none');
  tempFahrenheit.appendChild(document.createTextNode(`${fahrenheit} °F`));

  const weatherDes = make('span', 'weather-desciption');
  appendBulkChild(weatherDes, [document.createTextNode(weatherDesc)]);

  appendBulkChild(tempWrapper, [tempCelsius, tempFahrenheit, weatherDes]);
  return tempWrapper;
}

const updateBackground = (weather) => {
  const element = document.getElementsByClassName('today__weather-wrapper')[0];
  const arr = ['clouds', 'rainy', 'sunny'];
  arr.forEach((weatherClass) => {
    element.classList.remove(weatherClass);
  });
  if (weather.toLowerCase() === 'clouds') {
    element.classList.add('clouds');
  }
  if (weather.toLowerCase() === 'rain') {
    element.classList.add('rainy');
  }
  if (weather.toLowerCase() === 'clear') {
    element.classList.add('sunny');
  }
};

export default todaysTemp;
