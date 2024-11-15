const contactBtn = document.getElementById('contactBtn');
const popup = document.getElementById('popupContact');
const closeBtn = document.getElementById('popupClose');

document.addEventListener('DOMContentLoaded', () => {
    popup.style.display = 'none';
});

contactBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});
