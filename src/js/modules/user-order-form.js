import { refsSubscr } from './subscr-modal';
import { toggleModal } from './modal';
export const subscForm = document.querySelector('.subscr__form');
const paymentBtnList = document.querySelectorAll('.payment__btn');
const paymentErrorMessage = document.querySelector('.form__payment-error-text');
const policyErrorMessage = document.querySelector('.form__policy-error-text');
const formInputList = document.querySelectorAll('.form__input');
const makeOrderBtn = document.querySelector('.calc-btn');
subscForm?.addEventListener('submit', onSubmitForm);
makeOrderBtn?.addEventListener('click', e => {
  e.preventDefault();
  onSubmitForm(e);
  // subscForm.submit();
});

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

export const userOrderDataObj = {
  userPaymentType: '',
  userBuildingType: '',
  userTakeKeyAddress: '',
  userGiveKeyAddress: '',
  userSquare: '',
  userServices: {},
};

export function setPropertyInOrderObj(el) {
  const propertyName = el.getAttribute('data-type');
  const propertyValue = el.getAttribute('data-id');
  userOrderDataObj[propertyName] = propertyValue;
}

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
  const isComplexOrder = e.currentTarget.tagName === 'BUTTON';
  const elements = isComplexOrder
    ? subscForm.elements
    : e.currentTarget.elements;
  console.log('e.currentTarget: ', e.currentTarget);
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
  const form = isComplexOrder ? subscForm : e.target;
  setOrderDataObj(form);
  console.log('userOrderDataObj : ', userOrderDataObj);
  resetFormFields(elements);
  resetChosenPaymentType();
  toggleModal(refsSubscr);
}

function onPaymentTypeBtnClick(e) {
  const clickedButton = e.target.closest('button');
  setPropertyInOrderObj(clickedButton);
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

function setOrderDataObj(form) {
  console.log('form: ', form);
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    if (key.startsWith('user')) {
      userOrderDataObj[key] = value;
    }
  });
}
