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
