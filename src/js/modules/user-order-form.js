export const subscForm = document.querySelector('.subscr__form');
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
  console.log('form submit');
  e.preventDefault();
  const elements = e.currentTarget.elements;
  const validationFields = [
    'userName',
    'userSurname',
    'userTel',
    'userEmail',
    'userLocation',
    'userDate',
    'userTime',
  ];

  const elementsWithErrors = validateFields(elements, validationFields);
  resetErrors(elements);
  addErrorClass(elementsWithErrors);

  if (elementsWithErrors.length === 0) {
    e.currentTarget.submit();
    window.location.href = 'success-order.html';
  }
}
