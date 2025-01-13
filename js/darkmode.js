// FIRST get the current theme from LocalStorage
let darkmode = localStorage.getItem('darkmode');

// Query the Theme Switch button
const themeSwitch = document.getElementById('theme_switch');

// Functions for the toggle of the Dark/Light button

// Function to enable Darkmode
const enableDarkmode = () => {
    // Add the darkmode class of the html body
    document.body.classList.add('darkmode');
    // Set the LocalStorage to darkmode as active
        // LocalStorage only stores strings
    localStorage.setItem('darkmode', 'active');
}

// Function to disable Darkmode
const disableDarkmode = () => {
    // Remove the darkmode class of the html body
    document.body.classList.remove('darkmode');
    // Set the LocalStorage to darkmode as null
    localStorage.setItem('darkmode', null);
}

// Enable darkmode if it's installed in LocalStorage
// You have to tell it what to do based on what's in LocalStorage
if(darkmode === 'active') {
    enableDarkmode();
};

// NOW add an event listener to the theme switch button
themeSwitch.addEventListener('click', () => {
    // Test Button
    console.log("Theme Switch Pressed");
    // Get theme set in LocalStorage
    darkmode = localStorage.getItem('darkmode');
    // conditional to see if darkmode is active or not
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
});

