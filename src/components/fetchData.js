import apiUtils from './apiUtils';
// eslint-disable-next-line import/no-cycle
import updateDOM from './updateDom';

const { cityNotFound } = apiUtils;

const APIKEY = '7f7af0b55686fa59cab963d979dc80d5';

function fetchDetails(cityName = 'Nairobi') {
  const url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => updateDOM(result))
    .catch(() => {
      const wrapper = document.getElementsByClassName(
        'weather__app-wrapper'
      )[0];
      wrapper.appendChild(cityNotFound());
    });
}

export default fetchDetails;
