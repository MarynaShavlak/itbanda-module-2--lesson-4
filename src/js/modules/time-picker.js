import { toggleIconActiveStyle } from './common';
import { parseDateStringToDate, getDayNameFromDate } from './dates';

const workShedule = [
  { day: 'пн', start: '07', finish: '21' },
  { day: 'вт', start: '07', finish: '21' },
  { day: 'ср', start: '07', finish: '21' },
  { day: 'чт', start: '07', finish: '21' },
  { day: 'пт', start: '07', finish: '21' },
  { day: 'сб', start: '10', finish: '19' },
  { day: 'нд', start: '10', finish: '19' },
];

const timePickerElements = document.querySelectorAll('.time-picker-wrap');
timePickerElements.forEach(element => {
  initializeTimePicker(element);
});

function initializeTimePicker(timePickerElement) {
  const {
    clockIcon,
    sheduleEl,
    hourTablo,
    minuteTablo,
    hourPicker,
    minutePicker,
    timePickerBtn,
    timeInput,
  } = getTimePickerElements(timePickerElement);

  const selectedTimeObj = { hours: '15', minutes: '00' };

  timeInput.addEventListener('click', () => {
    const dateInput = getClosestDateInput(timeInput);
    const isDateChosen = !!dateInput.value;
    if (isDateChosen) {
      const dateObject = parseDateStringToDate(dateInput.value);
      console.log('dateObject: ', dateObject);
      const dayName = getDayNameFromDate(dateObject);
      console.log('dayName: ', dayName);

      toggleIconActiveStyle(clockIcon);
      toggleTimePickerVisibility();
      toggleSheduleVisibility();
      const isTimePickerVisible =
        !timePickerElement.classList.contains('isHidden');
      if (isTimePickerVisible) {
        setTimeInputValue();
      }
    } else {
      timeInput.value = 'Оберіть спочатку дату для прибирання';
    }
  });

  timeInput.addEventListener('blur', e => {
    const trimmedValue = extractTime(e.target.value);
    timeInput.value = trimmedValue;
  });

  clockIcon.addEventListener('click', e => {
    toggleTimePickerVisibility();
    toggleSheduleVisibility();
    toggleIconActiveStyle(e.target);
  });

  hourTablo.addEventListener('click', e =>
    onTimeCellClick(e, '.time-picker__hours')
  );

  minuteTablo.addEventListener('click', e =>
    onTimeCellClick(e, '.time-picker__minutes')
  );

  minutePicker.addEventListener('click', () =>
    toggleTablo(minuteTablo, hourTablo)
  );

  hourPicker.addEventListener('click', () =>
    toggleTablo(hourTablo, minuteTablo)
  );

  timePickerBtn.addEventListener('click', () => {
    toggleTimePickerVisibility();
    toggleSheduleVisibility();

    toggleIconActiveStyle(clockIcon);
  });

  function getClosestDateInput(timeInput) {
    return timeInput
      .closest('li')
      .previousElementSibling.querySelector('[name="userDate"]');
  }

  function getTimePickerElements(el) {
    const clockIcon =
      el.parentElement.previousElementSibling.querySelector('.icon--clock');
    const sheduleEl = el.parentElement.querySelector('.work-shedule');
    const hourTablo = el.querySelector('.tablo--hours');
    const minuteTablo = el.querySelector('.tablo--minutes');
    const hourPicker = el.querySelector('.time-picker__hours');
    const minutePicker = el.querySelector('.time-picker__minutes');
    const timePickerBtn = el.querySelector('.time-picker__btn');
    const timeInput =
      el.parentElement.previousElementSibling.querySelector(
        '[name="userTime"]'
      );
    return {
      clockIcon,
      sheduleEl,
      hourTablo,
      minuteTablo,
      hourPicker,
      minutePicker,
      timePickerBtn,
      timeInput,
    };
  }

  function setTimeInputValue() {
    timeInput.value = `${selectedTimeObj.hours} : ${selectedTimeObj.minutes}`;
  }

  function onTimeCellClick(e, blockSelector) {
    const clickedElement = e.target;
    if (!validateClickedNumber(clickedElement)) return;
    const partTimeName = getTimePartName(blockSelector);
    const elements = timePickerElement.querySelectorAll(`.${partTimeName}`);
    updateTimePickerTablo(clickedElement, elements);
    const block = timePickerElement.querySelector(blockSelector);
    const value = clickedElement.dataset.id;
    updateTimePickerBlock(block, value);
    updateTimeInput(blockSelector, value);
  }
  function toggleSheduleVisibility() {
    sheduleEl.classList.toggle('isHidden');
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

  function updateTimePickerBlock(block, value) {
    block.innerHTML = value;
  }
  function toggleTablo(tabloToShow, tabloToHide) {
    const isVisible = !tabloToShow.classList.contains('isHidden');
    if (isVisible) return;
    tabloToShow.classList.remove('isHidden');
    tabloToHide.classList.add('isHidden');
  }
  function toggleTimePickerVisibility() {
    timePickerElement.classList.toggle('isHidden');
  }
  function updateTimeInput(selector, value) {
    const partTime = getTimePartName(selector);
    selectedTimeObj[partTime] = value;
    setTimeInputValue();
  }
  function selectElement(element) {
    element.classList.add('active');
  }

  function deselectElement(element) {
    element.classList.remove('active');
  }

  function getTimePartName(selector) {
    return selector.split('__')[1];
  }

  function extractTime(inputString) {
    const trimmedString = inputString.trim();
    const timeMatch = trimmedString.match(/\d{2}\s*:\s*\d{2}/);
    return timeMatch ? timeMatch[0] : null;
  }
}
