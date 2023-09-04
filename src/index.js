document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname;
  if (currentPage === '/' || currentPage === '/index.html') {
    document.querySelector('.nav ').classList.add('nav__link--current');
  }
});
