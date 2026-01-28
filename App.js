// App.js
import { showProducts } from './products.json';
import { renderNavbar } from './Navbar.js';
import { renderFooter } from './Footer.js';

function renderApp() {
  const root = document.getElementById('root');
  root.innerHTML = '';

  // Navbar
  root.appendChild(renderNavbar());

  // Main content
  const main = document.createElement('div');
  main.className = 'main-content';

  showProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-img" />
      <h3>${product.name}</h3>
      <p>${product.details}</p>
      <p>السعر: ${product.price} جنيه</p>
    `;

    main.appendChild(card);
  });

  root.appendChild(main);

  // Footer
  root.appendChild(renderFooter());
}

document.addEventListener('DOMContentLoaded', renderApp);
