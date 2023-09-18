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

(() => {
  const asideMenu = document.querySelector('.aside-menu');
  const openMenuBtn = document.querySelector('.open-menu-btn');
  const closeMenuBtn = document.querySelector('.close-menu-btn');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    asideMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    asideMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

const calendarIcon = document.querySelector('.icon--calendar');
const calendarBody = document.querySelector('.calendar__body');
const calendarHeadMonthAndYear = document.querySelector('.calendar__monthYear');
const prevMonthBtn = document.querySelector('.calendar__prevMonth-btn');
const nextMonthBtn = document.querySelector('.calendar__nextMonth-btn');

let currentDateObj = new Date();

function calculateStartDay(firstDayOfMonth) {
  let initialNumberOfWeekDay = firstDayOfMonth.getDay();
  if (initialNumberOfWeekDay === 0) {
    initialNumberOfWeekDay = 7; // Make Sunday (0) the last day of the week
  }
  return initialNumberOfWeekDay;
}

function getLastDayOfPrevMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function getCurrentYearAndMonth(currentDateObj) {
  const year = currentDateObj.getFullYear();
  const month = currentDateObj.getMonth();
  return { month, year };
}

function getMonthBoundaryDates(year, month) {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonthObj = new Date(year, month + 1, 0);
  return { firstDayOfMonth, lastDayOfMonthObj };
}

function formatDateInfo(day, month, year) {
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month === 0 ? 12 : month;
  const formattedYear = month === 0 ? year - 1 : year;

  return {
    formattedDay,
    formattedMonth,
    formattedYear,
  };
}

function setCellText(cell, day) {
  cell.textContent = day;
}
function setCellAttributes(cell, day, month, year) {
  cell.dataset.date = `${day}/${month < 9 ? '0' : ''}${month + 1}/${year}`;
}

function addCellClasses(cell, isDisabledDate, monthType, isToday) {
  cell.classList.add(monthType);
  if (isDisabledDate) {
    cell.classList.add('disabled-day');
  }
  if (monthType === 'current-month' && isToday) {
    cell.classList.add('current-day');
  }
}

function addCellClickEvent(cell, isDisabledDate) {
  if (!isDisabledDate) {
    cell.addEventListener('click', handleCellClick);
  }
}

function createCellEl(fd, fm, y, isDisabledDate, monthType) {
  const cell = document.createElement('td');
  setCellText(cell, fd);
  setCellAttributes(cell, fd, fm, y);
  addCellClasses(cell, isDisabledDate, monthType);
  addCellClickEvent(cell, isDisabledDate);

  return cell;
}

function createPreviousMonthCell(day) {
  const { year, month } = getCurrentYearAndMonth(currentDateObj);
  const { formattedDay, formattedMonth, formattedYear } = formatDateInfo(
    day,
    month,
    year
  );
  const todayObj = new Date();
  const isDisabledDate = isDateBeforeToday(
    new Date(formattedYear, formattedMonth - 1, day),
    todayObj
  );
  const cell = createCellEl(
    formattedDay,
    formattedMonth - 1,
    formattedYear,
    isDisabledDate,
    'previous-month'
  );
  return cell;
}

function createCurrentMonthCell(day) {
  const { formattedDay } = formatDateInfo(day);
  const { year, month } = getCurrentYearAndMonth(currentDateObj);
  const todayObj = new Date();
  const isDisabledDate = isDateBeforeToday(
    new Date(year, month, day),
    todayObj
  );

  const cell = createCellEl(
    formattedDay,
    month,
    year,
    isDisabledDate,
    'current-month'
  );
  const isToday =
    currentDateObj.getFullYear() === todayObj.getFullYear() &&
    currentDateObj.getMonth() === todayObj.getMonth() &&
    day === todayObj.getDate();
  addCellClasses(cell, isDisabledDate, 'current-month', isToday);
  return cell;
}

function createNextMonthCell(day) {
  const { year, month } = getCurrentYearAndMonth(currentDateObj);
  const { formattedDay } = formatDateInfo(day, month, year);
  const formattedMonth = month === 11 ? 1 : month + 2;
  const formattedYear = month === 11 ? year + 1 : year;
  const todayObj = new Date();
  const isDisabledDate = isDateBeforeToday(
    new Date(formattedYear, formattedMonth - 1, day),
    todayObj
  );
  const cell = createCellEl(
    formattedDay,
    formattedMonth - 1,
    formattedYear,
    isDisabledDate,
    'next-month'
  );
  return cell;
}

function setMonthAndYearName(year) {
  const monthName = currentDateObj.toLocaleDateString('uk-UA', {
    month: 'long',
  });
  const capitalizedMonth =
    monthName.charAt(0).toUpperCase() + monthName.slice(1);
  calendarHeadMonthAndYear.textContent = `${capitalizedMonth} ${year}`;
}
function createCalendarRow() {
  return document.createElement('tr');
}

function appendElement(parent, child) {
  parent.appendChild(child);
}

function generateCalendar() {
  const { year, month } = getCurrentYearAndMonth(currentDateObj);
  setMonthAndYearName(year);
  clearCalendarData();
  const { firstDayOfMonth, lastDayOfMonthObj } = getMonthBoundaryDates(
    year,
    month
  );
  const initialNumberOfWeekDay = calculateStartDay(firstDayOfMonth);
  const lastDayOfPrevMonth = getLastDayOfPrevMonth(year, month);

  let currentDayNumber = 1;
  let currentRow = createCalendarRow();

  for (let i = initialNumberOfWeekDay - 1; i >= 1; i--) {
    const day = lastDayOfPrevMonth - i + 1;
    const cell = createPreviousMonthCell(day);
    appendElement(currentRow, cell);
  }

  while (currentDayNumber <= lastDayOfMonthObj.getDate()) {
    const cell = createCurrentMonthCell(currentDayNumber);
    appendElement(currentRow, cell);
    const isWeekRowFull = currentRow.children.length === 7;
    if (isWeekRowFull) {
      appendElement(calendarBody, currentRow);
      currentRow = createCalendarRow();
    }
    currentDayNumber++;
  }
  const isAnyEmptyCell = currentRow.children.length > 0;
  if (isAnyEmptyCell) {
    for (let i = 1; currentRow.children.length < 7; i++) {
      const cell = createNextMonthCell(i);
      appendElement(currentRow, cell);
    }
    appendElement(calendarBody, currentRow);
  }
}

function isDateBeforeToday(date, todayObj) {
  return date < todayObj;
}

function convertDateFormat(dateString) {
  const parts = dateString.split('/');
  const [day, month, year] = parts;
  const newDateString = `${month}/${day}/${year}`;
  return newDateString;
}

function reverseConvertDateFormat(dateString) {
  const parts = dateString.split('/');
  const [month, day, year] = parts;
  const newDateString = `${day}/${month}/${year}`;
  return newDateString;
}

function handleCellClick(event) {
  const clickedDate = convertDateFormat(event.target.dataset.date);
  const currentDateObj = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const clickedDateObj = new Date(clickedDate);
  const currentDateObjObj = new Date(currentDateObj);
  const differenceInMilliseconds = clickedDateObj - currentDateObjObj;

  if (differenceInMilliseconds >= 0) {
    const chosenDate = reverseConvertDateFormat(clickedDate);
    console.log('chosenDate : ', chosenDate);
    dateInput.value = `${chosenDate}`;
    toggleCalendarVisibility();
  }
}

function clearCalendarData() {
  calendarBody.innerHTML = '';
}

function updateCalendar(monthOffset) {
  currentDateObj.setMonth(currentDateObj.getMonth() + monthOffset);
  generateCalendar();
}

prevMonthBtn?.addEventListener('click', () => {
  updateCalendar(-1);
});

nextMonthBtn?.addEventListener('click', () => {
  updateCalendar(1);
});

calendarIcon.addEventListener('click', () => {
  toggleCalendarVisibility();
});

function toggleCalendarVisibility() {
  const calendarElement = document.querySelector('.calendar');
  calendarElement.classList.toggle('isHidden');
}

generateCalendar();

const subscForm = document.querySelector('.subscr__form');
const dateInput = document.querySelector('[name="userDate"]');
dateInput.addEventListener('focus', toggleCalendarVisibility);
subscForm?.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const elements = e.currentTarget.elements;
  const validationFields = [
    'modalUserName',
    'modalUserSurname',
    'modalUserTel',
    'modalUserEmail',
    'modalUserLocation',
    'modalUserDate',
    'modalUserTime',
  ];

  const elementsWithErrors = validateFields(elements, validationFields);
  resetErrors(elements);
  addErrorClass(elementsWithErrors);

  if (elementsWithErrors.length === 0) {
    e.currentTarget.submit();
    window.location.href = 'success-order.html';
  }
}

function validateFields(elements, fieldNames) {
  const elementsWithErrors = [];
  fieldNames.forEach(fieldName => {
    const fieldValue = elements[fieldName].value;
    if (fieldValue.length === 0) {
      elementsWithErrors.push(elements[fieldName]);
    }
  });
  return elementsWithErrors;
}

function resetErrors(elements) {
  Array.from(elements).forEach(element => {
    element.classList.remove('error');
  });
}

function addErrorClass(elementsWithErrors) {
  elementsWithErrors.forEach(element => {
    element.classList.add('error');
  });
}

const buildingsBtnList = document.querySelectorAll('.buildings__element');
const increaseSquareBtn = document.querySelector('.control-quantity-btn--plus');
const decreaseSquareBtn = document.querySelector(
  '.control-quantity-btn--minus'
);

const squareValueElementsList = document.querySelectorAll('.square-value');
const serviceCheckboxList = document.querySelectorAll(
  '.service-element .checkbox'
);
const totalCostTableElement = document.querySelector('.table__data');
const takeKeysBtn = document.querySelector('#take-keys-btn');
const giveKeysBtn = document.querySelector('#give-keys-btn');
const keysAddressBlock = document.querySelector('.keys-address-block');
const addressTakeBlock = document.querySelector(
  '.keys-address-block__take-item'
);
const addressGiveBlock = document.querySelector(
  '.keys-address-block__give-item'
);

increaseSquareBtn?.addEventListener('click', handleSquareQuantityChange);
decreaseSquareBtn?.addEventListener('click', handleSquareQuantityChange);
takeKeysBtn?.addEventListener('click', handleKeyBtn);
giveKeysBtn?.addEventListener('click', handleKeyBtn);
buildingsBtnList?.forEach(el => {
  el.addEventListener('click', e => {
    onBuldingTypeBtnClick(e);
  });
});

serviceCheckboxList.forEach(el => {
  el.addEventListener('change', e => {
    toggleServiceItem(e);
  });
});

const serviceInfo = {
  square: { quantity: 1, price: 2 },
  windowsStandard: { quantity: 1, price: 35 },
  windowsLarge: { quantity: 1, price: 40 },
  microWave: { quantity: 1, price: 15 },
  refrigerator: { quantity: 1, price: 40 },
  plate: { quantity: 1, price: 35 },
  officeChair: { quantity: 1, price: 20 },
  sofaDry2x: { quantity: 1, price: 109.99 },
  sofaDry3x: { quantity: 1, price: 129.99 },
  sofaDry4x: { quantity: 1, price: 149.99 },
};

const userOrderInfo = {
  square: { quantity: 1, price: 2 },
  windowsStandard: { quantity: 0, price: 35 },
  windowsLarge: { quantity: 0, price: 40 },
  microWave: { quantity: 0, price: 15 },
  refrigerator: { quantity: 0, price: 40 },
  plate: { quantity: 0, price: 35 },
  officeChair: { quantity: 0, price: 20 },
  sofaDry2x: { quantity: 0, price: 109.99 },
  sofaDry3x: { quantity: 0, price: 129.99 },
  sofaDry4x: { quantity: 0, price: 149.99 },
};

function updateServiceItemInterface(serviceName) {
  const servicesElementsList = document.querySelectorAll('.service-element');
  const label = [...servicesElementsList].find(
    el => el.getAttribute('data-id') === serviceName
  );
  const itemQntEl = label?.nextElementSibling.querySelector(
    `[data-name="${serviceName}"]`
  );
  const squareEl = document
    .querySelector('.wrap--square')
    .querySelector(`[data-name="${serviceName}"]`);
  if (itemQntEl) {
    itemQntEl.textContent = serviceInfo[serviceName].quantity;
  }
  if (squareEl) {
    squareEl.textContent = serviceInfo[serviceName].quantity;
    const squareInTotal = document.querySelector('.square-value-total');
    squareInTotal.textContent = serviceInfo[serviceName].quantity;
  }
}

function updateQuantityData(itemName, operation) {
  if (operation === 'plus') {
    serviceInfo[itemName].quantity += 1;
  } else if (operation === 'minus') {
    if (serviceInfo[itemName].quantity === 1) return;
    serviceInfo[itemName].quantity -= 1;
  }
}

function changeOrderItemQuantity(e) {
  const serviceName = getChosenServiceName(e);
  const operationType = getClickedBtnType(e);
  updateQuantityData(serviceName, operationType);
  updateServiceItemInterface(serviceName);
  updateMinusBtnStyle(serviceName);
}

function handleServiceQuantityChange(e) {
  const serviceName = getChosenServiceName(e);
  changeOrderItemQuantity(e);
  updateTotalCostForService(serviceName);
  calculateTotalOrderCost();
}

function handleSquareQuantityChange(e) {
  changeOrderItemQuantity(e);
  updateSquareTotalCost();
  calculateTotalOrderCost();
}

function updateTotalCostForService(serviceName) {
  const orderServiceTotalCost = document.querySelector(
    `[data-service="${serviceName}"]`
  );
  const orderServiceTotalQuantity = document.querySelector(
    `#${serviceName} .service-quantity`
  );

  const price = serviceInfo[serviceName].price;
  if (orderServiceTotalCost && orderServiceTotalQuantity) {
    const updatedQuantity = updateServiceQuantity(serviceName);
    orderServiceTotalCost.textContent = `${updatedQuantity * price}zł`;
    orderServiceTotalQuantity.textContent = updatedQuantity;
  } else {
    updateServiceQuantity(serviceName, 0);
  }
}

function updateSquareTotalCost() {
  const totalSquareCostEl = document.querySelector(`[data-service="square"]`);
  userOrderInfo.square.quantity = serviceInfo.square.quantity;
  totalSquareCostEl.textContent = `${
    userOrderInfo.square.quantity * userOrderInfo.square.price
  }zł`;
}

function toggleServiceItem(e) {
  const el = e.currentTarget;
  const label = el.closest('label');
  const controlQuantityBlock = label.nextElementSibling;
  const isServiceChosen = el.checked;
  toggleControlQuantityBlock(controlQuantityBlock, isServiceChosen);
  attachQuantityButtonListeners(controlQuantityBlock);
  const serviceItem = createServiceItem(label);
  const serviceName = label.getAttribute('data-id');
  updateTotalServicesTable(isServiceChosen, serviceItem);
  updateTotalCostForService(serviceName);
  calculateTotalOrderCost();
}

function toggleControlQuantityBlock(controlQuantityBlock, isVisible) {
  controlQuantityBlock.classList.toggle('isHidden', !isVisible);
}

function attachQuantityButtonListeners(controlQuantityBlock) {
  const increaseQuantityBtn = controlQuantityBlock.querySelector(
    '.control-quantity-btn--plus'
  );
  const decreaseQuantityBtn = controlQuantityBlock.querySelector(
    '.control-quantity-btn--minus'
  );

  increaseQuantityBtn.addEventListener('click', handleServiceQuantityChange);
  decreaseQuantityBtn.addEventListener('click', handleServiceQuantityChange);
}

function updateTotalServicesTable(isServiceChosen, item) {
  const serviceName = item.id;
  const serviceInTable = findServiceInTable(serviceName);
  if (isServiceChosen && !serviceInTable) {
    addToTotalCostTable(item);
    updateServiceQuantity(serviceName);
  } else if (!isServiceChosen && serviceInTable) {
    updateServiceQuantity(serviceName, 0);
    removeFromTotalCostTable(serviceInTable);
  }
}

function updateServiceQuantity(serviceName, quantity) {
  const updatedQuantity =
    quantity !== undefined ? quantity : serviceInfo[serviceName].quantity;
  userOrderInfo[serviceName].quantity = updatedQuantity;
  return updatedQuantity;
}

function calculateTotalOrderCost() {
  const totalOrderCost = Object.keys(userOrderInfo).reduce(
    (acc, propertyName) => {
      const property = userOrderInfo[propertyName];
      return acc + property.quantity * property.price;
    },
    0
  );
  const totalOrderCostEl = document.querySelector('.total-order-value');
  totalOrderCostEl.textContent = `${totalOrderCost}zł`;
}

function createSpan(className, textContent) {
  const span = document.createElement('span');
  span.className = className;
  span.textContent = textContent;
  return span;
}

function createServiceItem(element) {
  const serviceName = element.querySelector(
    '.service-element__text'
  ).textContent;
  const servicePrice = element
    .querySelector('.service-element__accent')
    .getAttribute('data-value');
  const serviceID = element.getAttribute('data-id');
  const listItem = document.createElement('li');
  listItem.id = serviceID;
  listItem.className = 'table__item table__block';
  const nameSpan = createSpan('item__name', `${serviceName}`);
  const spaceTextNode = document.createTextNode('\u00A0 x');
  const quantitySpan = createSpan(
    'item__quantity service-quantity',
    serviceInfo[serviceID].quantity
  );

  quantitySpan.textContent = serviceInfo[serviceID].quantity;
  appendChildNodes(nameSpan, [spaceTextNode, quantitySpan]);
  const valueSpan = createSpan('service-value', `${servicePrice}zł`);
  valueSpan.setAttribute('data-service', serviceID);
  appendChildNodes(listItem, [nameSpan, valueSpan]);
  return listItem;
}

function appendChildNodes(parent, children) {
  children.forEach(child => {
    parent.appendChild(child);
  });
}

function getClickedBtnType(e) {
  const type = e.currentTarget.getAttribute('data-type');
  return type;
}

function getChosenServiceName(e) {
  const chosenServiceName = e.currentTarget
    ?.closest('.wrap--service')
    ?.parentNode.querySelector('label')
    ?.getAttribute('data-id');

  const squareEl = e.currentTarget
    ?.closest('.wrap--square')
    ?.getAttribute('data-id');
  return chosenServiceName || squareEl;
}

function findServiceInTable(serviceName) {
  const tableElementsList = totalCostTableElement.querySelectorAll('li');
  return [...tableElementsList].find(el => el.id === serviceName);
}

function addToTotalCostTable(item) {
  totalCostTableElement.insertAdjacentElement('beforeend', item);
}

function removeFromTotalCostTable(item) {
  totalCostTableElement.removeChild(item);
}

function onBuldingTypeBtnClick(e) {
  const clickedButton = e.target;
  if (clickedButton.classList.contains('buildings__element--current')) return;
  buildingsBtnList.forEach(button => {
    if (button === clickedButton) {
      const id = button.id;
      button.classList.add('buildings__element--current');
    } else {
      button.classList.remove('buildings__element--current');
    }
  });
}

function updateMinusBtnStyle(serviceName) {
  const decreaseSquareIcon = document
    .querySelector(`[data-name="${serviceName}"]`)
    .parentNode?.parentNode?.querySelector(
      '.control-quantity-btn--minus .icon--minus'
    );
  if (serviceInfo[serviceName].quantity === 1) {
    decreaseSquareIcon.style.fill = 'rgba(	77, 18, 153, 0.3)';
  } else {
    decreaseSquareIcon.style.fill = '#4D1299';
  }
}

function handleKeyBtn(e) {
  const btn = e.currentTarget;
  btn.classList.toggle('active');
  const addressType = btn.id;
  toggleAddressItem(addressType);
  toggleKeysAddressBlock();
}

function toggleAddressItem(addressType) {
  if (addressType === 'take-keys-btn') {
    addressTakeBlock.classList.toggle('isHidden');
  } else {
    addressGiveBlock.classList.toggle('isHidden');
  }
}

function toggleKeysAddressBlock() {
  const isAddressTakeBlockHidden =
    addressTakeBlock.classList.contains('isHidden');
  const isAddressGiveBlockHidden =
    addressGiveBlock.classList.contains('isHidden');

  if (isAddressTakeBlockHidden && isAddressGiveBlockHidden) {
    keysAddressBlock.classList.add('isHidden');
  } else {
    keysAddressBlock.classList.remove('isHidden');
  }
}

const refsSubscr = {
  name: 'subscription',
  openModalBtn: document.querySelector('[data-subscription-modal-open]'),
  closeModalBtn: document.querySelector('[data-subscription-modal-close]'),
  modal: document.querySelector('[data-subscription-modal]'),
  backdrop: document.querySelector('.backdrop--subscr'),
};

initializeModal(refsSubscr);

function initializeModal(refs) {
  refs.openModalBtn?.addEventListener('click', () => toggleModal(refs));
  refs.closeModalBtn?.addEventListener('click', e => {
    e.stopPropagation();
    toggleModal(refs);
  });
  refs.backdrop?.addEventListener('click', e => {
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

const refsSupport = {
  name: 'support',
  openModalBtn: document.querySelector('[data-support-modal-open]'),
  closeModalBtn: document.querySelector('[data-support-modal-close]'),
  modal: document.querySelector('[data-support-modal]'),
  backdrop: document.querySelector('.backdrop--support'),
};

initializeModal(refsSupport);

const timePickerElement = document.querySelector('#timepicker');
const clockIcon = document.querySelector('.icon--clock');
clockIcon.addEventListener('click', () => {
  timePickerElement.focus();
});
