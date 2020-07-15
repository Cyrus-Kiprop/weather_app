import utils from './UxUtils';
import todayWrapper from './today/index';
import statsWrapper from './stats/index';

const { make, appendBulkChild } = utils;

const weatherAppWrapper = make('div', 'weather__app-wrapper');

appendBulkChild(weatherAppWrapper, [todayWrapper, statsWrapper]);

export default weatherAppWrapper;
