import { getUserOrderDataFromStorage } from './user-order-form';
import { appendElement } from './common';
const userOrderDataObj = getUserOrderDataFromStorage();
const tableServices = document.querySelector('.success-order-services-table');
const tableServicesBody = document.querySelector(
  '.success-order-services-table tbody'
);
console.log('userOrderDataObj: ', userOrderDataObj);

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
  } else {
    hideOrderServicesTable();
  }

  populateServiceRows(userServices);
}

function populateServiceRows(userServices) {
  userServices.forEach(({ name, quantity, cost }) => {
    const serviceRow = createTableRow(name, quantity, cost);
    appendElement(tableServicesBody, serviceRow);
  });
}

function hideOrderServicesTable() {
  tableServices.style.display = 'none';
}

function showUserOrderResultData() {
  populateUserOrderTable();
  populateUserServicesTable();
}

showUserOrderResultData();
