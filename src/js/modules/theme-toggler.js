const themeToggler = document.querySelector('.theme-toggler-wrap');
const themeCircle = document.querySelector('.theme__circle');
const sunRays = document.querySelectorAll('.circle__ray');
const sunIcon = document.querySelector('.circle__sun');
const moonIcon = document.querySelector('.circle__moon');

themeToggler.addEventListener('click', () => {
  if (themeToggler.classList.contains('theme-toggler-wrap--light')) {
    themeToggler.classList.remove('theme-toggler-wrap--light');
    themeToggler.classList.add('theme-toggler-wrap--dark');
    themeCircle.classList.remove('theme__circle--light');
    themeCircle.classList.add('theme__circle--dark');
    sunIcon.classList.toggle('circle__sun--hidden');
    moonIcon.classList.toggle('circle__moon--hidden');
    sunRays.forEach(el => el.classList.toggle('circle__ray--hidden'));
  } else {
    themeToggler.classList.add('theme-toggler-wrap--light');
    themeToggler.classList.remove('theme-toggler-wrap--dark');
    themeCircle.classList.add('theme__circle--light');
    themeCircle.classList.remove('theme__circle--dark');
    sunRays.forEach(el => el.classList.toggle('circle__ray--hidden'));
    sunIcon.classList.toggle('circle__sun--hidden');

    moonIcon.classList.toggle('circle__moon--hidden');
  }
});

// themeToggler.addEventListener('click', () => {
//   themeToggler.classList.toggle('theme-toggler-wrap--light');
//   themeToggler.classList.toggle('theme-toggler-wrap--dark');
//   themeCircle.classList.toggle('theme__circle--light');
//   themeCircle.classList.toggle('theme__circle--dark');
// });
