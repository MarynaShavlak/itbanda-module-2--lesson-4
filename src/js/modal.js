const refsSupport = {
  name: 'support',
  openModalBtn: document.querySelector('[data-support-modal-open]'),
  closeModalBtn: document.querySelector('[data-support-modal-close]'),
  modal: document.querySelector('[data-support-modal]'),
  backdrop: document.querySelector('.backdrop--support'),
};

const refsSubscr = {
  name: 'subscription',
  openModalBtn: document.querySelector('[data-subscription-modal-open]'),
  closeModalBtn: document.querySelector('[data-subscription-modal-close]'),
  modal: document.querySelector('[data-subscription-modal]'),
  backdrop: document.querySelector('.backdrop--subscr'),
};

function initializeModal(refs) {
  refs.openModalBtn.addEventListener('click', () => toggleModal(refs));
  refs.closeModalBtn.addEventListener('click', e => {
    e.stopPropagation();
    toggleModal(refs);
  });
  refs.backdrop.addEventListener('click', e => {
    if (e.target === refs.backdrop) toggleModal(refs);
  });
}

function toggleModal(refs) {
  document.body.classList.toggle(`${refs.name}-modal-open`);
  refs.modal.classList.toggle('backdrop--hidden');
  resetErrors(subscForm.elements);
}

initializeModal(refsSupport);
initializeModal(refsSubscr);

const subscForm = document.querySelector('.subscr__form');
subscForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const elements = e.currentTarget.elements;
  const validationFields = [
    'modalUserName',
    'modalUserSurname',
    'modalUserTel',
    'modalUserEmail',
    'modalUserLocation',
    'modalUserDate',
    'modalUserTime',
  ];

  const elementsWithErrors = validateFields(elements, validationFields);
  resetErrors(elements);
  addErrorClass(elementsWithErrors);

  if (elementsWithErrors.length === 0) {
    e.currentTarget.submit();
    window.location.href = 'success-order.html';
  }
}

function validateFields(elements, fieldNames) {
  const elementsWithErrors = [];
  fieldNames.forEach(fieldName => {
    const fieldValue = elements[fieldName].value;
    console.log('fieldValue: ', fieldValue);
    if (fieldValue.length === 0) {
      elementsWithErrors.push(elements[fieldName]);
    }
  });
  return elementsWithErrors;
}

function resetErrors(elements) {
  Array.from(elements).forEach(element => {
    element.classList.remove('error');
  });
}

function addErrorClass(elementsWithErrors) {
  elementsWithErrors.forEach(element => {
    element.classList.add('error');
  });
}
