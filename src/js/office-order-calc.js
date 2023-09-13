const buildingsBtnList = document.querySelectorAll('.buildings__element');
const increaseSquareBtn = document.querySelector('.control-quantity-btn--plus');
const decreaseSquareBtn = document.querySelector(
  '.control-quantity-btn--minus'
);

const squareValueEl = document.querySelector('.quantity-block__value');
increaseSquareBtn.addEventListener('click', onChangeSquareBtnClick);
decreaseSquareBtn.addEventListener('click', onChangeSquareBtnClick);
buildingsBtnList.forEach(el => {
  el.addEventListener('click', e => {
    onBuldingTypeBtnClick(e);
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
  squareValueEl.textContent = currentSquareValue;
}

function onChangeSquareBtnClick(e) {
  const clickedBtn = e.currentTarget.className.split(' ')[1];
  changeSquareValue(clickedBtn);
  updateSquareInterfaceValue();
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
