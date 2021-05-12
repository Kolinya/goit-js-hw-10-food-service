import dishes from '../menu.json';
import dishesMarkup from '../templates/temps.hbs';

const menuItem = document.querySelector('.js-menu');
const addMarkup = dishesMarkup(dishes);

menuItem.insertAdjacentHTML('beforeend', addMarkup);

const refs = {
  body: document.querySelector('body'),
  switcher: document.querySelector('#theme-switch-toggle'),
};

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switcher.addEventListener('change', switchBox);

if (localStorage.getItem('theme')) {
  refs.body.classList.add(localStorage.getItem('theme'));
} else {
  refs.body.classList.add(theme.LIGHT);
}

refs.switcher.cheked = localStorage.getItem('theme') === theme.DARK;

function switchBox() {
  if (this.checked) {
    changeTheme(theme.LIGHT, theme.DARK);
  } else {
    changeTheme(theme.DARK, theme.LIGHT);
  }
}
function changeTheme(oldTheme, newTheme) {
  refs.body.classList.remove(oldTheme);
  refs.body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
}
