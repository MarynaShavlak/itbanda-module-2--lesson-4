import { toggleIconActiveStyle } from './common';
const timePickerElements = document.querySelectorAll('.time-picker-wrap');
timePickerElements.forEach(element => {
  initializeTimePicker(element);
});

function initializeTimePicker(timePickerElement) {
  const clockIcon =
    timePickerElement.previousElementSibling.querySelector('.icon--clock');
  const hourTablo = timePickerElement.querySelector('.tablo--hours');
  const minuteTablo = timePickerElement.querySelector('.tablo--minutes');
  const hourPicker = timePickerElement.querySelector('.time-picker__hours');
  const minutePicker = timePickerElement.querySelector('.time-picker__minutes');
  const timePickerBtn = timePickerElement.querySelector('.time-picker__btn');
  const timeInput =
    timePickerElement.previousElementSibling.querySelector('[name="userTime"]');
  const selectedTimeObj = { hours: '20', minutes: '00' };

  timeInput.addEventListener('click', () => {
    toggleIconActiveStyle(clockIcon);
    toggleTimePickerVisibility();
    const isTimePickerVisible =
      !timePickerElement.classList.contains('isHidden');
    if (isTimePickerVisible) {
      setTimeInputValue();
    }
  });

  timeInput.addEventListener('blur', e => {
    const trimmedValue = extractTime(e.target.value);
    timeInput.value = trimmedValue;
  });

  clockIcon.addEventListener('click', e => {
    toggleTimePickerVisibility();
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
    toggleIconActiveStyle(clockIcon);
  });
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
