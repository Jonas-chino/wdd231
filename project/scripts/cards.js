
const url = "data/menu.json"; 

async function getMenuData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMenu(data.menu); 
    } catch (error) {
        console.error("failed to load json data :", error);
    }
}

const displayMenu = (platos) => {
    const container = document.querySelector('#menu-container');

    platos.forEach((plato) => {

        let card = document.createElement('section');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let img = document.createElement('img');
        let div = document.createElement('div');

        card.setAttribute('class', 'card');
        div.setAttribute('class', 'card-content');

        h3.textContent = plato.name;
        p.textContent = plato.description;

        img.setAttribute('src', plato.image);
        img.setAttribute('alt', `Imagen de ${plato.name}`);
        img.setAttribute('loading', 'lazy'); 
        img.setAttribute('width', '400');
        img.setAttribute('height', '250');

        div.appendChild(h3);
        div.appendChild(p);
        card.appendChild(img);
        card.appendChild(div);

        container.appendChild(card);
    });
}

getMenuData();