import utils from './UxUtils';
import weatherAppWrapper from './weatherDetailsWrapper';

const { appendBulkchild, make } = utils;

const container = make('div', 'app-wrapper');

// utils.appendBulkchild(container, [weatherAppWrapper]);
container.appendChild(weatherAppWrapper);

export default container;
