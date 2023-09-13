const buildingsBtnList = document.querySelectorAll('.buildings__element');
const increaseSquareBtn = document.querySelector('.control-quantity-btn--plus');
const decreaseSquareBtn = document.querySelector(
  '.control-quantity-btn--minus'
);

const squareValueElementsList = document.querySelectorAll('.square-value');
const serviceCheckboxList = document.querySelectorAll(
  '.service-element .checkbox'
);
const totalCostTableElement = document.querySelector('.table__data');

increaseSquareBtn.addEventListener('click', onChangeSquareBtnClick);
decreaseSquareBtn.addEventListener('click', onChangeSquareBtnClick);
buildingsBtnList.forEach(el => {
  el.addEventListener('click', e => {
    onBuldingTypeBtnClick(e);
  });
});

serviceCheckboxList.forEach(el => {
  el.addEventListener('change', e => {
    toggleServiceItem(e);
  });
});

let currentSquareValue = 1;

function onBuldingTypeBtnClick(e) {
  const clickedButton = e.target;
  if (clickedButton.classList.contains('buildings__element--current')) return;
  buildingsBtnList.forEach(button => {
    if (button === clickedButton) {
      const id = button.id;
      button.classList.add('buildings__element--current');
    } else {
      button.classList.remove('buildings__element--current');
    }
  });
}

function updateSquareInterfaceValue() {
  squareValueElementsList.forEach(el => {
    el.textContent = currentSquareValue;
  });
}

function onChangeSquareBtnClick(e) {
  const clickedBtn = e.currentTarget.className.split(' ')[1];
  changeSquareValue(clickedBtn);
  updateSquareInterfaceValue();
  updateSquareTotalCost();
  updateMinusBtnStyle();
}

function changeSquareValue(clickedBtn) {
  if (clickedBtn === 'control-quantity-btn--plus') {
    currentSquareValue += 1;
  } else if (clickedBtn === 'control-quantity-btn--minus') {
    if (currentSquareValue === 1) return;
    currentSquareValue -= 1;
  }
}

function updateMinusBtnStyle() {
  const decreaseSquareIcon = document.querySelector(
    '.control-quantity-btn--minus .icon--minus'
  );
  if (currentSquareValue === 1) {
    decreaseSquareIcon.style.fill = 'rgba(	77, 18, 153, 0.3)';
  } else {
    decreaseSquareIcon.style.fill = '#4D1299';
  }
}

function updateSquareTotalCost() {
  const totalSquareCostEl = document.querySelector('#squareValue');
  totalSquareCostEl.textContent = `${2 * currentSquareValue}`;
}

function toggleServiceItem(e) {
  const el = e.currentTarget;
  const label = el.closest('label');
  const controlQuantityBlock = label.nextElementSibling;
  controlQuantityBlock.classList.toggle(`isHidden`, !el.checked);
  const serviceItem = createServiceItem(label);
  const isServiceChosen = el.checked;
  updateTotalCostTable(isServiceChosen, serviceItem);
}

function createServiceItem(element) {
  console.log('element: ', element);
  const serviceName = element.querySelector(
    '.service-element__text'
  ).textContent;
  const servicePrice = element
    .querySelector('.service-element__accent')
    .getAttribute('data-value');
  const serviceID = element.getAttribute('data-id');
  const listItem = document.createElement('li');
  listItem.className = 'table__item table__block';
  const nameSpan = document.createElement('span');
  nameSpan.className = 'item__name';
  nameSpan.textContent = `${serviceName}`;
  const spaceTextNode = document.createTextNode('\u00A0');
  const quantitySpan = document.createElement('span');
  quantitySpan.className = 'item__quantity';
  quantitySpan.textContent = 'x1';
  nameSpan.appendChild(spaceTextNode);
  nameSpan.appendChild(quantitySpan);
  const valueSpan = document.createElement('span');

  valueSpan.className = 'service-value';
  valueSpan.textContent = `${servicePrice}zł`;
  listItem.appendChild(nameSpan);
  listItem.appendChild(valueSpan);
  listItem.id = serviceID;

  return listItem;
}

function updateTotalCostTable(isServiceChosen, item) {
  const itemId = item.id;
  const tableElementsList = totalCostTableElement.querySelectorAll('li');
  console.log('tableElementsList: ', tableElementsList);
  const chosenItem = [...tableElementsList].find(el => el.id === itemId);
  console.log('chosenItem : ', chosenItem);
  if (isServiceChosen && !chosenItem) {
    totalCostTableElement.insertAdjacentElement('beforeend', item);
  }
}
