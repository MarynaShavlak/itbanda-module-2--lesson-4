import { appendElement } from './common';
import { getDataFromStorage, resetLocalStorage } from './local-storage';
const userOrderDataObj = getDataFromStorage('userOrderDataObj');
const tableServices = document.querySelector('.success-order-services-table');
const tableInfo = document.querySelector('.success-order-info-table');
const sectionSuccess = document.querySelector('.section--success');
const tableServicesBody = document.querySelector(
  '.success-order-services-table tbody'
);
const backToHomeBtn = document.querySelector('.back-to-home-btn');
backToHomeBtn.addEventListener('click', () =>
  resetLocalStorage('userOrderDataObj')
);

function populateUserOrderTable() {
  Object.entries(userOrderDataObj).forEach(([key, value]) => {
    const element = document.querySelector(
      `.success-order__value[data-field='${key}']`
    );

    if (element) {
      element.textContent = value;
      toggleRowDisplay(element.parentElement, value);
    }
  });
}

function toggleRowDisplay(row, value) {
  if (row) {
    row.style.display = value ? '' : 'none';
  }
}

function createTableRow(name, quantity, cost) {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <th class="success-order__name">${name}</th>
    <td class="success-order__value success-order__quantity">${quantity}</td>
    <td class="success-order__value success-order__cost">${cost}</td>
  `;
  return newRow;
}

function populateUserServicesTable() {
  const { userSquare, userServices } = userOrderDataObj;
  const isComplexOrder =
    userSquare.quantity.trim() !== '' || userSquare.cost.trim() !== '';

  if (isComplexOrder) {
    const newRow = createTableRow(
      'Площа, м²',
      userSquare.quantity,
      userSquare.cost
    );
    appendElement(tableServicesBody, newRow);
    populateServiceRows(userServices);
  } else {
    hideTable(tableServices);
  }
  setSectionSuccessStyle(isComplexOrder);
}

function populateServiceRows(userServices) {
  userServices.forEach(({ name, quantity, cost }) => {
    const serviceRow = createTableRow(name, quantity, cost);
    appendElement(tableServicesBody, serviceRow);
  });
}

function hideTable(table) {
  table.style.display = 'none';
}

function setSectionSuccessStyle(isComplexOrder) {
  if (isComplexOrder) {
    sectionSuccess.classList.add('isComplexOrder');
  } else {
    sectionSuccess.classList.remove('isComplexOrder');
  }
}

function showUserOrderResultData() {
  if (userOrderDataObj) {
    populateUserOrderTable();
    populateUserServicesTable();
  } else {
    hideTable(tableInfo);
    hideTable(tableServices);
  }
}

showUserOrderResultData();
