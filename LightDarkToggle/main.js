"use strict";

const modeToggle = document.getElementById('toggle-mode');
const slider = document.querySelector('.slider');

modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
        // Enable dark mode
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        // Disable dark mode
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
});
