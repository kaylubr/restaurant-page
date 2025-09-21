import "./style.css";
import Home from './homepage.js';

const nav = document.querySelector('nav');
const content = document.querySelector('.content');

nav.addEventListener('click', event => {

  // Resets page every click
  content.textContent = '';

  const tab = event.target.id;
  switch(tab) {
    case 'home':
      Home();
      break;
    case 'menu':
      break;
    case 'about':
      break;
    case 'contanct':
      break;
  }
})

document.addEventListener('DOMContentLoaded', () => Home());