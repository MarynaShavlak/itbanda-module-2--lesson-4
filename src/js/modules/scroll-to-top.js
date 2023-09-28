const scrollToTopBtn = document.querySelector('#scrollToTopBtn');

function toggleButtonVisibility() {
  if (window.scrollY >= 50) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

window.addEventListener('scroll', toggleButtonVisibility);
scrollToTopBtn.addEventListener('click', scrollToTop);
