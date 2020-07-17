// eslint-disable-next-line import/no-cycle
import cityForm from './stats/cityForm';
import toggle from './stats/toggle';
import stats from './stats/weatherStats';
import utils from './UxUtils';

const DOMutils = {
  weatherStatistics(nodeContainer, main, wind) {
    return utils.appendBulkChild(nodeContainer, [
      stats(
        wind.speed,
        main.humidity,
        main.pressure,
        main.temp_max,
        main.temp_min
      ),
      cityForm(),
      toggle(),
    ]);
  },
};

export default DOMutils;
