const toggleAnswerBtnList = document.querySelectorAll('.toggle-question-btn');

toggleAnswerBtnList.forEach(button => {
  button.addEventListener('click', () => {
    onToggleAnswerBtnClick(button);
  });
});

function onToggleAnswerBtnClick(btn) {
  const parentListItem = btn.closest('.questions__item');
  const questionTextList = parentListItem.querySelectorAll('.questions__text');
  console.log('questionTextList: ', questionTextList);
  questionTextList.forEach(questionText => {
    toggleAnswerToQuestion(questionText);
  });
  toggleBtnIcon(btn);
}

function toggleAnswerToQuestion(el) {
  const computedStyles = window.getComputedStyle(el);
  const isHidden = computedStyles.display === 'none';
  el.style.display = isHidden ? 'block' : 'none';
}

function toggleBtnIcon(btn) {
  const plusIcon = btn.querySelector('.icon--plus');
  const minusIcon = btn.querySelector('.icon--minus');
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
}
