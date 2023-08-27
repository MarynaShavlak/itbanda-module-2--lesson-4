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
}

initializeModal(refsSupport);
initializeModal(refsSubscr);

function validateInput(el) {
  const validityState = el.validity;
  console.log('validityState: ', validityState);
  if (validityState.valueMissing) {
    el.setCustomValidity('Будь-ласка, заповніть це поле');
  } else {
    el.setCustomValidity('');
  }
}

const subscForm = document.querySelector('.subscr__form');
console.log('subscForm: ', subscForm);
subscForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  console.log('e: ', e);
  e.preventDefault();
  // const inputElements = document.querySelectorAll('input');
  // console.log('inputElements : ', inputElements);
  // const filteredInputs = Array.from(inputElements).filter(function (element) {
  //   return (
  //     !element.classList.contains('form__comment') &&
  //     !element.classList.contains('form__checkbox')
  //   );
  // });
  // filteredInputs.forEach(input => validateInput(input));
  // console.log('filteredInputs: ', filteredInputs);
  // if (subscForm.reportValidity()) {
  //   // If form is valid, you can submit it here
  //   // form.submit();
  //   console.log('Form is valid. Submitting...');
  // } else {
  //   console.log('Form is not valid. Please check the fields.');
  // }
}
