const toggleAnswerBtnList = document.querySelectorAll('.toggle-question-btn');
const accordionsList = document.querySelectorAll('.accordion');

toggleAnswerBtnList.forEach(button => {
  button.addEventListener('click', e => {
    toggleAnswerBtnList.forEach(closeBtnIcon);
    if (e.target === button) {
      toggleBtnIcon(button);
    }
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
  plusIcon.style.display = 'block';
  minusIcon.style.display = 'none';
}

function toggleBtnIcon(btn) {
  const plusIcon = btn.querySelector('.icon--plus');
  const minusIcon = btn.querySelector('.icon--minus');
  plusIcon.style.display = plusIcon.style.display === 'none' ? 'block' : 'none';
  minusIcon.style.display =
    minusIcon.style.display === 'none' ? 'block' : 'none';
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
  toggleAccordion(accordion);
  toggleAnswerBtnList.forEach(closeBtnIcon);
  toggleBtnIcon(btn);
}
