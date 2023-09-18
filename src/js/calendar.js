// const calendarIcon = document.querySelector('.icon--calendar');
// const calendarBody = document.querySelector('.calendar__body');
// const monthYear = document.querySelector('.calendar__monthYear');
// const prevMonthBtn = document.querySelector('.calendar__prevMonth-btn');
// const nextMonthBtn = document.querySelector('.calendar__nextMonth-btn');

// let currentDateObj = new Date();

// function generateCalendar() {
//   const year = currentDateObj.getFullYear();
//   const month = currentDateObj.getMonth();
//   const todayObj = new Date(); // Get the current date
//   const firstDayOfMonth = new Date(year, month, 1);
//   const lastDayOfMonthObj = new Date(year, month + 1, 0);

//   const monthName = currentDateObj.toLocaleDateString('uk-UA', { month: 'long' });
//   const capitalizedMonth =
//     monthName.charAt(0).toUpperCase() + monthName.slice(1);

//   monthYear.textContent = `${capitalizedMonth} ${year}`;

//   // Clear previous month's data
//   calendarBody.innerHTML = '';

//   // Calculate the start day (0 for Sunday, 1 for Monday, etc.)
//   let initialNumberOfWeekDay = firstDayOfMonth.getDay();
//   if (initialNumberOfWeekDay === 0) {
//     initialNumberOfWeekDay = 7; // Make Sunday (0) the last day of the week
//   }

//   // Calculate the last day of the previous month
//   const lastDayOfPrevMonth = new Date(year, month, 0).getDate();

//   // Fill in the calendar
//   let currentDayNumber = 1;
//   let currentRow = document.createElement('tr');

//   // Fill the first row with days from the previous month
//   for (let i = initialNumberOfWeekDay - 1; i >= 1; i--) {
//     const cell = document.createElement('td');
//     const day = lastDayOfPrevMonth - i + 1;
//     const formattedDay = day < 10 ? `0${day}` : day;
//     const formattedMonth = month === 0 ? 12 : month; // Handle January
//     const formattedYear = month === 0 ? year - 1 : year; // Handle January
//     cell.textContent = formattedDay;
//     cell.classList.add('previous-month');
//     cell.dataset.date = `${formattedDay}/${
//       formattedMonth < 10 ? '0' : ''
//     }${formattedMonth}/${formattedYear}`;
//     currentRow.appendChild(cell);
//     cell.addEventListener('click', handleCellClick);
//     if (
//       isDateBeforeToday(new Date(formattedYear, formattedMonth - 1, day), todayObj)
//     ) {
//       cell.classList.add('disabled-day');
//     }
//   }

//   // Fill the remaining cells with days from the current month
//   while (currentDayNumber <= lastDayOfMonthObj.getDate()) {
//     const cell = document.createElement('td');
//     const formattedDay = currentDayNumber < 10 ? `0${currentDayNumber}` : currentDayNumber;
//     cell.textContent = formattedDay;
//     cell.classList.add('current-month');
//     if (
//       currentDateObj.getFullYear() === todayObj.getFullYear() &&
//       currentDateObj.getMonth() === todayObj.getMonth() &&
//       currentDayNumber === todayObj.getDate()
//     ) {
//       cell.classList.add('current-day');
//     }
//     cell.dataset.date = `${formattedDay}/${month < 9 ? '0' : ''}${
//       month + 1
//     }/${year}`;
//     currentRow.appendChild(cell);
//     cell.addEventListener('click', handleCellClick);
//     if (isDateBeforeToday(new Date(year, month, currentDayNumber), todayObj)) {
//       cell.classList.add('disabled-day');
//     }
//     if (currentRow.children.length === 7) {
//       calendarBody.appendChild(currentRow);
//       currentRow = document.createElement('tr');
//     }
//     currentDayNumber++;
//   }

//   // Fill the last row with days from the next month
//   for (let i = 1; currentRow.children.length < 7; i++) {
//     const cell = document.createElement('td');
//     const formattedDay = i < 10 ? `0${i}` : i;
//     const formattedMonth = month === 11 ? 1 : month + 2; // Handle December
//     const formattedYear = month === 11 ? year + 1 : year; // Handle December
//     cell.textContent = formattedDay;
//     cell.classList.add('next-month');
//     cell.dataset.date = `${formattedDay}/${
//       formattedMonth < 10 ? '0' : ''
//     }${formattedMonth}/${formattedYear}`;
//     currentRow.appendChild(cell);
//     cell.addEventListener('click', handleCellClick);
//     if (
//       isDateBeforeToday(new Date(formattedYear, formattedMonth - 1, i), todayObj)
//     ) {
//       cell.classList.add('disabled-day');
//     }
//   }

//   calendarBody.appendChild(currentRow);
// }

// function isDateBeforeToday(date, todayObj) {
//   return date < todayObj;
// }

// function convertDateFormat(dateString) {
//   // Split the input date string by '/'
//   const parts = dateString.split('/');

//   // Ensure there are three parts (day, month, and year)
//   if (parts.length !== 3) {
//     return 'Invalid date format';
//   }

//   const [day, month, year] = parts;

//   // Swap day and month and rejoin them with '/'
//   const newDateString = `${month}/${day}/${year}`;

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
//     console.log('currentDateObj: ', currentDateObj);
//     console.log('clickedDate: ', clickedDate);
//   }
// }

// prevMonthBtn.addEventListener('click', () => {
//   currentDateObj.setMonth(currentDateObj.getMonth() - 1);
//   generateCalendar();
// });

// nextMonthBtn.addEventListener('click', () => {
//   currentDateObj.setMonth(currentDateObj.getMonth() + 1);
//   generateCalendar();
// });

// // Initial calendar generation
// generateCalendar();

// calendarIcon.addEventListener('click', () => {
//   toggleCalendarVisibility();
// });

// function toggleCalendarVisibility() {
//   const calendarElement = document.querySelector('.calendar');
//   calendarElement.classList.toggle('isHidden');
// }
