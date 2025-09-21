import "./style.css";
import Home from './home.js';
import About from './about.js';
import Contact from './contact.js';

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
      About();
      break;
    case 'contact':
      Contact();
      break;
  }
})

// Renders home page at initial render
// document.addEventListener('DOMContentLoaded', () => Home());