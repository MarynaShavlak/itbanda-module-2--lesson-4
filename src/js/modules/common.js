import { resetLocalStorage } from './local-storage';
import { setTheme, THEMES, applyTheme } from './theme-toggler';
import { getThemeTogglerElements } from './get-elements';

document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname;
  const bodyEl = document.querySelector('body');
  const { themeToggler } = getThemeTogglerElements();

  themeToggler.addEventListener('click', () => {
    setTheme(
      bodyEl.classList.contains('active-dark-theme')
        ? THEMES.LIGHT
        : THEMES.DARK
    );
  });
  applyTheme();

  if (currentPage === '/cleaning/' || currentPage === '/cleaning/index.html') {
    setCurrentNavLink('.nav__link');
    updateDynamicLinks('index.html#order-cleaning-block');
  } else if (currentPage === '/cleaning/office.html') {
    setCurrentNavLink('.nav__list .nav__item:nth-child(2) .nav__link');
    updateDynamicLinks('office.html#office-calc-block');
    setBuildingsFlexBasis('.buildings__element', 'calc(100% / 3)');
    setOfficeBuildingsToggleMenu();
  } else if (currentPage === '/cleaning/after-repair.html') {
    hideBuildingsToggleMenu();
    hideSelectedItems('.add-services-list__item:nth-child(n+3)');
    updateDynamicLinks('after-repair.html#office-calc-block');
  } else if (currentPage === '/cleaning/calc-order.html') {
    setBuildingsFlexBasis('.buildings__element', 'calc(100% / 2)');
    addWhiteBackground('.block');
    setCalculatorBuildingsToggleMenu();
  } else if (currentPage === '/cleaning/contacts.html') {
    modifyContactPage();
    modifyMainSection();
  } else if (
    currentPage === '/cleaning/success-order.html' ||
    currentPage === '/cleaning/404.html'
  ) {
    modifyMainSection();
    window.addEventListener('beforeunload', function () {
      resetLocalStorage('userOrderDataObj');
    });
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

function hideBuildingsToggleMenu() {
  const title = document.querySelector('.data-order .data-order__title');
  const toggleMenu = document.querySelector('.buildings');
  toggleMenu.style.display = 'none';
  title.style.display = 'none';
}

function setOfficeBuildingsToggleMenu() {
  const buildingsElements = document.querySelectorAll('.element--office-page');
  buildingsElements.forEach(item => item.classList.remove('isHidden'));
  const calculatorBuilding = document.querySelector(
    '.element--calculator-page'
  );
  calculatorBuilding.classList.add('isHidden');
}
function setCalculatorBuildingsToggleMenu() {
  const buildingsElements = document.querySelectorAll('.element--office-page');
  buildingsElements.forEach(item => item.classList.add('isHidden'));
  const calculatorBuilding = document.querySelector(
    '.element--calculator-page'
  );
  calculatorBuilding.classList.remove('isHidden');
}

function setBuildingsFlexBasis(selector, value) {
  const buildingsElements = document.querySelectorAll(selector);
  buildingsElements.forEach(item => (item.style.flexBasis = value));
}

export function appendElement(parent, child) {
  parent.appendChild(child);
}

export function getClosestIcon(element, iconClassName) {
  return element.parentElement.previousElementSibling.querySelector(
    `.${iconClassName}`
  );
}

export function toggleElementVisibility(el) {
  el.classList.toggle('isHidden');
}

export function handleInputBlur(inputElement, extractFunction) {
  inputElement.addEventListener('blur', e => {
    const trimmedValue = extractFunction(e.target.value);
    inputElement.value = trimmedValue;
  });
}

export function setShedulerVisibilityOptions(pickEl, sheduleEl, icon) {
  toggleElementVisibility(pickEl);
  toggleElementVisibility(sheduleEl);
  toggleIconActiveStyle(icon);
}

export function toggleClosestVisibility(wrap, blockClassName, iconClassName) {
  const sheduleInfoBlock = wrap.querySelector('.work-shedule');
  const blockElement = wrap.querySelector(`.${blockClassName}`);

  if (!sheduleInfoBlock.classList.contains('isHidden')) {
    toggleElementVisibility(sheduleInfoBlock);
    toggleElementVisibility(blockElement);
    const icon = getClosestIcon(blockElement, iconClassName);
    toggleIconActiveStyle(icon);
  }
}
