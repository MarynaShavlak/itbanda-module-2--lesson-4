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

// function validateInput(el) {
//   const validityState = el.validity;
//   console.log('validityState: ', validityState);
//   if (validityState.valueMissing) {
//     el.setCustomValidity('Будь-ласка, заповніть це поле');
//   } else {
//     el.setCustomValidity('');
//   }
// }

const subscForm = document.querySelector('.subscr__form');
subscForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  console.log('e: ', e);
  e.preventDefault();
  validateInput();
}

function validateInput() {
  if (!datePicker.selectedDates || datePicker.selectedDates.length === 0) {
    datePickerElement.setCustomValidity('Оберіть дату прибирання');
  } else {
    datePickerElement.setCustomValidity('');
  }
}
