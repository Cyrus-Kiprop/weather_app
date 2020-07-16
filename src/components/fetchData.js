import dateTimeLocation from './today/dateTimeLocation';
import utils from './UxUtils';
import todaysTemp from './today/todaysWeather';
import stats from './stats/weatherStats';
// eslint-disable-next-line import/no-cycle
import cityForm from './stats/cityForm';
import toggle from './stats/toggle';

const APIKEY = '7f7af0b55686fa59cab963d979dc80d5';

const helper = {
  resetPage(nodeList) {
    nodeList.forEach((node) => {
      node.innerHTML = '';
    });
  },
};

function Db(dataObj) {
  const {
    main, sys, wind, weather, name, dt,
  } = dataObj;
  const data = {
    main,
    sys,
    wind,
    weather: weather[0],
    name,
    dt,
  };

  Object.keys(data).forEach((key) => {
    window.localStorage.setItem(key, JSON.stringify(data[key]));
  });

  // update the UI
  const todayWrapper = document.getElementsByClassName(
    'today__weather-wrapper',
  )[0];

  const statsWrapper = document.getElementsByClassName(
    'stats__weather-wrapper',
  )[0];

  helper.resetPage([todayWrapper, statsWrapper]);

  utils.appendBulkChild(todayWrapper, [
    dateTimeLocation(dt, name, sys.country),
    todaysTemp(main.temp, weather[0].main),
  ]);

  utils.appendBulkChild(statsWrapper, [
    stats(
      wind.speed,
      main.humidity,
      main.pressure,
      main.temp_max,
      main.temp_min,
    ),
    cityForm(),
    toggle(),
  ]);
}

const tryAgain = (event) => {
  const { target } = event;
  const parent = target.parentNode.parentNode;
  parent.classList.add('d-none');
};

const cityNotFound = () => {
  const notFound = utils.make('div', 'not-found');
  const notify = utils.make('span');
  const cancel = utils.make('i', 'fa fa-times-circle-o');
  cancel.addEventListener('click', tryAgain);
  notify.appendChild(document.createTextNode('City not found. Try again'));
  notify.appendChild(cancel);
  notFound.appendChild(notify);
  return notFound;
};

function fetchDetails(cityName = 'Nairobi') {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => Db(result))
    .catch(() => {
      const wrapper = document.getElementsByClassName(
        'weather__app-wrapper',
      )[0];
      wrapper.appendChild(cityNotFound());
    });
}

export default fetchDetails;
