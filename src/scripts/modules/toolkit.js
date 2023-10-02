const toolkitsList = document.querySelectorAll('.plus-btn--toolkit');
const roomsBtnList = document.querySelectorAll('.rooms__item');
const kitchenSchema = document.querySelector('.schema--kitchen');
const roomSchema = document.querySelector('.schema--room');
const bathSchema = document.querySelector('.schema--bath');
const roomsShemaList = document.querySelectorAll('.rooms__schema');
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
  const classListToRemove = [
    'rooms__schema--current',
    'rooms__schema--next',
    'rooms__schema--prev',
  ];

  [...roomsShemaList].forEach(el => {
    classListToRemove.forEach(className => {
      el.classList.remove(className);
    });
  });

  if (id === 'room-1') {
    kitchenSchema.classList.add('rooms__schema--current');
    roomSchema.classList.add('rooms__schema--next');
    bathSchema.classList.add('rooms__schema--prev');
  } else if (id === 'room-2') {
    kitchenSchema.classList.add('rooms__schema--prev');
    roomSchema.classList.add('rooms__schema--current');
    bathSchema.classList.add('rooms__schema--next');
  } else if (id === 'room-3') {
    kitchenSchema.classList.add('rooms__schema--next');
    roomSchema.classList.add('rooms__schema--prev');
    bathSchema.classList.add('rooms__schema--current');
  }
}
