const toggleAnswerBtnList = document.querySelectorAll('.toggle-question-btn');
const accordionsList = document.querySelectorAll('.accordion');

toggleAnswerBtnList.forEach(button => {
  button.addEventListener('click', () => {
    onToggleAnswerBtnClick(button);
  });
});

function onToggleAnswerBtnClick(btn) {
  console.log('btn: ', btn);
  const accordion = btn.closest('.questions__item');
  toggleBtnIcon(btn);
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
    const btn = accordion.querySelector('.toggle-question-btn');
    closeAccordion(accordion);
  } else {
    accordionsList.forEach(accordion => {
      const btn = accordion.querySelector('.toggle-question-btn');
      closeAccordion(accordion);
    });
    openAccordion(accordion);
  }
}

accordionsList.forEach(accordion => {
  const intro = accordion.querySelector('.accordion__intro');
  intro.addEventListener('click', () => {
    const btn = accordion.querySelector('.toggle-question-btn');
    toggleAccordion(accordion);
    toggleBtnIcon(btn);
  });
});
