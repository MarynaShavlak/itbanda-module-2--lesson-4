import { toggleIconActiveStyle, appendElement } from './common';

const calendars = document.querySelectorAll('.calendar');

calendars.forEach(calendar => {
  console.log('calendar: ', calendar);
  const prevMonthBtn = calendar.querySelector('.calendar__prevMonth-btn');
  const nextMonthBtn = calendar.querySelector('.calendar__nextMonth-btn');
  const dateInput =
    calendar.previousElementSibling.querySelector('[name="userDate"]');
  const calendarIcon =
    calendar.previousElementSibling.querySelector('.icon--calendar');

  let selectedDateObj = new Date();
  let monthToShowInCalendarObj = new Date();
  let orderDay = getCurrentDateAsString();

  dateInput.addEventListener('click', () => {
    toggleCalendarVisibility(calendar);
    toggleIconActiveStyle(calendarIcon);
    monthToShowInCalendarObj = new Date(selectedDateObj);
    const isCalendarVisible = !calendar.classList.contains('isHidden');
    generateCalendar(
      selectedDateObj,
      calendar,
      monthToShowInCalendarObj,
      selectedDateObj
    );
    if (isCalendarVisible) {
      setDateInputValue(dateInput, orderDay);
    }
  });

  dateInput.addEventListener('blur', e => {
    const trimmedValue = extractDate(e.target.value);
    dateInput.value = trimmedValue;
  });

  calendarIcon.addEventListener('click', () => {
    toggleCalendarVisibility(calendar);
    monthToShowInCalendarObj = new Date(selectedDateObj);
    generateCalendar(
      selectedDateObj,
      calendar,
      monthToShowInCalendarObj,
      selectedDateObj
    );
    toggleIconActiveStyle(calendarIcon);
    const isCalendarVisible = !calendar.classList.contains('isHidden');
    if (isCalendarVisible) {
      setDateInputValue(dateInput, orderDay);
    }
  });

  prevMonthBtn?.addEventListener('click', () => {
    updateCalendar(-1, calendar, monthToShowInCalendarObj, selectedDateObj);
  });

  nextMonthBtn?.addEventListener('click', () => {
    updateCalendar(1, calendar, monthToShowInCalendarObj, selectedDateObj);
  });
});

function toggleCalendarVisibility(calendar) {
  calendar.classList.toggle('isHidden');
}

function setMonthAndYearName(year, calendar, dateObj) {
  const calendarHeadMonthAndYear = calendar.querySelector(
    '.calendar__monthYear'
  );
  const monthName = dateObj.toLocaleDateString('uk-UA', {
    month: 'long',
  });
  const capitalizedMonth =
    monthName.charAt(0).toUpperCase() + monthName.slice(1);
  calendarHeadMonthAndYear.textContent = `${capitalizedMonth} ${year}`;
}

function generateCalendar(dateobj, calendar, showDateObj, selectedDateObj) {
  const calendarBody = calendar.querySelector('.calendar__body');
  clearCalendarData(calendar);
  const { year, month } = getCurrentYearAndMonth(dateobj);
  setMonthAndYearName(year, calendar, showDateObj);
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
    const cell = createPreviousMonthCell(day, showDateObj, calendar);
    appendElement(currentRow, cell);
  }

  while (currentDayNumber <= lastDayOfMonthObj.getDate()) {
    const cell = createCurrentMonthCell(
      selectedDateObj,
      currentDayNumber,
      showDateObj,
      calendar
    );
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
      const cell = createNextMonthCell(
        selectedDateObj,
        i,
        showDateObj,
        calendar
      );
      appendElement(currentRow, cell);
    }
    appendElement(calendarBody, currentRow);
  }
}

function handleCellClick(event, calendar) {
  const dateInput =
    calendar.previousElementSibling.querySelector('[name="userDate"]');
  const calendarIcon =
    calendar.previousElementSibling.querySelector('.icon--calendar');
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
    orderDay = chosenDate;
    setDateInputValue(dateInput, orderDay);
    toggleIconActiveStyle(calendarIcon);
    toggleCalendarVisibility(calendar);
  }
}

function setDateInputValue(input, orderDay) {
  input.value = `${orderDay}`;
}

// ______________________________________________________________-
// ______________________________________________________________-

function getCurrentDateAsString() {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear();
  return `${day}/${month}/${year}`;
}

function extractDate(inputString) {
  const trimmedString = inputString.trim();
  const datePattern = /\d{2}\/\d{2}\/\d{4}/;
  const match = trimmedString.match(datePattern);
  if (match) {
    return match[0];
  } else {
    return null;
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

// generateCalendar(selectedDateObj, calendar);

// ______________________________________________________________-
// ______________________________________________________________-

function createCalendarRow() {
  return document.createElement('tr');
}

function clearCalendarData(calendar) {
  const calendarBody = calendar.querySelector('.calendar__body');
  calendarBody.innerHTML = '';
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

function addCellClickEvent(cell, isDisabledDate, calendar) {
  if (!isDisabledDate) {
    cell.addEventListener('click', e => handleCellClick(e, calendar));
  }
}

function createCellEl(fd, fm, y, isDisabledDate, monthType, calendar) {
  const cell = document.createElement('td');
  setCellText(cell, fd);
  setCellAttributes(cell, fd, fm, y);
  addCellClasses(cell, isDisabledDate, monthType);
  addCellClickEvent(cell, isDisabledDate, calendar);

  return cell;
}

function createPreviousMonthCell(day, showDateObj, calendar) {
  const { year, month } = getCurrentYearAndMonth(showDateObj);
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
    'previous-month',
    calendar
  );
  return cell;
}

function createCurrentMonthCell(selectedDateObj, day, showDateObj, calendar) {
  const { formattedDay } = formatDateInfo(day);
  const { year, month } = getCurrentYearAndMonth(showDateObj);
  const todayObj = new Date();
  const cellDateObj = new Date(year, month, day);
  const isDisabledDate = isDateBeforeToday(cellDateObj, todayObj);

  const cell = createCellEl(
    formattedDay,
    month,
    year,
    isDisabledDate,
    'current-month',
    calendar
  );
  const isYearEquel =
    cellDateObj.getFullYear() === selectedDateObj.getFullYear();
  const isMonthEquel = cellDateObj.getMonth() === selectedDateObj.getMonth();
  const isDayEquel = day === selectedDateObj.getDate();
  const isCellSelectedDay = isYearEquel && isMonthEquel && isDayEquel;
  addCellClasses(cell, isDisabledDate, 'current-month', isCellSelectedDay);
  return cell;
}

function createNextMonthCell(selectedDateObj, day, showDateObj, calendar) {
  const { year, month } = getCurrentYearAndMonth(showDateObj);
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
    calendar
  );
  addCellClasses(cell, isDisabledDate, 'next-month', isCellSelectedDay);
  return cell;
}

function updateCalendar(
  monthOffset,
  calendar,
  monthToShowInCalendarObj,
  selectedDateObj
) {
  monthToShowInCalendarObj.setMonth(
    monthToShowInCalendarObj.getMonth() + monthOffset
  );

  generateCalendar(
    monthToShowInCalendarObj,
    calendar,
    monthToShowInCalendarObj,
    selectedDateObj
  );
}
