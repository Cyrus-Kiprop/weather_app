import utils from '../UxUtils';
import dateTimeLocation from './dateTimeLocation';

const { make } = utils;

const todayContainer = make('div', 'today__weather-wrapper');

async function database() {
  const promiseArr = [];
  ['sys', 'main', 'name', 'weather', 'wind', 'dt'].forEach((key) => {
    const p = Promise.resolve(JSON.parse(window.localStorage.getItem(key)));
  });

  return Promise.all(promiseArr).then((result) => {
    console.log(result);
  });
}

database();
// dateTimeLocation();

export default todayContainer;
