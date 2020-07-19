import utils from '../UxUtils';

const { make } = utils;

function stats(windSpeed, humidityValue, pressureValue, highValue, lowValue) {
  const statsWrapper = make('div', 'stats-container');

  const pressure = make('div', 'stats-item', statsWrapper);
  make('span', '', pressure).appendChild(document.createTextNode('pressure'));
  make('span', '', pressure).appendChild(
    document.createTextNode(`${pressureValue} hPa`),
  );

  const humidity = make('div', 'stats-item', statsWrapper);
  make('span', '', humidity).appendChild(document.createTextNode('humidity'));
  make('span', '', humidity).appendChild(
    document.createTextNode(`${humidityValue} %`),
  );

  const wind = make('div', 'stats-item', statsWrapper);
  make('span', '', wind).appendChild(document.createTextNode('wind'));
  make('span', '', wind).appendChild(
    document.createTextNode(`${windSpeed} Km/hr`),
  );

  const tempHighLow = make('div', '', statsWrapper);

  const highTemp = Math.round(Number(highValue) - 273);
  const highTempF = highTemp + 32;
  const lowTemp = Math.round(Number(lowValue) - 273);
  const lowTempF = lowTemp + 32;

  const high = make('div', 'stats-temp', tempHighLow);
  make('span', '', high).appendChild(document.createTextNode('high'));
  make('span', '', high).appendChild(document.createTextNode(`${highTemp} °C`));

  const highF = make('div', 'stats-temp d-none', tempHighLow);
  make('span', '', highF).appendChild(document.createTextNode('high'));
  make('span', '', highF).appendChild(
    document.createTextNode(`${highTempF} °F`),
  );

  const low = make('div', 'stats-temp', tempHighLow);
  make('span', '', low).appendChild(document.createTextNode('low'));
  make('span', '', low).appendChild(document.createTextNode(`${lowTemp} °C`));

  const lowF = make('div', 'stats-temp d-none', tempHighLow);
  make('span', '', lowF).appendChild(document.createTextNode('low'));
  make('span', '', lowF).appendChild(document.createTextNode(`${lowTempF} °F`));

  return statsWrapper;
}

export default stats;
