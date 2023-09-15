function initializeModal(refs) {
  refs.openModalBtn.addEventListener('click', () => toggleModal(refs));
  refs.closeModalBtn.addEventListener('click', e => {
    e.stopPropagation();
    toggleModal(refs);
  });
  refs.backdrop.addEventListener('click', e => {
    if (e.target === refs.backdrop) {
      toggleModal(refs);
    }
  });
}

function toggleModal(refs) {
  document.body.classList.toggle(`${refs.name}-modal-open`);
  refs.modal.classList.toggle('backdrop--hidden');
  if (refs.name === 'subscription') resetErrors(subscForm.elements);
}
