export const subscForm = document.querySelector('.subscr__form');
subscForm.addEventListener('submit', onSubmitForm);

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

// const toggleAnswerBtnList = document.querySelectorAll('.toggle-question-btn');

// toggleAnswerBtnList.forEach(button => {
//   button.addEventListener('click', () => {
//     onToggleAnswerBtnClick(button);
//   });
// });

// function onToggleAnswerBtnClick(btn) {
//   const parentListItem = btn.closest('.questions__item');
//   const questionTextList = parentListItem.querySelectorAll('.questions__text');
//   questionTextList.forEach(questionText => {
//     toggleAnswerToQuestion(questionText);
//   });
//   toggleBtnIcon(btn);
// }

// function toggleAnswerToQuestion(el) {
//   const computedStyles = window.getComputedStyle(el);
//   const isHidden = computedStyles.display === 'none';
//   el.style.display = isHidden ? 'block' : 'none';
// }

// function toggleBtnIcon(btn) {
//   const plusIcon = btn.querySelector('.icon--plus');
//   const minusIcon = btn.querySelector('.icon--minus');
//   if (plusIcon.style.display === 'none') {
//     plusIcon.style.display = 'block';
//     minusIcon.style.display = 'none';
//   } else {
//     plusIcon.style.display = 'none';
//     minusIcon.style.display = 'block';
//   }
// }
