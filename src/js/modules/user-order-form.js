export const subscForm = document.querySelector('.subscr__form');
const paymentBtnList = document.querySelectorAll('.payment__btn');
subscForm?.addEventListener('submit', onSubmitForm);

function validateFields(elements, fieldNames) {
  const elementsWithErrors = [];
  fieldNames.forEach(fieldName => {
    const fieldValue = elements[fieldName].value;
    if (fieldValue.length === 0) {
      elementsWithErrors.push(elements[fieldName]);
    }
  });
  return elementsWithErrors;
}

export function resetErrors(elements) {
  [...elements].forEach(element => {
    element.classList.remove('error');
  });
}

function addErrorClass(elementsWithErrors) {
  elementsWithErrors.forEach(element => {
    element.classList.add('error');
  });
}

function onSubmitForm(e) {
  e.preventDefault();
  // const elements = e.currentTarget.elements;
  // const validationFields = [
  //   'userName',
  //   'userSurname',
  //   'userTel',
  //   'userEmail',
  //   'userLocation',
  //   'userDate',
  //   'userTime',
  // ];

  // const elementsWithErrors = validateFields(elements, validationFields);
  // resetErrors(elements);
  // addErrorClass(elementsWithErrors);
  const isPaymentTypeChosen = checkIfPaymentTypeChosen();
  console.log('isPaymentTypeChosen: ', isPaymentTypeChosen);

  if (elementsWithErrors.length === 0) {
    console.log('form submit');
    e.currentTarget.submit();
    window.location.href = 'success-order.html';
  }
}

paymentBtnList.forEach(el => {
  el.addEventListener('click', e => {
    onPaymentTypeBtnClick(e);
  });
});

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

function checkIfPaymentTypeChosen() {
  return [...paymentBtnList].some(btn => btn.classList.contains('active'));
}
