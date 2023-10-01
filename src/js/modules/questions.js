const toggleAnswerBtnList = document.querySelectorAll('.toggle-question-btn');
const accordionsList = document.querySelectorAll('.accordion');

toggleAnswerBtnList.forEach(button => {
  button.addEventListener('click', e => {
    if (e.target === button) {
      toggleBtnIcon(button);
    }
    toggleAnswerBtnList.forEach(closeBtnIcon);
  });
});

accordionsList.forEach(accordion => {
  const intro = accordion.querySelector('.accordion__intro');
  intro.addEventListener('click', () => {
    handleAccordionClick(accordion);
  });
});

function closeBtnIcon(btn) {
  const plusIcon = btn.querySelector('.icon--plus');
  const minusIcon = btn.querySelector('.icon--minus');
  plusIcon.classList.remove('isHidden');
  minusIcon.classList.add('isHidden');
}

function toggleBtnIcon(btn) {
  const plusIcon = btn.querySelector('.icon--plus');
  console.log('plusIcon: ', plusIcon);
  const minusIcon = btn.querySelector('.icon--minus');
  console.log('minusIcon: ', minusIcon);
  plusIcon.classList.toggle('isHidden');
  minusIcon.classList.toggle('isHidden');
  console.log('ПІСЛЯ ТОГЛ plusIcon: ', plusIcon);
  console.log(' ПІСЛЯ ТОГЛ minusIcon: ', minusIcon);
}

function openAccordion(accordion) {
  const content = accordion.querySelector('.accordion__content');
  accordion.classList.add('accordion__active');
  content.style.maxHeight = content.scrollHeight + 'px';
}

function closeAccordion(accordion) {
  const content = accordion.querySelector('.accordion__content');
  accordion.classList.remove('accordion__active');
  content.style.maxHeight = null;
}

function toggleAccordion(accordion) {
  const content = accordion.querySelector('.accordion__content');

  if (content.style.maxHeight) {
    closeAccordion(accordion);
  } else {
    accordionsList.forEach(accordion => {
      closeAccordion(accordion);
    });
    openAccordion(accordion);
  }
}

function handleAccordionClick(accordion) {
  const btn = accordion.querySelector('.toggle-question-btn');
  console.log('btn : ', btn);
  toggleAnswerBtnList.forEach(closeBtnIcon);
  toggleAccordion(accordion);
  toggleBtnIcon(btn);
}
