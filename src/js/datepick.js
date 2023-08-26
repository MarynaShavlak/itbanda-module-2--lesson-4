import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/confetti.css';

const datePickerElement = document.querySelector('#datepicker');
const timePickerElement = document.querySelector('#timepicker');
const calendarIcon = document.querySelector('.icon--calendar');
const clockIcon = document.querySelector('.icon--clock');

flatpickr(datePickerElement, {
  dateFormat: 'Y-m-d',
  minDate: 'today',
});

flatpickr(timePickerElement, {
  enableTime: true,
  noCalendar: true,
  dateFormat: 'H:i',
});

calendarIcon.addEventListener('click', () => {
  datePickerElement.focus();
});

clockIcon.addEventListener('click', () => {
  timePickerElement.focus();
});
