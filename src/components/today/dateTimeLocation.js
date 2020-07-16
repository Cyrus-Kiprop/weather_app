import utils from '../UxUtils';

const { make, appendBulkChild } = utils;

function dateTimeLocation(dt, city, country) {
  const { day, time, month, year, tarehe } = helper.processTime(dt);

  const dateTimeWrapper = make('div', 'date_time-wrapper d-flex flex-column');

  const dayElement = make('span', 'day-wrapper');
  dayElement.appendChild(document.createTextNode(day));

  const updateTime = make('span', 'time-wrapper');
  updateTime.appendChild(document.createTextNode(`${tarehe} ${month} ${year}`));

  const location = make('span', 'location-wrapper');
  const locationIcon = make('i', 'fa fa-map-marker');
  appendBulkChild(location, [
    locationIcon,
    document.createTextNode(`${city}, ${country}`),
  ]);

  appendBulkChild(dateTimeWrapper, [
    dayElement,
    updateTime,
    location,
    helper.updateAt(time),
  ]);
  return dateTimeWrapper;
}

const helper = {
  processTime(dt) {
    const date = helper.convertMillToDate(dt);
    return {
      day: date.slice(0, 3),
      time: new Date().toString().slice(16, 25),
      month: date.slice(4, 7),
      year: date.slice(11, 16),
      tarehe: date.slice(8, 11),
    };
  },

  updateAt(time) {
    const updatedAt = make('span', 'time-wrapper');
    updatedAt.appendChild(document.createTextNode(`Update At: ${time}`));
    return updatedAt;
  },

  convertMillToDate(dt) {
    return new Date(Number(`${dt.toString()}000`)).toString();
  },
};

export default dateTimeLocation;
