import '../styles/main.css';
import 'regenerator-runtime';
import App from './views/app';
import HeaderPage from './views/component/header';
import swRegister from './utils/sw-register';

document.addEventListener('DOMContentLoaded', () => {
  customElements.define('header-only', HeaderPage);
  const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('.nav-bar'),
    content: document.querySelector('#maincontent'),
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });
});

import('lodash.filter')
  .then((module) => {
    const filterContacts = module.default; // Memuat fungsi filter dari lodash.filter
    return filterContacts;
  })
  .then((filterContacts) => {
    const filter = (filter) => {
      filter(contacts, contactType.value === 'all' ? {} : { type: contactType.value })
        .forEach(renderContact);
    };
    filterContacts(filter); // Memanggil filterContacts dengan fungsi filter yang telah didefinisikan
  })
  .catch((error) => alert(error));


// Call toggleNavBar after the DOM is loaded
