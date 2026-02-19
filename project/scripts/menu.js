const menuButton = document.querySelector('#menu-button');
const navList = document.querySelector('#navlist');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('open');
    
    if (navList.classList.contains('open')) {
        menuButton.textContent = '✕';
    } else {
        menuButton.textContent = '☰';
    }
})