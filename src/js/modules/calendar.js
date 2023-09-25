import { toggleIconActiveStyle, appendElement } from './common';
import {
  getCurrentDateAsString,
  extractDate,
  isDateBeforeToday,
  convertDateFormat,
  reverseConvertDateFormat,
  calculateStartDay,
  getLastDayOfPrevMonth,
  getCurrentYearAndMonth,
  getMonthBoundaryDates,
  formatDateInfo,
} from './dates';
const calendarBlock = document.querySelector('.calendar');
const calendarBody = calendarBlock.querySelector('.calendar__body');
const calendarHeadMonthAndYear = calendarBlock.querySelector(
  '.calendar__monthYear'
);
const prevMonthBtn = calendarBlock.querySelector('.calendar__prevMonth-btn');
const nextMonthBtn = calendarBlock.querySelector('.calendar__nextMonth-btn');
const dateInput =
  calendarBlock.previousElementSibling.querySelector('[name="userDate"]');
const calendarIcon =
  calendarBlock.previousElementSibling.querySelector('.icon--calendar');

let selectedDateObj = new Date();
let monthToShowInCalendarObj = new Date();
let orderDayString = getCurrentDateAsString();

dateInput.addEventListener('click', () => {
  toggleCalendarVisibility();
  toggleIconActiveStyle(calendarIcon);
  monthToShowInCalendarObj = new Date(selectedDateObj);
  const isCalendarVisible = !calendarBlock.classList.contains('isHidden');
  generateCalendar(selectedDateObj);
  if (isCalendarVisible) {
    setDateInputValue();
  }
});

dateInput.addEventListener('blur', e => {
  const trimmedValue = extractDate(e.target.value);
  dateInput.value = trimmedValue;
});

calendarIcon.addEventListener('click', e => {
  toggleCalendarVisibility();
  monthToShowInCalendarObj = new Date(selectedDateObj);
  generateCalendar(selectedDateObj);
  toggleIconActiveStyle(e.target);
  const isCalendarVisible = !calendarBlock.classList.contains('isHidden');
  if (isCalendarVisible) {
    setDateInputValue();
  }
});

prevMonthBtn?.addEventListener('click', () => {
  updateCalendar(-1);
});

nextMonthBtn?.addEventListener('click', () => {
  updateCalendar(1);
});

function setCellText(cell, day) {
  cell.textContent = day;
}
function setCellAttributes(cell, day, month, year) {
  cell.dataset.date = `${day}/${month < 9 ? '0' : ''}${month + 1}/${year}`;
}

// function addCellClasses(cell, isDisabledDate, monthType, isToday) {
//   cell.classList.add(monthType);
//   if (isDisabledDate) {
//     cell.classList.add('disabled-day');
//   }
//   if (monthType === 'current-month' && isToday) {
//     cell.classList.add('order-day');
//   }
// }

function addCellClickEvent(cell, isDisabledDate) {
  if (!isDisabledDate) {
    cell.addEventListener('click', handleCellClick);
  }
}

function createCellEl(fd, fm, y, isDisabledDate, monthType, isCellSelectedDay) {
  const cell = document.createElement('td');
  setCellText(cell, fd);
  setCellAttributes(cell, fd, fm, y);
  // addCellClasses(cell, isDisabledDate, monthType);
  addCellClickEvent(cell, isDisabledDate);
  cell.classList.add(monthType);
  if (isDisabledDate) {
    cell.classList.add('disabled-day');
  }
  if (monthType === 'current-month' && isCellSelectedDay) {
    cell.classList.add('order-day');
  }

  return cell;
}

function createPreviousMonthCell(day) {
  const { year, month } = getCurrentYearAndMonth(monthToShowInCalendarObj);
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
  const { year, month } = getCurrentYearAndMonth(monthToShowInCalendarObj);
  const todayObj = new Date();
  const cellDateObj = new Date(year, month, day);
  const isDisabledDate = isDateBeforeToday(cellDateObj, todayObj);

  const isYearEquel =
    cellDateObj.getFullYear() === selectedDateObj.getFullYear();
  const isMonthEquel = cellDateObj.getMonth() === selectedDateObj.getMonth();
  const isDayEquel = day === selectedDateObj.getDate();
  const isCellSelectedDay = isYearEquel && isMonthEquel && isDayEquel;
  const cell = createCellEl(
    formattedDay,
    month,
    year,
    isDisabledDate,
    'current-month',
    isCellSelectedDay
  );
  // addCellClasses(cell, isDisabledDate, 'current-month', isCellSelectedDay);
  return cell;
}

function createNextMonthCell(day) {
  const { year, month } = getCurrentYearAndMonth(monthToShowInCalendarObj);
  const { formattedDay } = formatDateInfo(day, month, year);
  const formattedMonth = month === 11 ? 1 : month + 2;
  const formattedYear = month === 11 ? year + 1 : year;
  const todayObj = new Date();
  const cellDateObj = new Date(formattedYear, formattedMonth - 1, day);
  const isDisabledDate = isDateBeforeToday(cellDateObj, todayObj);

  const isCellSelectedDay =
    cellDateObj.getFullYear() === selectedDateObj.getFullYear() &&
    cellDateObj.getMonth() === selectedDateObj.getMonth() &&
    day === selectedDateObj.getDate();
  const cell = createCellEl(
    formattedDay,
    formattedMonth - 1,
    formattedYear,
    isDisabledDate,
    'next-month',
    isCellSelectedDay
  );
  // addCellClasses(cell, isDisabledDate, 'next-month', isCellSelectedDay);
  return cell;
}
// function addCellClasses(cell, isDisabledDate, monthType, isToday) {
//   cell.classList.add(monthType);
//   if (isDisabledDate) {
//     cell.classList.add('disabled-day');
//   }
//   if (monthType === 'current-month' && isToday) {
//     cell.classList.add('order-day');
//   }
// }

// function addCellClickEvent(cell, isDisabledDate) {
//   if (!isDisabledDate) {
//     cell.addEventListener('click', handleCellClick);
//   }
// }

// function createCellEl(fd, fm, y, isDisabledDate, monthType) {
//   const cell = document.createElement('td');
//   setCellText(cell, fd);
//   setCellAttributes(cell, fd, fm, y);
//   addCellClasses(cell, isDisabledDate, monthType);
//   addCellClickEvent(cell, isDisabledDate);

//   return cell;
// }

// function createPreviousMonthCell(day) {
//   const { year, month } = getCurrentYearAndMonth(monthToShowInCalendarObj);
//   const { formattedDay, formattedMonth, formattedYear } = formatDateInfo(
//     day,
//     month,
//     year
//   );
//   const todayObj = new Date();
//   const isDisabledDate = isDateBeforeToday(
//     new Date(formattedYear, formattedMonth - 1, day),
//     todayObj
//   );
//   const cell = createCellEl(
//     formattedDay,
//     formattedMonth - 1,
//     formattedYear,
//     isDisabledDate,
//     'previous-month'
//   );
//   return cell;
// }

// function createCurrentMonthCell(day) {
//   const { formattedDay } = formatDateInfo(day);
//   const { year, month } = getCurrentYearAndMonth(monthToShowInCalendarObj);
//   const todayObj = new Date();
//   const cellDateObj = new Date(year, month, day);
//   const isDisabledDate = isDateBeforeToday(cellDateObj, todayObj);

//   const cell = createCellEl(
//     formattedDay,
//     month,
//     year,
//     isDisabledDate,
//     'current-month'
//   );
//   const isYearEquel =
//     cellDateObj.getFullYear() === selectedDateObj.getFullYear();
//   const isMonthEquel = cellDateObj.getMonth() === selectedDateObj.getMonth();
//   const isDayEquel = day === selectedDateObj.getDate();
//   const isCellSelectedDay = isYearEquel && isMonthEquel && isDayEquel;
//   addCellClasses(cell, isDisabledDate, 'current-month', isCellSelectedDay);
//   return cell;
// }

// function createNextMonthCell(day) {
//   const { year, month } = getCurrentYearAndMonth(monthToShowInCalendarObj);
//   const { formattedDay } = formatDateInfo(day, month, year);
//   const formattedMonth = month === 11 ? 1 : month + 2;
//   const formattedYear = month === 11 ? year + 1 : year;
//   const todayObj = new Date();
//   const cellDateObj = new Date(formattedYear, formattedMonth - 1, day);
//   const isDisabledDate = isDateBeforeToday(cellDateObj, todayObj);

//   const isCellSelectedDay =
//     cellDateObj.getFullYear() === selectedDateObj.getFullYear() &&
//     cellDateObj.getMonth() === selectedDateObj.getMonth() &&
//     day === selectedDateObj.getDate();
//   const cell = createCellEl(
//     formattedDay,
//     formattedMonth - 1,
//     formattedYear,
//     isDisabledDate,
//     'next-month'
//   );
//   addCellClasses(cell, isDisabledDate, 'next-month', isCellSelectedDay);
//   return cell;
// }

function setMonthAndYearName(year) {
  const monthName = monthToShowInCalendarObj.toLocaleDateString('uk-UA', {
    month: 'long',
  });
  const capitalizedMonth =
    monthName.charAt(0).toUpperCase() + monthName.slice(1);
  calendarHeadMonthAndYear.textContent = `${capitalizedMonth} ${year}`;
}
function createCalendarRow() {
  return document.createElement('tr');
}

function generateCalendar(dateobj) {
  clearCalendarData();
  const { year, month } = getCurrentYearAndMonth(dateobj);
  setMonthAndYearName(year);
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

function handleCellClick(event) {
  const clickedDate = convertDateFormat(event.target.dataset.date);
  const currentDateObj = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const clickedDateObj = new Date(clickedDate);

  selectedDateObj = clickedDateObj;
  const currentDateObjObj = new Date(currentDateObj);
  const differenceInMilliseconds = clickedDateObj - currentDateObjObj;

  if (differenceInMilliseconds >= 0) {
    const chosenDate = reverseConvertDateFormat(clickedDate);
    orderDayString = chosenDate;
    setDateInputValue();
    toggleIconActiveStyle(calendarIcon);
    toggleCalendarVisibility();
  }
}

function setDateInputValue() {
  dateInput.value = `${orderDayString}`;
}

function clearCalendarData() {
  calendarBody.innerHTML = '';
}

function updateCalendar(monthOffset) {
  monthToShowInCalendarObj.setMonth(
    monthToShowInCalendarObj.getMonth() + monthOffset
  );

  generateCalendar(monthToShowInCalendarObj);
}

function toggleCalendarVisibility() {
  calendarBlock.classList.toggle('isHidden');
}

generateCalendar(selectedDateObj);
