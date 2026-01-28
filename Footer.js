// Footer.js
export function renderFooter() {
  const footer = document.createElement('div');
  footer.className = 'footer';
  footer.innerHTML = `
    <hr/>
    <p>رقم الشكوى والتواصل: 01099086421</p>
    <p>© 2026 متجر الطورية</p>
  `;
  return footer;
}
