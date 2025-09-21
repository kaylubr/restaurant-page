function renderContact() {
  const content = document.querySelector('.content');

  const contactContainer = document.createElement('div');
  contactContainer.setAttribute('id', 'contact-container');

  const container = document.createElement('div');
  contactContainer.append(container);

  const header = document.createElement('h1');
  header.textContent = "Contact Us";
  const email = document.createElement('p');
  email.textContent = 'Email: cece@example.com';
  const contact = document.createElement('p');
  contact.textContent = 'Contact Number: +123456-789-000';
  const officeAddress = document.createElement('p');
  officeAddress.textContent = 'Office Address';
  const address = document.createElement('p');
  address.textContent = 'Makati, Metro Manila';
  const officeHours = document.createElement('p');
  officeHours.textContent = 'Office Hours';
  const hours = document.createElement('p');
  hours.textContent = 'Monday to Friday, 8 AM - 4 PM';

  container.append(header, email, contact, officeAddress, address, officeHours, hours);
  content.append(contactContainer);
}

export default renderContact;