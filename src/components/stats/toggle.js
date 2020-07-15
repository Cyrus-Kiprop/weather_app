import utils from '../UxUtils';

const { make, appendBulkChild } = utils;

const handleToggle = (event) => {
  const { target } = event;
  const tempValue = document.getElementsByClassName('temp-value');
  const highLow = document.getElementsByClassName('stats-temp');

  const toggleDisplay = (nodelist) => {
    Array.from(nodelist).forEach((node) => {
      console.log(node);
      node.classList.toggle('d-none');
    });
  };
  toggleDisplay(tempValue);
  toggleDisplay(highLow);
};

const toggle = () => {
  const container = make('div', 'toggle-wrapper');
  const divOne = make('div', 'form-check');
  const formCheckOne = make('input', 'form-check-input', divOne, {
    id: 'radio-one',
    type: 'radio',
    name: 'choice',
    checked: true,
  });
  const labelOne = make('label', 'form-check-label', divOne);
  labelOne.appendChild(document.createTextNode('&#8451;'));

  const divTwo = make('div', 'form-check');
  const formCheckTwo = make('input', 'form-check-input', divTwo, {
    id: 'radio-two',
    type: 'radio',
    name: 'choice',
  });
  const labelTwo = make('label', 'form-check-label', divTwo);
  labelTwo.appendChild(document.createTextNode('&#8451;'));

  [formCheckOne, formCheckTwo].forEach((form) => {
    form.addEventListener('click', handleToggle);
  });

  appendBulkChild(container, [divOne, divTwo]);

  return container;
};

export default toggle;