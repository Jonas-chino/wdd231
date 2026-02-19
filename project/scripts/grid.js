const gridBtn = document.querySelector('#grid-view');
const listBtn = document.querySelector('#list-view');
const container = document.querySelector('#menu-container');


listBtn.addEventListener('click', () => {
    container.classList.add('list');
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
});


gridBtn.addEventListener('click', () => {
    container.classList.remove('list');
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
});