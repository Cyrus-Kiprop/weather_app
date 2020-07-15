import utils from '../UxUtils';

const { make } = utils;

const handleSubmit = (event) => {
  event.preventDefault();
  console.log('submitted');
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
