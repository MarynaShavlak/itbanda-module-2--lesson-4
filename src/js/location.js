const locationInput = document.querySelector('#location-input');
const backdrop = document.querySelector('.backdrop--subscr');

function initMap() {
  const autocomplete = new google.maps.places.Autocomplete(locationInput);
  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();
  });
}

function handleInputFocusAndNotEmpty() {
  if (
    locationInput.value.trim() !== '' &&
    document.activeElement === locationInput
  ) {
    backdrop.style.overflow = 'hidden';
  } else {
    backdrop.style.overflow = 'auto';
  }
}

locationInput.addEventListener('input', handleInputFocusAndNotEmpty);
locationInput.addEventListener('focus', handleInputFocusAndNotEmpty);
locationInput.addEventListener('blur', handleInputFocusAndNotEmpty);

handleInputFocusAndNotEmpty();
