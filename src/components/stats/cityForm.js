/* eslint-disable import/no-cycle */
import utils from '../UxUtils';
import fetchDetails from '../fetchData';

const { make } = utils;

const handleSubmit = (event) => {
  event.preventDefault();

  fetchDetails(document.getElementById('search-city').value.toLowerCase());
};

function cityForm() {
  const form = make('form', 'form-wrapper');
  form.addEventListener('submit', handleSubmit);

  const div = utils.make('div', 'form-group', form);
  make('input', 'form-control', div, {
    type: 'text',
    id: 'search-city',
    placeholder: 'Enter a city...',
  });

  const btn = make('button', 'btn', form, {
    type: 'submit',
  });

  btn.appendChild(document.createTextNode('Submit'));
  return form;
}

export default cityForm;
