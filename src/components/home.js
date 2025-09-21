function renderHome() {
  const content = document.querySelector('.content');

  const container = document.createElement('div');
  container.setAttribute('id', 'home-container'); 

  const header = document.createElement('h1');
  header.textContent = "Cece's Corner Bistro";

  const caption = document.createElement('p');
  caption.textContent = 'YOUR NEXT GREAT MEAL STARTS HERE.';

  const button = document.createElement('button');
  button.textContent = 'BOOK A TABLE NOW';
  
  container.append(header, caption, button);
  content.append(container);
}

export default renderHome;