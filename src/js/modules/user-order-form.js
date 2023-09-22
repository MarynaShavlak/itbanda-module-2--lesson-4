import { refsSubscr } from './subscr-modal';
import { toggleModal } from './modal';
export const subscForm = document.querySelector('.subscr__form');
const paymentBtnList = document.querySelectorAll('.payment__btn');
const paymentErrorMessage = document.querySelector('.form__payment-error-text');
const policyErrorMessage = document.querySelector('.form__policy-error-text');
const formInputList = document.querySelectorAll('.form__input');
subscForm?.addEventListener('submit', onSubmitForm);

paymentBtnList.forEach(el => {
  el.addEventListener('click', e => {
    onPaymentTypeBtnClick(e);
    const isPaymentErrorMessageVisible =
      !paymentErrorMessage.classList.contains('isHidden');
    if (isPaymentErrorMessageVisible) {
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

const userOrderData = {
  userTypePayment: '',
};

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
  elementsWithErrors.forEach(element => {
    element.classList.add('error');
  });
}

function checkIfPaymentTypeChosen() {
  return [...paymentBtnList].some(btn => btn.classList.contains('active'));
}

function checkIfPolicyAgreed() {
  const policyCheckBox = document.querySelector('[name="studio-policy-check"]');
  const isAgreed = policyCheckBox.checked;
  return isAgreed;
}

function togglePaymentTypeErrorVisibility() {
  paymentErrorMessage.classList.toggle('isHidden');
}

function togglePolicyErrorVisibility() {
  policyErrorMessage.classList.toggle('isHidden');
}

function onSubmitForm(e) {
  e.preventDefault();
  const elements = e.currentTarget.elements;
  const elementsWithErrors = validateFields(elements, validationFields);
  resetErrors(elements);
  addErrorClass(elementsWithErrors);
  const isPaymentTypeChosen = checkIfPaymentTypeChosen();
  const isPolicyAgreed = checkIfPolicyAgreed();
  const isAnyError = elementsWithErrors.length > 0;

  if (!isPaymentTypeChosen) {
    togglePaymentTypeErrorVisibility();
  }
  if (!isPolicyAgreed) {
    togglePolicyErrorVisibility();
  }
  if (!isPaymentTypeChosen || isAnyError || !isPolicyAgreed) {
    return;
  }

  setOrderDataObj(e.target);
  resetFormFields(elements);
  resetChosenPaymentType();
  toggleModal(refsSubscr);
}

function onPaymentTypeBtnClick(e) {
  const clickedButton = e.target.closest('button');
  setPaymentTypeInOrderObj(clickedButton);
  if (clickedButton.classList.contains('active')) return;
  [...paymentBtnList].forEach(button => {
    if (button === clickedButton) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function resetFormFields(elements) {
  [...elements].forEach(element => {
    if (
      element.type === 'text' ||
      element.type === 'email' ||
      element.type === 'tel' ||
      element.tagName === 'TEXTAREA'
    ) {
      element.value = '';
    } else if (element.type === 'checkbox') {
      element.checked = true;
    }
  });
}
function resetChosenPaymentType() {
  [...paymentBtnList].forEach(button => {
    button.classList.remove('active');
  });
}

function setPaymentTypeInOrderObj(paymentBtn) {
  const paymentType = paymentBtn.getAttribute('data-id');
  userOrderData.userTypePayment = paymentType;
}

function setOrderDataObj(form) {
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    if (key.startsWith('user')) {
      userOrderData[key] = value;
    }
  });
  console.log('userOrderData: ', userOrderData);
}
