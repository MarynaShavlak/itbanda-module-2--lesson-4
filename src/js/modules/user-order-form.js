export const subscForm = document.querySelector('.subscr__form');
const paymentBtnList = document.querySelectorAll('.payment__btn');
const errorMessage = document.querySelector('.form__error-text');
const formInputList = document.querySelectorAll('.form__input');
subscForm?.addEventListener('submit', onSubmitForm);

paymentBtnList.forEach(el => {
  el.addEventListener('click', e => {
    onPaymentTypeBtnClick(e);
    const isErrorMessageVisible = !errorMessage.classList.contains('isHidden');
    if (isErrorMessageVisible) {
      togglePaymentTypeErrorVisibility();
    }
  });
});
formInputList.forEach(el => {
  el.addEventListener('focus', () => {
    el.classList.remove('error');
  });
});

const validationFields = [
  'userName',
  'userSurname',
  'userTel',
  'userEmail',
  'userLocation',
  'userDate',
  'userTime',
];

function validateFields(elements, fieldNames) {
  return fieldNames
    .filter(fieldName => elements[fieldName].value.trim() === '')
    .map(fieldName => elements[fieldName]);
}

export function resetErrors(elements) {
  [...elements].forEach(element => {
    element.classList.remove('error');
  });
}

function addErrorClass(elementsWithErrors) {
  console.log('elementsWithErrors: ', elementsWithErrors);
  elementsWithErrors.forEach(element => {
    element.classList.add('error');
  });
}

function checkIfPaymentTypeChosen() {
  return [...paymentBtnList].some(btn => btn.classList.contains('active'));
}

function togglePaymentTypeErrorVisibility() {
  errorMessage.classList.toggle('isHidden');
}

function onSubmitForm(e) {
  e.preventDefault();
  const elements = e.currentTarget.elements;
  const elementsWithErrors = validateFields(elements, validationFields);
  resetErrors(elements);
  addErrorClass(elementsWithErrors);
  const isPaymentTypeChosen = checkIfPaymentTypeChosen();
  const isAnyError = elementsWithErrors.length > 0;
  if (!isPaymentTypeChosen) {
    togglePaymentTypeErrorVisibility();
  }
  if (!isPaymentTypeChosen || isAnyError) {
    return;
  }
  console.log('submit');
  console.log('elements: ', elements);

  // e.currentTarget.submit();
}

function onPaymentTypeBtnClick(e) {
  const clickedButton = e.target.closest('button');
  if (clickedButton.classList.contains('active')) return;
  [...paymentBtnList].forEach(button => {
    if (button === clickedButton) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}
