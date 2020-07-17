// eslint-disable-next-line import/no-cycle
import utils from './UxUtils';
import todaysTemp from './today/todaysWeather';
import dateTimeLocation from './today/dateTimeLocation';
import apiUtils from './apiUtils';
// eslint-disable-next-line import/no-cycle
import DOMutils from './DOMutils';

const { weatherStatistics } = DOMutils;
const { resetPage } = apiUtils;

function updateDOM(dataObj) {
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

  resetPage([todayWrapper, statsWrapper]);

  utils.appendBulkChild(todayWrapper, [
    dateTimeLocation(dt, name, sys.country),
    todaysTemp(main.temp, weather[0].main),
  ]);

  weatherStatistics(statsWrapper, main, wind);
}

export default updateDOM;
