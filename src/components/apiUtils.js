import utils from './UxUtils';

const apiUtils = {
  cityNotFound() {
    const notFound = utils.make('div', 'not-found');
    const notify = utils.make('span');
    const cancel = utils.make('i', 'fa fa-times-circle-o');
    cancel.addEventListener('click', apiUtils.tryAgain);
    notify.appendChild(document.createTextNode('City not found. Try again'));
    notify.appendChild(cancel);
    notFound.appendChild(notify);
    return notFound;
  },

  resetPage(nodeList) {
    nodeList.forEach((node) => {
      node.innerHTML = '';
    });
  },

  tryAgain(event) {
    const { target } = event;
    const parent = target.parentNode.parentNode;
    parent.classList.add('d-none');
  },
};

export default apiUtils;
