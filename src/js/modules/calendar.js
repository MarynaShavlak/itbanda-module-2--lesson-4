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
function setCellText(cell, day) {
  cell.textContent = day;
}
function setCellAttributes(cell, { day, month, year }) {
  cell.dataset.date = `${day}/${month < 9 ? '0' : ''}${month + 1}/${year}`;
}

function addCellClasses(cell, options) {
  const { monthType, isCellSelectedDay, isDisabledDate } = options;
  if (isDisabledDate) {
    cell.classList.add('disabled-day');
  }

  if (monthType === 'current-month' && isCellSelectedDay) {
    cell.classList.add('order-day');
  }

  cell.classList.add(monthType);
}

function addClickEventIfNotDisabled(cell, isDisabledDate) {
  if (!isDisabledDate) {
    cell.addEventListener('click', handleCellClick);
  }
}

function createCellEl(cellData) {
  const { day, month, year, isDisabledDate, monthType, isCellSelectedDay } =
    cellData;
  const cell = document.createElement('td');
  const options = { monthType, isCellSelectedDay, isDisabledDate };
  setCellText(cell, day);
  setCellAttributes(cell, { day, month, year });
  addClickEventIfNotDisabled(cell, isDisabledDate);
  addCellClasses(cell, options);
  return cell;
}

function createCalendarCell(day, monthType) {
  const { year, month } = getCurrentYearAndMonth(monthToShowInCalendarObj);
  const todayObj = new Date();
  let cellDay;
  let cellMonth;
  let cellYear;
  let cellDateObj;
  if (monthType === 'previous-month') {
    const { formattedDay, formattedMonth, formattedYear } = formatDateInfo(
      day,
      month,
      year
    );
    cellDay = formattedDay;
    cellMonth = formattedMonth - 1;
    cellYear = formattedYear;
    cellDateObj = new Date(cellYear, cellMonth, cellDay);
  } else if (monthType === 'current-month') {
    const { formattedDay } = formatDateInfo(day);
    cellDay = formattedDay;
    cellMonth = month;
    cellYear = year;
    cellDateObj = new Date(cellYear, cellMonth, cellDay);
  } else if (monthType === 'next-month') {
    const { formattedDay } = formatDateInfo(day, month, year);
    const formattedMonth = month === 11 ? 1 : month + 2;
    const formattedYear = month === 11 ? year + 1 : year;
    cellDay = formattedDay;
    cellMonth = formattedMonth - 1;
    cellYear = formattedYear;
    cellDateObj = new Date(cellYear, cellMonth, cellDay);
  }
  const isDisabledDate = isDateBeforeToday(cellDateObj, todayObj);
  const isCellSelectedDay = isCellSelected(cellDateObj, selectedDateObj, day);
  const cellData = {
    day: cellDay,
    month: cellMonth,
    year: cellYear,
    isDisabledDate: isDisabledDate,
    monthType: monthType,
    isCellSelectedDay: isCellSelectedDay,
  };
  const cell = createCellEl(cellData);
  return cell;
}

function isCellSelected(cellDateObj, selectedDateObj, day) {
  const isYearEqual =
    cellDateObj.getFullYear() === selectedDateObj.getFullYear();
  const isMonthEqual = cellDateObj.getMonth() === selectedDateObj.getMonth();
  const isDayEqual = day === selectedDateObj.getDate();
  const isCellSelectedDay = isYearEqual && isMonthEqual && isDayEqual;
  return isCellSelectedDay;
}

// function createPreviousMonthCell(day) {
//   return createCalendarCell(day, 'previous-month');
// }

// function createCurrentMonthCell(day) {
//   return createCalendarCell(day, 'current-month');
// }

// function createNextMonthCell(day) {
//   return createCalendarCell(day, 'next-month');
// }

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
    const cell = createCalendarCell(day, 'previous-month');
    appendElement(currentRow, cell);
  }

  while (currentDayNumber <= lastDayOfMonthObj.getDate()) {
    const cell = createCalendarCell(currentDayNumber, 'current-month');
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
      const cell = createCalendarCell(i, 'next-month');
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
