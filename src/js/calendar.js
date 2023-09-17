// const calendarBody = document.getElementById('calendarBody');
// const monthYear = document.getElementById('monthYear');
// const prevMonthBtn = document.getElementById('prevMonth');
// const nextMonthBtn = document.getElementById('nextMonth');

// let currentDate = new Date();

// function generateCalendar() {
//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth();
//   const today = new Date(); // Get the current date
//   const firstDayOfMonth = new Date(year, month, 1);
//   const lastDayOfMonth = new Date(year, month + 1, 0);

//   monthYear.textContent = `${new Intl.DateTimeFormat('en-US', {
//     month: 'long',
//   }).format(currentDate)} ${year}`;

//   // Clear previous month's data
//   calendarBody.innerHTML = '';

//   // Calculate the start day (0 for Sunday, 1 for Monday, etc.)
//   let startDay = firstDayOfMonth.getDay();
//   if (startDay === 0) {
//     startDay = 7; // Make Sunday (0) the last day of the week
//   }

//   // Calculate the last day of the previous month
//   const lastDayOfPrevMonth = new Date(year, month, 0).getDate();

//   // Fill in the calendar
//   let currentDay = 1;
//   let currentRow = document.createElement('tr');

//   // Fill the first row with days from the previous month
//   for (let i = startDay - 1; i >= 1; i--) {
//     const cell = document.createElement('td');
//     const day = lastDayOfPrevMonth - i + 1;
//     const formattedDay = day < 10 ? `0${day}` : day;
//     cell.textContent = formattedDay;
//     cell.classList.add('previous-month');
//     cell.dataset.date = `${formattedDay}/${
//       month < 9 ? '0' : ''
//     }${month}/${year}`;
//     currentRow.appendChild(cell);
//     cell.addEventListener('click', handleCellClick);
//   }

//   // Fill the remaining cells with days from the current month
//   while (currentDay <= lastDayOfMonth.getDate()) {
//     const cell = document.createElement('td');
//     const formattedDay = currentDay < 10 ? `0${currentDay}` : currentDay;
//     cell.textContent = formattedDay;
//     cell.classList.add('current-month');
//     if (
//       currentDate.getFullYear() === today.getFullYear() &&
//       currentDate.getMonth() === today.getMonth() &&
//       currentDay === today.getDate()
//     ) {
//       cell.classList.add('current-day');
//     }
//     cell.dataset.date = `${formattedDay}/${month < 9 ? '0' : ''}${
//       month + 1
//     }/${year}`;
//     currentRow.appendChild(cell);
//     cell.addEventListener('click', handleCellClick);
//     if (currentRow.children.length === 7) {
//       calendarBody.appendChild(currentRow);
//       currentRow = document.createElement('tr');
//     }
//     currentDay++;
//   }

//   // Fill the last row with days from the next month
//   for (let i = 1; currentRow.children.length < 7; i++) {
//     const cell = document.createElement('td');
//     const formattedDay = i < 10 ? `0${i}` : i;
//     cell.textContent = formattedDay;
//     cell.classList.add('next-month');
//     cell.dataset.date = `${formattedDay}/${month < 9 ? '0' : ''}${
//       month + 2
//     }/${year}`;
//     currentRow.appendChild(cell);
//     cell.addEventListener('click', handleCellClick);
//   }

//   calendarBody.appendChild(currentRow);
// }

// function handleCellClick(event) {
//   const clickedDate = event.target.dataset.date;
//   console.log(clickedDate);
// }

// prevMonthBtn.addEventListener('click', () => {
//   currentDate.setMonth(currentDate.getMonth() - 1);
//   generateCalendar();
// });

// nextMonthBtn.addEventListener('click', () => {
//   currentDate.setMonth(currentDate.getMonth() + 1);
//   generateCalendar();
// });

// // Initial calendar generation
// generateCalendar();

const calendarBody = document.getElementById('calendarBody');
const monthYear = document.getElementById('monthYear');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

let currentDate = new Date();

function generateCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date(); // Get the current date
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  monthYear.textContent = `${new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(currentDate)} ${year}`;

  // Clear previous month's data
  calendarBody.innerHTML = '';

  // Calculate the start day (0 for Sunday, 1 for Monday, etc.)
  let startDay = firstDayOfMonth.getDay();
  if (startDay === 0) {
    startDay = 7; // Make Sunday (0) the last day of the week
  }

  // Calculate the last day of the previous month
  const lastDayOfPrevMonth = new Date(year, month, 0).getDate();

  // Fill in the calendar
  let currentDay = 1;
  let currentRow = document.createElement('tr');

  // Fill the first row with days from the previous month
  for (let i = startDay - 1; i >= 1; i--) {
    const cell = document.createElement('td');
    const day = lastDayOfPrevMonth - i + 1;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month === 0 ? 12 : month; // Handle January
    const formattedYear = month === 0 ? year - 1 : year; // Handle January
    cell.textContent = formattedDay;
    cell.classList.add('previous-month');
    cell.dataset.date = `${formattedDay}/${
      formattedMonth < 10 ? '0' : ''
    }${formattedMonth}/${formattedYear}`;
    currentRow.appendChild(cell);
    cell.addEventListener('click', handleCellClick);
  }

  // Fill the remaining cells with days from the current month
  while (currentDay <= lastDayOfMonth.getDate()) {
    const cell = document.createElement('td');
    const formattedDay = currentDay < 10 ? `0${currentDay}` : currentDay;
    cell.textContent = formattedDay;
    cell.classList.add('current-month');
    if (
      currentDate.getFullYear() === today.getFullYear() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDay === today.getDate()
    ) {
      cell.classList.add('current-day');
    }
    cell.dataset.date = `${formattedDay}/${month < 9 ? '0' : ''}${
      month + 1
    }/${year}`;
    currentRow.appendChild(cell);
    cell.addEventListener('click', handleCellClick);
    if (currentRow.children.length === 7) {
      calendarBody.appendChild(currentRow);
      currentRow = document.createElement('tr');
    }
    currentDay++;
  }

  // Fill the last row with days from the next month
  for (let i = 1; currentRow.children.length < 7; i++) {
    const cell = document.createElement('td');
    const formattedDay = i < 10 ? `0${i}` : i;
    const formattedMonth = month === 11 ? 1 : month + 2; // Handle December
    const formattedYear = month === 11 ? year + 1 : year; // Handle December
    cell.textContent = formattedDay;
    cell.classList.add('next-month');
    cell.dataset.date = `${formattedDay}/${
      formattedMonth < 10 ? '0' : ''
    }${formattedMonth}/${formattedYear}`;
    currentRow.appendChild(cell);
    cell.addEventListener('click', handleCellClick);
  }

  calendarBody.appendChild(currentRow);
}

function handleCellClick(event) {
  const clickedDate = event.target.dataset.date;
  console.log(clickedDate);
}

prevMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  generateCalendar();
});

nextMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  generateCalendar();
});

// Initial calendar generation
generateCalendar();
