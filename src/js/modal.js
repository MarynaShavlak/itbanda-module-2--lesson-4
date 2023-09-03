import { datePicker, datePickerElement } from './datepick';
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

const subscForm = document.querySelector('.subscr__form');
subscForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  console.log('e: ', e);
  e.preventDefault();
  // validateInput();
  const elements = e.currentTarget.elements;
  console.log('elements: ', elements);
  const userName = elements.modalUserName.value;
  const userSurname = elements.modalUserSurname.value;
  const userTel = elements.modalUserTel.value;
  const userEmail = elements.modalUserEmail.value;
  const userLocation = elements.modalUserLocation.value;
  const userDate = elements.modalUserDate.value;
  const userTime = elements.modalUserTime.value;

  const elementsWithErrors = [];
  if (userName.length === 0) {
    elementsWithErrors.push(elements.modalUserName);
  }

  if (userSurname.length === 0) {
    elementsWithErrors.push(elements.modalUserSurname);
  }

  if (userTel.length === 0) {
    elementsWithErrors.push(elements.modalUserTel);
  }

  if (userEmail.length === 0) {
    elementsWithErrors.push(elements.modalUserEmail);
  }

  if (userLocation.length === 0) {
    elementsWithErrors.push(elements.modalUserLocation);
  }

  if (userDate.length === 0) {
    elementsWithErrors.push(elements.modalUserDate);
  }

  if (userTime.length === 0) {
    elementsWithErrors.push(elements.modalUserTime);
  }
  console.log('elementsWithErrors: ', elementsWithErrors);

  // Remove any existing "error" class from all elements
  Array.from(elements).forEach(element => {
    element.classList.remove('error');
  });

  // Add the "error" class to the elements with errors
  elementsWithErrors.forEach(element => {
    element.classList.add('error');
  });

  // Check if there are errors
  if (elementsWithErrors.length === 0) {
    // If no errors, submit the form
    form.submit();
  }
}

// function validateInput() {
//   if (!datePicker.selectedDates || datePicker.selectedDates.length === 0) {
//     datePickerElement.setCustomValidity('Оберіть дату прибирання');
//     console.log('datePickerElement: ', datePickerElement);
//     console.log('custom');
//   } else {
//     datePickerElement.setCustomValidity('');
//     console.log('space');
//   }
// }
