// Theme switching functionality
const themeSwitch = document.getElementById('theme_switch');
const body = document.body;

themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // If the body contains dark mode, store it in a variable
    const isDarkMode = body.classList.contains('dark-mode');
    // store that variable into local storage
    localStorage.setItem('darkMode', isDarkMode);
});

// If the local storage is in dark mode, make the body of the page dark mode
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}

// Menu functionality
const menuButton = document.getElementById('menu_button');
const burgerIcon = document.getElementById('burger_one');
const burgerIcon2 = document.getElementById('burger_two');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.menu-overlay');

function toggleMenu() {
    burgerIcon.classList.toggle('active');
    burgerIcon2.classList.toggle('active');
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    // Body overflow set to ternery operator hidden or not hidden
    body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
}

menuButton.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
        toggleMenu();
    }
});
