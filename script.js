const closeButton = document.getElementById('closeButton');
const mobileMenu = document.getElementById('mobileMenu');
const menuButton = document.getElementById('menuButton');

closeButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

menuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
});


// document.addEventListener("DOMContentLoaded", function () {
//     const openMenuButton = document.querySelector('button[aria-label="Open main menu"]');
//     const closeMenuButton = document.querySelector('button[aria-label="Close menu"]');
//     const mobileMenu = document.querySelector('.lg\\:hidden[role="dialog"]');

//     openMenuButton.addEventListener("click", function () {
//       mobileMenu.classList.remove("hidden");
//     });

//     closeMenuButton.addEventListener("click", function () {
//       mobileMenu.classList.add("hidden");
//     });
//   });



