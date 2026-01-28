// Navbar.js
export function renderNavbar() {
  const navbar = document.createElement('div');
  navbar.className = 'navbar';
  navbar.innerHTML = `
    <h2>متجر الطورية</h2>
    <div class="nav-links">
      <button onclick="filterCategory('all')">الكل</button>
      <button onclick="filterCategory('furniture')">أثاث</button>
      <button onclick="filterCategory('bedrooms')">غرف نوم</button>
      <button onclick="filterCategory('doors')">أبواب</button>
      <button onclick="filterCategory('windows')">شبابيك</button>
    </div>
    <hr/>
  `;
  return navbar;
}

// وظيفة لتصفية المنتجات حسب القسم
window.filterCategory = function(category) {
  const main = document.querySelector('.main-content');
  if (!main) return;

  const cards = main.querySelectorAll('.product-card');
  cards.forEach(card => {
    if (category === 'all' || card.innerHTML.includes(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
