const allowedPages = [
  '/',
  '/index.html',
  '/office.html',
  '/success-order.html',
  '/after-repair.html',
  '/calc-order.html',
  '/services.html',
  '/contacts.html',
  '/faq.html',
];

document.addEventListener('DOMContentLoaded', function () {
  console.log('download');
  const currentPage = window.location.pathname;
  const isAllowedPage = allowedPages.includes(currentPage);
  if (!isAllowedPage && currentPage !== '/error.html') {
    if (!allowedPages.includes('/error.html')) {
      window.location.href = '/error.html';
    }
  }

  if (currentPage === '/' || currentPage === '/index.html') {
    setCurrentNavLink('.nav__link');
    updateDynamicLinks('index.html#order-cleaning-block');
  } else if (currentPage === '/office.html') {
    setCurrentNavLink('.nav__list .nav__item:nth-child(2) .nav__link');
    updateDynamicLinks('office.html#office-calc-block');
  } else if (currentPage === '/after-repair.html') {
    hideSelectedItems('.add-services-list__item:nth-child(n+3)');
  } else if (currentPage === '/calc-order.html') {
    addWhiteBackground('.block');
  } else if (currentPage === '/contacts.html') {
    modifyContactPage();
    modifyMainSection();
  } else if (
    currentPage === '/success-order.html' ||
    currentPage === '/error.html'
  ) {
    modifyMainSection();
  }
});

function updateDynamicLinks(href) {
  const dynamicLinkList = document.querySelectorAll('.dynamic-link');
  [...dynamicLinkList].forEach(link => (link.href = href));
}

function hideSelectedItems(selector) {
  const items = document.querySelectorAll(selector);
  items.forEach(item => item.classList.add('isHidden'));
}

function addWhiteBackground(selector) {
  const items = document.querySelectorAll(selector);
  items.forEach(item => item.classList.add('block--white'));
}

function setCurrentNavLink(selector) {
  const currentNavLink = document.querySelector(selector);
  if (currentNavLink) {
    currentNavLink.classList.add('nav__link--current');
  }
}

function modifyContactPage() {
  const connectionSection = document.querySelector('.connection');
  connectionSection.classList.remove('no-padding-top');
  const supportBlock = document.querySelector('.connection--second-block');
  supportBlock.classList.add('block-with-image');
}

function modifyMainSection() {
  const main = document.querySelector('main');
  main.classList.add('section--dark-background');
}

export function toggleIconActiveStyle(icon) {
  icon.classList.toggle('isActive');
}
