const themeToggler = document.querySelector('.theme-toggler-wrap');
const themeCircle = document.querySelector('.theme__circle');
const sunRays = document.querySelectorAll('.circle__ray');
const sunIcon = document.querySelector('.circle__sun');
const moonIcon = document.querySelector('.circle__moon');
const bodyEl = document.querySelector('body');
let currentTheme = 'light';

themeToggler.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  themeToggler.classList.toggle('theme-toggler-wrap--light');
  themeToggler.classList.toggle('theme-toggler-wrap--dark');
  themeCircle.classList.toggle('theme__circle--light');
  themeCircle.classList.toggle('theme__circle--dark');
  sunIcon.classList.toggle('circle__sun--hidden');
  moonIcon.classList.toggle('circle__moon--hidden');
  sunRays.forEach(el => el.classList.toggle('circle__ray--hidden'));
  bodyEl.classList.toggle('active-dark-theme');
});
