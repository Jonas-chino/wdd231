// Import data from the data file
import { places } from '../data/discover.mjs';
// Wait for page to load
window.addEventListener('DOMContentLoaded', function() {
    loadCards();
    checkVisit();

});

// Function to create and display cards
// Function to create and display cards
function loadCards() {
    const container = document.getElementById('cardsContainer');
    
    // Loop through each place in the data
    places.forEach(function(place) {
        // Create card element
        const card = document.createElement('div');
        card.className = 'card';
        card.id = 'card' + place.id;
        
        // Create h2 for name
        const title = document.createElement('h2');
        title.textContent = place.name;
        
        // Create figure for image
        const figure = document.createElement('figure');
        figure.className = 'card-image';
        
        const img = document.createElement('img');
        img.src = place.image;
        img.alt = place.name;
        img.loading = 'lazy';
        img.width = 300;
        img.height = 200;
        
        figure.appendChild(img);
        
        // Create address
        const address = document.createElement('address');
        address.textContent = place.address;
        
        // Create description
        const description = document.createElement('p');
        description.textContent = place.description;
        
        // Create button
        const button = document.createElement('button');
        button.textContent = 'Learn More';
        button.addEventListener('click', function() {
            learnMore(place.name);
        });
        
        // Add all elements to card
        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);
        
        // Add card to page
        container.appendChild(card);
    });
}

// Function for Learn More button
function learnMore(placeName) {
    alert('Thanks for your interest in ' + placeName + '! Call us at (555) 123-4567 for more information.');
}

// Function to check localStorage and display visit message
function checkVisit() {
    const messageDiv = document.getElementById('visitMessage');
    const messageText = document.getElementById('messageText');
    
    // Get last visit from localStorage
    const lastVisit = localStorage.getItem('lastVisit');
    const today = Date.now();
    
    let message = '';
    
    if (!lastVisit) {
        // First visit
        message = 'Welcome! Let us know if you have any questions.';
    } else {
        // Calculate days since last visit
        const lastVisitDate = parseInt(lastVisit);
        const difference = today - lastVisitDate;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        
        if (days < 1) {
            // Same day return
            message = 'Back so soon! Awesome!';
        } else if (days === 1) {
            // One day ago - singular
            message = 'You last visited 1 day ago.';
        } else {
            // Multiple days - plural
            message = 'You last visited ' + days + ' days ago.';
        }
    }
    
    // Show message
    messageText.textContent = message;
    messageDiv.classList.remove('hidden');
    
    // Save current visit
    localStorage.setItem('lastVisit', today.toString());
    
    // Hide message after 10 seconds
    setTimeout(function() {
        messageDiv.classList.add('hidden');
    }, 10000);
}

