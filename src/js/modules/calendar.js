// const calendarIcon = document.querySelector('.icon--calendar');
// const calendarBody = document.querySelector('.calendar__body');
// const calendarHeadMonthAndYear = document.querySelector('.calendar__monthYear');
// const prevMonthBtn = document.querySelector('.calendar__prevMonth-btn');
// const nextMonthBtn = document.querySelector('.calendar__nextMonth-btn');
// const dateInput = document.querySelector('[name="userDate"]');
// dateInput.addEventListener('focus', toggleCalendarVisibility);

// let currentDateObj = new Date();

// function toggleIconActiveStyle(icon) {
//   icon.classList.toggle('isActive');
// }

// function calculateStartDay(firstDayOfMonth) {
//   let initialNumberOfWeekDay = firstDayOfMonth.getDay();
//   if (initialNumberOfWeekDay === 0) {
//     initialNumberOfWeekDay = 7;
//   }
//   return initialNumberOfWeekDay;
// }

// function getLastDayOfPrevMonth(year, month) {
//   return new Date(year, month, 0).getDate();
// }

// function getCurrentYearAndMonth(currentDateObj) {
//   const year = currentDateObj.getFullYear();
//   const month = currentDateObj.getMonth();
//   return { month, year };
// }

// function getMonthBoundaryDates(year, month) {
//   const firstDayOfMonth = new Date(year, month, 1);
//   const lastDayOfMonthObj = new Date(year, month + 1, 0);
//   return { firstDayOfMonth, lastDayOfMonthObj };
// }

// function formatDateInfo(day, month, year) {
//   const formattedDay = day < 10 ? `0${day}` : day;
//   const formattedMonth = month === 0 ? 12 : month;
//   const formattedYear = month === 0 ? year - 1 : year;

//   return {
//     formattedDay,
//     formattedMonth,
//     formattedYear,
//   };
// }

// function setCellText(cell, day) {
//   cell.textContent = day;
// }
// function setCellAttributes(cell, day, month, year) {
//   cell.dataset.date = `${day}/${month < 9 ? '0' : ''}${month + 1}/${year}`;
// }

// function addCellClasses(cell, isDisabledDate, monthType, isToday) {
//   cell.classList.add(monthType);
//   if (isDisabledDate) {
//     cell.classList.add('disabled-day');
//   }
//   if (monthType === 'current-month' && isToday) {
//     cell.classList.add('current-day');
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
//   const { year, month } = getCurrentYearAndMonth(currentDateObj);
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
//   const { year, month } = getCurrentYearAndMonth(currentDateObj);
//   const todayObj = new Date();
//   const isDisabledDate = isDateBeforeToday(
//     new Date(year, month, day),
//     todayObj
//   );

//   const cell = createCellEl(
//     formattedDay,
//     month,
//     year,
//     isDisabledDate,
//     'current-month'
//   );
//   const isToday =
//     currentDateObj.getFullYear() === todayObj.getFullYear() &&
//     currentDateObj.getMonth() === todayObj.getMonth() &&
//     day === todayObj.getDate();
//   addCellClasses(cell, isDisabledDate, 'current-month', isToday);
//   return cell;
// }

// function createNextMonthCell(day) {
//   const { year, month } = getCurrentYearAndMonth(currentDateObj);
//   const { formattedDay } = formatDateInfo(day, month, year);
//   const formattedMonth = month === 11 ? 1 : month + 2;
//   const formattedYear = month === 11 ? year + 1 : year;
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
//     'next-month'
//   );
//   return cell;
// }

// function setMonthAndYearName(year) {
//   const monthName = currentDateObj.toLocaleDateString('uk-UA', {
//     month: 'long',
//   });
//   const capitalizedMonth =
//     monthName.charAt(0).toUpperCase() + monthName.slice(1);
//   calendarHeadMonthAndYear.textContent = `${capitalizedMonth} ${year}`;
// }
// function createCalendarRow() {
//   return document.createElement('tr');
// }

// function appendElement(parent, child) {
//   parent.appendChild(child);
// }

// function generateCalendar() {
//   const { year, month } = getCurrentYearAndMonth(currentDateObj);
//   setMonthAndYearName(year);
//   clearCalendarData();
//   const { firstDayOfMonth, lastDayOfMonthObj } = getMonthBoundaryDates(
//     year,
//     month
//   );
//   const initialNumberOfWeekDay = calculateStartDay(firstDayOfMonth);
//   const lastDayOfPrevMonth = getLastDayOfPrevMonth(year, month);

//   let currentDayNumber = 1;
//   let currentRow = createCalendarRow();

//   for (let i = initialNumberOfWeekDay - 1; i >= 1; i--) {
//     const day = lastDayOfPrevMonth - i + 1;
//     const cell = createPreviousMonthCell(day);
//     appendElement(currentRow, cell);
//   }

//   while (currentDayNumber <= lastDayOfMonthObj.getDate()) {
//     const cell = createCurrentMonthCell(currentDayNumber);
//     appendElement(currentRow, cell);
//     const isWeekRowFull = currentRow.children.length === 7;
//     if (isWeekRowFull) {
//       appendElement(calendarBody, currentRow);
//       currentRow = createCalendarRow();
//     }
//     currentDayNumber++;
//   }
//   const isAnyEmptyCell = currentRow.children.length > 0;
//   if (isAnyEmptyCell) {
//     for (let i = 1; currentRow.children.length < 7; i++) {
//       const cell = createNextMonthCell(i);
//       appendElement(currentRow, cell);
//     }
//     appendElement(calendarBody, currentRow);
//   }
// }

// function isDateBeforeToday(date, todayObj) {
//   return date < todayObj;
// }

// function convertDateFormat(dateString) {
//   const parts = dateString.split('/');
//   const [day, month, year] = parts;
//   const newDateString = `${month}/${day}/${year}`;
//   return newDateString;
// }

// function reverseConvertDateFormat(dateString) {
//   const parts = dateString.split('/');
//   const [month, day, year] = parts;
//   const newDateString = `${day}/${month}/${year}`;
//   return newDateString;
// }

// function handleCellClick(event) {
//   const clickedDate = convertDateFormat(event.target.dataset.date);
//   const currentDateObj = new Date().toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//   });

//   const clickedDateObj = new Date(clickedDate);
//   const currentDateObjObj = new Date(currentDateObj);
//   const differenceInMilliseconds = clickedDateObj - currentDateObjObj;

//   if (differenceInMilliseconds >= 0) {
//     const chosenDate = reverseConvertDateFormat(clickedDate);
//     dateInput.value = `${chosenDate}`;
//     toggleCalendarVisibility();
//   }
// }

// function clearCalendarData() {
//   calendarBody.innerHTML = '';
// }

// function updateCalendar(monthOffset) {
//   currentDateObj.setMonth(currentDateObj.getMonth() + monthOffset);
//   generateCalendar();
// }

// prevMonthBtn?.addEventListener('click', () => {
//   updateCalendar(-1);
// });

// nextMonthBtn?.addEventListener('click', () => {
//   updateCalendar(1);
// });

// calendarIcon.addEventListener('click', e => {
//   toggleCalendarVisibility();
//   toggleIconActiveStyle(e.target);
// });

// function toggleCalendarVisibility() {
//   const calendarElement = document.querySelector('.calendar');
//   calendarElement.classList.toggle('isHidden');
// }

// generateCalendar();
