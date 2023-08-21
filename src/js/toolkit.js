const toolkitsList = document.querySelectorAll('.plus-btn--toolkit');
toolkitsList.forEach(el => {
  el.addEventListener('mouseenter', () => {
    toggleToolkitDescVisibility(el);
  });
  el.addEventListener('mouseleave', () => {
    toggleToolkitDescVisibility(el);
  });
});

function toggleToolkitDescVisibility(el) {
  const parentItem = el.closest('.toolkit__wrapper');
  const descItem = parentItem.querySelector(':first-child');
  descItem.classList.toggle('is-shown');
}
