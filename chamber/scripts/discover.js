
import { places } from '../data/discover.mjs';

window.addEventListener('DOMContentLoaded', function() {
    loadCards();
    checkVisit();

});

function loadCards() {
    const container = document.getElementById('cardsContainer');
    

    places.forEach(function(place) {

        const card = document.createElement('div');
        card.className = 'card';
        card.id = 'card' + place.id;
        
  
        const title = document.createElement('h2');
        title.textContent = place.name;
        
 
        const figure = document.createElement('figure');
        figure.className = 'card-image';
        
        const img = document.createElement('img');
        img.src = place.image;
        img.alt = place.name;
        img.loading = 'lazy';
        img.width = 300;
        img.height = 200;
        
        figure.appendChild(img);
        

        const address = document.createElement('address');
        address.textContent = place.address;
        

        const description = document.createElement('p');
        description.textContent = place.description;
        

        const button = document.createElement('button');
        button.textContent = 'Learn More';
        button.addEventListener('click', function() {
            learnMore(place.name);
        });
        

        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);
        

        container.appendChild(card);
    });
}


function learnMore(placeName) {
    alert('Thanks for your interest in ' + placeName + '! Call us at (555) 123-4567 for more information.');
}


function checkVisit() {
    const messageDiv = document.getElementById('visitMessage');
    const messageText = document.getElementById('messageText');
    

    const lastVisit = localStorage.getItem('lastVisit');
    const today = Date.now();
    
    let message = '';
    
    if (!lastVisit) {
 
        message = 'Welcome! Let us know if you have any questions.';
    } else {
   
        const lastVisitDate = parseInt(lastVisit);
        const difference = today - lastVisitDate;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        
        if (days < 1) {

            message = 'Back so soon! Awesome!';
        } else if (days === 1) {

            message = 'You last visited 1 day ago.';
        } else {

            message = 'You last visited ' + days + ' days ago.';
        }
    }
    

    messageText.textContent = message;
    messageDiv.classList.remove('hidden');
    

    localStorage.setItem('lastVisit', today.toString());
    
    setTimeout(function() {
        messageDiv.classList.add('hidden');
    }, 10000);
}

