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
const takeKeysBtn = document.querySelector('#take-keys-btn');
const giveKeysBtn = document.querySelector('#give-keys-btn');
const keysAddressBlock = document.querySelector('.keys-address-block');
const addressTakeBlock = document.querySelector(
  '.keys-address-block__take-item'
);
const addressGiveBlock = document.querySelector(
  '.keys-address-block__give-item'
);

increaseSquareBtn.addEventListener('click', handleSquareQuantityChange);
decreaseSquareBtn.addEventListener('click', handleSquareQuantityChange);
takeKeysBtn.addEventListener('click', handleKeyBtn);
giveKeysBtn.addEventListener('click', handleKeyBtn);
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

const serviceInfo = {
  square: { quantity: 1, price: 2 },
  windowsStandard: { quantity: 1, price: 35 },
  windowsLarge: { quantity: 1, price: 40 },
  microWave: { quantity: 1, price: 15 },
  refrigerator: { quantity: 1, price: 40 },
  plate: { quantity: 1, price: 35 },
  officeChair: { quantity: 1, price: 20 },
  sofaDry2x: { quantity: 1, price: 109.99 },
  sofaDry3x: { quantity: 1, price: 129.99 },
  sofaDry4x: { quantity: 1, price: 149.99 },
};

const userOrderInfo = {
  square: { quantity: 1, price: 2 },
  windowsStandard: { quantity: 0, price: 35 },
  windowsLarge: { quantity: 0, price: 40 },
  microWave: { quantity: 0, price: 15 },
  refrigerator: { quantity: 0, price: 40 },
  plate: { quantity: 0, price: 35 },
  officeChair: { quantity: 0, price: 20 },
  sofaDry2x: { quantity: 0, price: 109.99 },
  sofaDry3x: { quantity: 0, price: 129.99 },
  sofaDry4x: { quantity: 0, price: 149.99 },
};

function updateServiceItemInterface(serviceName) {
  const servicesElementsList = document.querySelectorAll('.service-element');
  const label = [...servicesElementsList].find(
    el => el.getAttribute('data-id') === serviceName
  );
  const itemQntEl = label?.nextElementSibling.querySelector(
    `[data-name="${serviceName}"]`
  );
  const squareEl = document
    .querySelector('.wrap--square')
    .querySelector(`[data-name="${serviceName}"]`);
  if (itemQntEl) {
    itemQntEl.textContent = serviceInfo[serviceName].quantity;
  }
  if (squareEl) {
    squareEl.textContent = serviceInfo[serviceName].quantity;
    const squareInTotal = document.querySelector('.square-value-total');
    squareInTotal.textContent = serviceInfo[serviceName].quantity;
  }
}

function updateQuantityData(itemName, operation) {
  if (operation === 'plus') {
    serviceInfo[itemName].quantity += 1;
  } else if (operation === 'minus') {
    if (serviceInfo[itemName].quantity === 1) return;
    serviceInfo[itemName].quantity -= 1;
  }
}

function changeOrderItemQuantity(e) {
  const serviceName = getChosenServiceName(e);
  const operationType = getClickedBtnType(e);
  updateQuantityData(serviceName, operationType);
  updateServiceItemInterface(serviceName);
  updateMinusBtnStyle(serviceName);
}

function handleServiceQuantityChange(e) {
  const serviceName = getChosenServiceName(e);
  changeOrderItemQuantity(e);
  updateTotalCostForService(serviceName);
  calculateTotalOrderCost();
}

function handleSquareQuantityChange(e) {
  changeOrderItemQuantity(e);
  updateSquareTotalCost();
  calculateTotalOrderCost();
}

function updateTotalCostForService(serviceName) {
  const orderServiceTotalCost = document.querySelector(
    `[data-service="${serviceName}"]`
  );
  const orderServiceTotalQuantity = document.querySelector(
    `#${serviceName} .service-quantity`
  );

  const price = serviceInfo[serviceName].price;
  if (orderServiceTotalCost && orderServiceTotalQuantity) {
    const updatedQuantity = updateServiceQuantity(serviceName);
    const cost = (updatedQuantity * price).toFixed(2);
    orderServiceTotalCost.textContent = `${cost}zł`;
    orderServiceTotalQuantity.textContent = updatedQuantity;
  } else {
    updateServiceQuantity(serviceName, 0);
  }
}

function updateSquareTotalCost() {
  const totalSquareCostEl = document.querySelector(`[data-service="square"]`);
  userOrderInfo.square.quantity = serviceInfo.square.quantity;
  totalSquareCostEl.textContent = `${
    userOrderInfo.square.quantity * userOrderInfo.square.price
  }zł`;
}

function toggleServiceItem(e) {
  const el = e.currentTarget;
  const label = el.closest('label');
  const controlQuantityBlock = label.nextElementSibling;
  const isServiceChosen = el.checked;
  toggleControlQuantityBlock(controlQuantityBlock, isServiceChosen);
  attachQuantityButtonListeners(controlQuantityBlock);
  const serviceItem = createServiceItem(label);
  const serviceName = label.getAttribute('data-id');
  updateTotalServicesTable(isServiceChosen, serviceItem);
  updateTotalCostForService(serviceName);
  calculateTotalOrderCost();
}

function toggleControlQuantityBlock(controlQuantityBlock, isVisible) {
  controlQuantityBlock.classList.toggle('isHidden', !isVisible);
}

function attachQuantityButtonListeners(controlQuantityBlock) {
  const increaseQuantityBtn = controlQuantityBlock.querySelector(
    '.control-quantity-btn--plus'
  );
  const decreaseQuantityBtn = controlQuantityBlock.querySelector(
    '.control-quantity-btn--minus'
  );

  increaseQuantityBtn.addEventListener('click', handleServiceQuantityChange);
  decreaseQuantityBtn.addEventListener('click', handleServiceQuantityChange);
}

function updateTotalServicesTable(isServiceChosen, item) {
  const serviceName = item.id;
  const serviceInTable = findServiceInTable(serviceName);
  if (isServiceChosen && !serviceInTable) {
    addToTotalCostTable(item);
    updateServiceQuantity(serviceName);
  } else if (!isServiceChosen && serviceInTable) {
    updateServiceQuantity(serviceName, 0);
    removeFromTotalCostTable(serviceInTable);
  }
}

function updateServiceQuantity(serviceName, quantity) {
  const updatedQuantity =
    quantity !== undefined ? quantity : serviceInfo[serviceName].quantity;
  userOrderInfo[serviceName].quantity = updatedQuantity;
  return updatedQuantity;
}

function calculateTotalOrderCost() {
  const totalOrderCost = Object.keys(userOrderInfo)
    .reduce((acc, propertyName) => {
      const property = userOrderInfo[propertyName];
      return acc + property.quantity * property.price;
    }, 0)
    .toFixed(2);
  const totalOrderCostEl = document.querySelector('.total-order-value');
  totalOrderCostEl.textContent = `${totalOrderCost}zł`;
}

function createSpan(className, textContent) {
  const span = document.createElement('span');
  if (className) {
    span.className = className;
  }
  if (textContent) {
    span.textContent = textContent;
  }
  return span;
}

function createServiceItem(element) {
  const serviceName = element.querySelector(
    '.service-element__text'
  ).textContent;
  const servicePrice = element
    .querySelector('.service-element__accent')
    .getAttribute('data-value');
  const serviceID = element.getAttribute('data-id');
  const listItem = document.createElement('li');
  listItem.id = serviceID;
  listItem.className = 'table__item table__block';
  const nameSpan = createSpan('item__name', `${serviceName}`);
  const textSpan = createSpan('', `x`);
  const nameWrapper = createSpan('name-wrapper');
  const quantityWrapper = createSpan('quantity-wrapper');
  const quantitySpan = createSpan(
    'item__quantity service-quantity',
    serviceInfo[serviceID].quantity
  );
  appendChildNodes(quantityWrapper, [textSpan, quantitySpan]);
  appendChildNodes(nameWrapper, [nameSpan, quantityWrapper]);
  const valueSpan = createSpan('service-value', `${servicePrice}zł`);
  valueSpan.setAttribute('data-service', serviceID);
  appendChildNodes(listItem, [nameWrapper, valueSpan]);
  return listItem;
}

function appendChildNodes(parent, children) {
  children.forEach(child => {
    parent.appendChild(child);
  });
}

function getClickedBtnType(e) {
  const type = e.currentTarget.getAttribute('data-type');
  return type;
}

function getChosenServiceName(e) {
  const chosenServiceName = e.currentTarget
    ?.closest('.wrap--service')
    ?.parentNode.querySelector('label')
    ?.getAttribute('data-id');

  const squareEl = e.currentTarget
    ?.closest('.wrap--square')
    ?.getAttribute('data-id');
  return chosenServiceName || squareEl;
}

function findServiceInTable(serviceName) {
  const tableElementsList = totalCostTableElement.querySelectorAll('li');
  return [...tableElementsList].find(el => el.id === serviceName);
}

function addToTotalCostTable(item) {
  totalCostTableElement.insertAdjacentElement('beforeend', item);
}

function removeFromTotalCostTable(item) {
  totalCostTableElement.removeChild(item);
}

function onBuldingTypeBtnClick(e) {
  const clickedButton = e.target;
  if (clickedButton.classList.contains('buildings__element--current')) return;
  [...buildingsBtnList].forEach(button => {
    if (button === clickedButton) {
      const id = button.id;
      button.classList.add('buildings__element--current');
    } else {
      button.classList.remove('buildings__element--current');
    }
  });
}

function updateMinusBtnStyle(serviceName) {
  const decreaseSquareIcon = document
    .querySelector(`[data-name="${serviceName}"]`)
    .parentNode?.parentNode?.querySelector(
      '.control-quantity-btn--minus .icon--minus'
    );
  if (serviceInfo[serviceName].quantity === 1) {
    decreaseSquareIcon.style.fill = 'rgba(	77, 18, 153, 0.3)';
  } else {
    decreaseSquareIcon.style.fill = '#4D1299';
  }
}

function handleKeyBtn(e) {
  const btn = e.currentTarget;
  btn.classList.toggle('active');
  const addressType = btn.id;
  toggleAddressItem(addressType);
  toggleKeysAddressBlock();
}

function toggleAddressItem(addressType) {
  if (addressType === 'take-keys-btn') {
    addressTakeBlock.classList.toggle('isHidden');
  } else {
    addressGiveBlock.classList.toggle('isHidden');
  }
}

function toggleKeysAddressBlock() {
  const isAddressTakeBlockHidden =
    addressTakeBlock.classList.contains('isHidden');
  const isAddressGiveBlockHidden =
    addressGiveBlock.classList.contains('isHidden');

  if (isAddressTakeBlockHidden && isAddressGiveBlockHidden) {
    keysAddressBlock.classList.add('isHidden');
  } else {
    keysAddressBlock.classList.remove('isHidden');
  }
}
