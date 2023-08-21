const toolkitsList = document.querySelectorAll('.plus-btn--toolkit');
const roomsBtnList = document.querySelectorAll('.rooms__item');
const kitchenSchema = document.querySelector('.schema--kitchen');
const roomSchema = document.querySelector('.schema--room');
const bathSchema = document.querySelector('.schema--bath');

toolkitsList.forEach(el => {
  el.addEventListener('mouseenter', () => {
    toggleToolkitDescVisibility(el);
  });
  el.addEventListener('mouseleave', () => {
    toggleToolkitDescVisibility(el);
  });
});

roomsBtnList.forEach(el => {
  el.addEventListener('click', e => {
    onRoomBtnClick(e);
  });
});

function toggleToolkitDescVisibility(el) {
  const parentItem = el.closest('.toolkit__wrapper');
  const descItem = parentItem.querySelector(':first-child');
  descItem.classList.toggle('is-shown');
}

function onRoomBtnClick(e) {
  const clickedButton = e.target;
  if (clickedButton.classList.contains('rooms__item--current')) return;
  roomsBtnList.forEach(button => {
    if (button === clickedButton) {
      const id = button.id;
      setRoomSchemaToDisplay(id);
      button.classList.add('rooms__item--current');
    } else {
      button.classList.remove('rooms__item--current');
    }
  });
}

function setRoomSchemaToDisplay(id) {
  kitchenSchema.style.display = id === 'room-1' ? 'block' : 'none';
  roomSchema.style.display = id === 'room-2' ? 'block' : 'none';
  bathSchema.style.display = id === 'room-3' ? 'block' : 'none';
}
