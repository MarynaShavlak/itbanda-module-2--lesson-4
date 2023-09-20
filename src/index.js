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

// (() => {
//   const asideMenu = document.querySelector('.aside-menu');
//   const openMenuBtn = document.querySelector('.open-menu-btn');
//   const closeMenuBtn = document.querySelector('.close-menu-btn');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     asideMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     asideMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();

// const subscForm = document.querySelector('.subscr__form');
// subscForm?.addEventListener('submit', onSubmitForm);
// function onSubmitForm(e) {
//   e.preventDefault();
//   const elements = e.currentTarget.elements;
//   const validationFields = [
//     'userName',
//     'userSurname',
//     'userTel',
//     'userEmail',
//     'userLocation',
//     'userDate',
//     'userTime',
//   ];

//   const elementsWithErrors = validateFields(elements, validationFields);
//   resetErrors(elements);
//   addErrorClass(elementsWithErrors);

//   if (elementsWithErrors.length === 0) {
//     e.currentTarget.submit();
//     window.location.href = 'success-order.html';
//   }
// }

// function validateFields(elements, fieldNames) {
//   const elementsWithErrors = [];
//   fieldNames.forEach(fieldName => {
//     const fieldValue = elements[fieldName].value;
//     if (fieldValue.length === 0) {
//       elementsWithErrors.push(elements[fieldName]);
//     }
//   });
//   return elementsWithErrors;
// }

// function resetErrors(elements) {
//   Array.from(elements).forEach(element => {
//     element.classList.remove('error');
//   });
// }

// function addErrorClass(elementsWithErrors) {
//   elementsWithErrors.forEach(element => {
//     element.classList.add('error');
//   });
// }

// const refsSubscr = {
//   name: 'subscription',
//   openModalBtn: document.querySelector('[data-subscription-modal-open]'),
//   closeModalBtn: document.querySelector('[data-subscription-modal-close]'),
//   modal: document.querySelector('[data-subscription-modal]'),
//   backdrop: document.querySelector('.backdrop--subscr'),
// };

// initializeModal(refsSubscr);

// function initializeModal(refs) {
//   refs.openModalBtn?.addEventListener('click', () => toggleModal(refs));
//   refs.closeModalBtn?.addEventListener('click', e => {
//     e.stopPropagation();
//     toggleModal(refs);
//   });
//   refs.backdrop?.addEventListener('click', e => {
//     if (e.target === refs.backdrop) {
//       toggleModal(refs);
//     }
//   });
// }

// function toggleModal(refs) {
//   document.body.classList.toggle(`${refs.name}-modal-open`);
//   refs.modal.classList.toggle('backdrop--hidden');
//   if (refs.name === 'subscription') resetErrors(subscForm.elements);
// }

// const refsSupport = {
//   name: 'support',
//   openModalBtn: document.querySelector('[data-support-modal-open]'),
//   closeModalBtn: document.querySelector('[data-support-modal-close]'),
//   modal: document.querySelector('[data-support-modal]'),
//   backdrop: document.querySelector('.backdrop--support'),
// };

// initializeModal(refsSupport);

const selectedTimeObj = { hours: '20', minutes: '00' };
const clockIcon = document.querySelector('.icon--clock');
const hourTablo = document.querySelector('.tablo--hours');
const minuteTablo = document.querySelector('.tablo--minutes');
const hourPicker = document.querySelector('.time-picker__hours');
const minutePicker = document.querySelector('.time-picker__minutes');
const timePickerBtn = document.querySelector('.time-picker__btn');
const timeInput = document.querySelector('[name="userTime"]');
timeInput.addEventListener('focus', toggleTimePickerVisibility);

hourTablo.addEventListener('click', e =>
  onTimeCellClick(e, '.time-picker__hours')
);
minuteTablo.addEventListener('click', e =>
  onTimeCellClick(e, '.time-picker__minutes')
);
minutePicker.addEventListener('click', () =>
  toggleTablo(minuteTablo, hourTablo)
);
hourPicker.addEventListener('click', () => toggleTablo(hourTablo, minuteTablo));

function onTimeCellClick(e, blockSelector) {
  const clickedElement = e.target;
  if (!validateClickedNumber(clickedElement)) return;
  const partTimeName = getTimePartName(blockSelector);
  const elements = document.querySelectorAll(`.${partTimeName}`);
  updateTimePickerTablo(clickedElement, elements);
  const block = document.querySelector(blockSelector);
  const value = clickedElement.dataset.id;
  updateTimePickerBlock(block, value);
  updateTimeInput(blockSelector, value);
}

function validateClickedNumber(clickedElement) {
  return (
    clickedElement.classList.contains('number') &&
    !clickedElement.classList.contains('active')
  );
}

function updateTimePickerTablo(clickedElement, elements) {
  [...elements].map(element =>
    element === clickedElement
      ? selectElement(element)
      : deselectElement(element)
  );
}

function selectElement(element) {
  element.classList.add('active');
}

function deselectElement(element) {
  element.classList.remove('active');
}

function updateTimePickerBlock(block, value) {
  block.innerHTML = value;
}

function toggleTablo(tabloToShow, tabloToHide) {
  const isVisible = !tabloToShow.classList.contains('isHidden');
  if (isVisible) return;
  tabloToShow.classList.remove('isHidden');
  tabloToHide.classList.add('isHidden');
}

clockIcon.addEventListener('click', e => {
  toggleTimePickerVisibility();
  toggleIconActiveStyle(e.target);
});

timePickerBtn.addEventListener('click', () => {
  toggleTimePickerVisibility();
});

function toggleTimePickerVisibility() {
  const timePickerElement = document.querySelector('.time-picker-wrap');
  timePickerElement.classList.toggle('isHidden');
}

function updateTimeInput(selector, value) {
  const partTime = getTimePartName(selector);
  selectedTimeObj[partTime] = value;
  timeInput.value = `${selectedTimeObj.hours} : ${selectedTimeObj.minutes}`;
}

function getTimePartName(selector) {
  return selector.split('__')[1];
}

const toggleAnswerBtnList = document.querySelectorAll('.toggle-question-btn');

toggleAnswerBtnList.forEach(button => {
  button.addEventListener('click', () => {
    onToggleAnswerBtnClick(button);
  });
});

function onToggleAnswerBtnClick(btn) {
  const parentListItem = btn.closest('.questions__item');
  const questionTextList = parentListItem.querySelectorAll('.questions__text');
  questionTextList.forEach(questionText => {
    toggleAnswerToQuestion(questionText);
  });
  toggleBtnIcon(btn);
}

function toggleAnswerToQuestion(el) {
  const computedStyles = window.getComputedStyle(el);
  const isHidden = computedStyles.display === 'none';
  el.style.display = isHidden ? 'block' : 'none';
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

const calendarIcon = document.querySelector('.icon--calendar');
const calendarBody = document.querySelector('.calendar__body');
const calendarHeadMonthAndYear = document.querySelector('.calendar__monthYear');
const prevMonthBtn = document.querySelector('.calendar__prevMonth-btn');
const nextMonthBtn = document.querySelector('.calendar__nextMonth-btn');
const dateInput = document.querySelector('[name="userDate"]');
dateInput.addEventListener('focus', toggleCalendarVisibility);

let currentDateObj = new Date();

function toggleIconActiveStyle(icon) {
  icon.classList.toggle('isActive');
}

function calculateStartDay(firstDayOfMonth) {
  let initialNumberOfWeekDay = firstDayOfMonth.getDay();
  if (initialNumberOfWeekDay === 0) {
    initialNumberOfWeekDay = 7;
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

calendarIcon.addEventListener('click', e => {
  toggleCalendarVisibility();
  toggleIconActiveStyle(e.target);
});

function toggleCalendarVisibility() {
  const calendarElement = document.querySelector('.calendar');
  calendarElement.classList.toggle('isHidden');
}

generateCalendar();
