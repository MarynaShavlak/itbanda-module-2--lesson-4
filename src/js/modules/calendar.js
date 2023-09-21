import { toggleIconActiveStyle } from './common';
const calendarElement = document.querySelector('.calendar');
const calendarIcon = document.querySelector('.icon--calendar');
const calendarBody = document.querySelector('.calendar__body');
const calendarHeadMonthAndYear = document.querySelector('.calendar__monthYear');
const prevMonthBtn = document.querySelector('.calendar__prevMonth-btn');
const nextMonthBtn = document.querySelector('.calendar__nextMonth-btn');
const dateInput = document.querySelector('[name="userDate"]');

let selectedDateObj = new Date();
let monthToShowInCalendarObj = new Date();
let orderDay = getCurrentDateAsString();

dateInput.addEventListener('click', () => {
  console.log('wasChosenDayChanged : ', wasChosenDayChanged);

  toggleIconActiveStyle(calendarIcon);
  toggleCalendarVisibility();
  const isCalendarVisible = !calendarElement.classList.contains('isHidden');
  generateCalendar(selectedDateObj);
  if (isCalendarVisible) {
    setDateInputValue();
  }
});

calendarIcon.addEventListener('click', e => {
  toggleCalendarVisibility();
  console.log('при клике на иконку selectedDateObj: ', selectedDateObj);
  generateCalendar(selectedDateObj);
  toggleIconActiveStyle(e.target);
  const isCalendarVisible = !calendarElement.classList.contains('isHidden');
  if (isCalendarVisible) {
    setDateInputValue();
  }

  console.log('при клике на иконку ВКОНЦЕ selectedDateObj: ', selectedDateObj);
});

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

function getCurrentYearAndMonth(obj) {
  const year = obj.getFullYear();
  const month = obj.getMonth();
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
    cell.classList.add('order-day');
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
  // const { year, month } = getCurrentYearAndMonth(currentDateObj);
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
  // const { year, month } = getCurrentYearAndMonth(selectedDateObj);
  const { year, month } = getCurrentYearAndMonth(monthToShowInCalendarObj);
  const todayObj = new Date();
  const cellDateObj = new Date(year, month, day);
  // console.log('_______cellDateObj : ', cellDateObj);
  const isDisabledDate = isDateBeforeToday(cellDateObj, todayObj);
  // console.log('_______selectedDateObj: ', selectedDateObj);

  const cell = createCellEl(
    formattedDay,
    month,
    year,
    isDisabledDate,
    'current-month'
  );
  const isYearEquel =
    cellDateObj.getFullYear() === selectedDateObj.getFullYear();
  // console.log('isYearEquel: ', isYearEquel);
  const isMonthEquel = cellDateObj.getMonth() === selectedDateObj.getMonth();
  // console.log('isMonthEquel: ', isMonthEquel);
  const isDayEquel = day === selectedDateObj.getDate();
  // console.log('isDayEquel: ', isDayEquel);
  // console.log('______________');
  const isCellSelectedDay =
    cellDateObj.getFullYear() === selectedDateObj.getFullYear() &&
    cellDateObj.getMonth() === selectedDateObj.getMonth() &&
    day === selectedDateObj.getDate();

  // console.log('isCellSelectedDay: ', isCellSelectedDay);
  addCellClasses(cell, isDisabledDate, 'current-month', isCellSelectedDay);
  return cell;
}

function createNextMonthCell(day) {
  // const { year, month } = getCurrentYearAndMonth(selectedDateObj);
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
    'next-month'
  );
  addCellClasses(cell, isDisabledDate, 'next-month', isCellSelectedDay);
  return cell;
}

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

function appendElement(parent, child) {
  parent.appendChild(child);
}

function generateCalendar(dateobj) {
  console.log('in function generateCalendar : dateobj: ', dateobj);
  const { year, month } = getCurrentYearAndMonth(dateobj);
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
  console.log('MAYBE HERE');
  const clickedDate = convertDateFormat(event.target.dataset.date);
  console.log('event.target.dataset.date: ', event.target.dataset.date);
  const currentDateObj = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const clickedDateObj = new Date(clickedDate);

  console.log('BEFORE selectedDateObj: ', selectedDateObj);
  selectedDateObj = clickedDateObj;
  console.log('AFTER selectedDateObj: ', selectedDateObj);
  const currentDateObjObj = new Date(currentDateObj);
  const differenceInMilliseconds = clickedDateObj - currentDateObjObj;

  if (differenceInMilliseconds >= 0) {
    const chosenDate = reverseConvertDateFormat(clickedDate);
    orderDay = chosenDate;
    setDateInputValue();
    toggleCalendarVisibility();
  }
}

function setDateInputValue() {
  console.log('orderDay: ', orderDay);
  dateInput.value = `${orderDay}`;
}

function clearCalendarData() {
  calendarBody.innerHTML = '';
}

function updateCalendar(monthOffset) {
  // console.log('update before selectedDateObj: ', selectedDateObj);
  // console.log(
  //   'update BEFORE monthToShowInCalendarObj: ',
  //   monthToShowInCalendarObj
  // );
  monthToShowInCalendarObj.setMonth(
    monthToShowInCalendarObj.getMonth() + monthOffset
  );
  // console.log('_____________');
  // console.log('update after selectedDateObj: ', selectedDateObj);
  // console.log(
  //   'update AFTER monthToShowInCalendarObj: ',
  //   monthToShowInCalendarObj
  // );

  generateCalendar(monthToShowInCalendarObj);
}

prevMonthBtn?.addEventListener('click', () => {
  updateCalendar(-1);
});

nextMonthBtn?.addEventListener('click', () => {
  updateCalendar(1);
});

function toggleCalendarVisibility() {
  calendarElement.classList.toggle('isHidden');
}

function getCurrentDateAsString() {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear();

  return `${day}/${month}/${year}`;
}

generateCalendar(selectedDateObj);
