document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname;
  const dynamicLinkList = document.querySelectorAll('.dynamic-link');
  if (currentPage === '/' || currentPage === '/index.html') {
    document.querySelector('.nav__link ').classList.add('nav__link--current');
    [...dynamicLinkList].forEach(
      link => (link.href = 'index.html#order-cleaning-block')
    );
  } else if (currentPage === '/office.html') {
    document
      .querySelector('.nav__list .nav__item:nth-child(2) .nav__link')
      .classList.add('nav__link--current');
    [...dynamicLinkList].forEach(
      link => (link.href = 'office.html#office-calc-block')
    );
  }
});
