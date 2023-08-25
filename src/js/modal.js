const refsSupport = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  backdrop: document.querySelector('.backdrop--support'),
};

refsSupport.openModalBtn.addEventListener('click', toggleSupportModal);
refsSupport.closeModalBtn.addEventListener('click', toggleSupportModal);
refsSupport.backdrop.addEventListener('click', toggleSupportModal);

function toggleSupportModal() {
  document.body.classList.toggle('modal-open');
  refsSupport.modal.classList.toggle('backdrop--hidden');
}
const refsSubscr = {
  openModalBtn: document.querySelector('[data-subscription-modal-open]'),
  closeModalBtn: document.querySelector('[data-subscription-modal-close]'),
  modal: document.querySelector('[data-subscription-modal]'),
  backdrop: document.querySelector('.backdrop--subscr'),
};

refsSubscr.openModalBtn.addEventListener('click', toggleSubscriptionModal);
refsSubscr.closeModalBtn.addEventListener('click', toggleSubscriptionModal);
refsSubscr.backdrop.addEventListener('click', toggleSubscriptionModal);

function toggleSubscriptionModal() {
  document.body.classList.toggle('modal-open');
  refsSubscr.modal.classList.toggle('backdrop--hidden');
}
