import './assets/stylesheets/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/stylesheets/main.css';
import container from './components/container';
import fetchDetails from './components/fetchData';

fetchDetails();

document.getElementById('root').appendChild(container);
