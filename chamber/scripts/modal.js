// // Set timestamp when page loads
// document.getElementById('timestamp').value = new Date().toLocaleString();

// // Hamburger menu toggle
// const menuBtn = document.getElementById('menu-btn');
// const navList = document.getElementById('navlist');

// menuBtn.addEventListener('click', function() {
//     navList.classList.toggle('open');
// });

// // Modal Functions - Open
// const learnBtns = document.querySelectorAll('#learn-more-btn');

// learnBtns.forEach(function(btn) {
//     btn.addEventListener('click', function() {
//         const modalId = this.getAttribute('data-modal');
//         const modal = document.getElementById(modalId);
//         modal.style.display = 'block';
//         document.body.style.overflow = 'hidden';
//     });
// });

// // Modal Functions - Close with X button
// const closeBtns = document.querySelectorAll('.close');

// closeBtns.forEach(function(btn) {
//     btn.addEventListener('click', function() {
//         const modalId = this.getAttribute('data-modal');
//         const modal = document.getElementById(modalId);
//         modal.style.display = 'none';
//         document.body.style.overflow = 'auto';
//     });
// });

// // Close modal when clicking outside of it
// window.addEventListener('click', function(event) {
//     if (event.target.classList.contains('modal')) {
//         event.target.style.display = 'none';
//         document.body.style.overflow = 'auto';
//     }
// });

// // Close modal with Escape key
// document.addEventListener('keydown', function(event) {
//     if (event.key === 'Escape') {
//         const modals = document.querySelectorAll('.modal');
//         modals.forEach(function(modal) {
//             if (modal.style.display === 'block') {
//                 modal.style.display = 'none';
//                 document.body.style.overflow = 'auto';
//             }
//         });
//     }
// });

// // Update footer with current year and last modified date
// document.getElementById('currentyear').textContent = new Date().getFullYear();
// document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;







