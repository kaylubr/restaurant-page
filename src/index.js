import "./style.css";
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Menu from './components/menu.js';

const nav = document.querySelector('nav');
const content = document.querySelector('.content');

nav.addEventListener('click', event => {
  const tab = event.target.id;

  if (!tab) return;
  
  // Resets page every click
  content.textContent = '';
  
  switch(tab) {
    case 'home':
      Home();
      break;
    case 'menu':
      Menu();
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
document.addEventListener('DOMContentLoaded', () => Home());