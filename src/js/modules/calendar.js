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

const calendarBlocks = document.querySelectorAll('.calendar');
calendarBlocks.forEach(calendarBlock => {
  const dateInput =
    calendarBlock.parentElement.previousElementSibling.querySelector(
      '[name="userDate"]'
    );
  const calendarIcon =
    calendarBlock.parentElement.previousElementSibling.querySelector(
      '.icon--calendar'
    );

  const sheduleEl = calendarBlock.parentElement.querySelector('.work-shedule');
  let selectedDateObj = new Date();
  let monthToShowInCalendarObj = new Date();
  let orderDayString = getCurrentDateAsString();

  createCalendar(
    calendarBlock,
    dateInput,
    calendarIcon,
    sheduleEl,
    selectedDateObj,
    monthToShowInCalendarObj,
    orderDayString
  );
});

function createCalendar(
  calendarBlock,
  dateInput,
  calendarIcon,
  sheduleEl,
  selectedDateObj,
  monthToShowInCalendarObj,
  orderDayString
) {
  const calendarBody = calendarBlock.querySelector('.calendar__body');
  const calendarHeadMonthAndYear = calendarBlock.querySelector(
    '.calendar__monthYear'
  );
  const prevMonthBtn = calendarBlock.querySelector('.calendar__prevMonth-btn');
  const nextMonthBtn = calendarBlock.querySelector('.calendar__nextMonth-btn');
  dateInput.addEventListener('click', () => {
    toggleCalendarVisibility();
    toggleSheduleVisibility();
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
    toggleSheduleVisibility();
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
    let cellDateObj;

    if (monthType === 'previous-month') {
      const { formattedDay, formattedMonth, formattedYear } = formatDateInfo(
        day,
        month,
        year
      );
      cellDateObj = new Date(formattedYear, formattedMonth - 1, formattedDay);
    } else if (monthType === 'current-month') {
      const { formattedDay } = formatDateInfo(day);
      cellDateObj = new Date(year, month, formattedDay);
    } else if (monthType === 'next-month') {
      const { formattedDay } = formatDateInfo(day, month, year);
      const nextMonth = month === 11 ? 0 : month + 1;
      const nextYear = month === 11 ? year + 1 : year;
      cellDateObj = new Date(nextYear, nextMonth, formattedDay);
    }

    const isDisabledDate = isDateBeforeToday(cellDateObj, todayObj);
    const isCellSelectedDay = isCellSelected(cellDateObj, selectedDateObj, day);
    const formattedDay = String(cellDateObj.getDate()).padStart(2, '0');

    const cellData = {
      day: formattedDay,
      month: cellDateObj.getMonth(),
      year: cellDateObj.getFullYear(),
      isDisabledDate,
      monthType,
      isCellSelectedDay,
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

  function setMonthAndYearName(year) {
    const monthName = monthToShowInCalendarObj.toLocaleDateString('uk-UA', {
      month: 'long',
    });
    const capitalizedMonth =
      monthName.charAt(0).toUpperCase() + monthName.slice(1);
    calendarHeadMonthAndYear.textContent = `${capitalizedMonth} ${year}`;
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
      toggleSheduleVisibility();
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
  function toggleSheduleVisibility() {
    sheduleEl.classList.toggle('isHidden');
  }

  function createCalendarRow() {
    return document.createElement('tr');
  }

  generateCalendar(selectedDateObj);
}
