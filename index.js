const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.main-menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
})