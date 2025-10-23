// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Select all the interactive elements
    const circles = document.querySelectorAll('.circle');
    
    // Select the display elements that will be updated
    const userDisplay = document.getElementById('user');
    const dateDisplay = document.getElementById('date');
    const atesDisplay = document.getElementById('stat-ates');
    const aspectDisplay = document.getElementById('stat-aspect');
    const lengthDisplay = document.getElementById('stat-length');
    const pitchesDisplay = document.getElementById('stat-pitches');

    // Function to update all the info based on a clicked circle
    function updateInfo(circle) {
        // Get data from the clicked circle's 'data-*' attributes
        const { user, date, ates, aspect, length, pitches } = circle.dataset;

        // Update the text content of the display elements
        userDisplay.textContent = user;
        dateDisplay.textContent = date;
        atesDisplay.textContent = ates;
        aspectDisplay.textContent = aspect;
        lengthDisplay.textContent = length;
        pitchesDisplay.textContent = pitches;
    }

    // Add a click event listener to each circle
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            // 1. Remove the 'active' class from all circles
            circles.forEach(c => c.classList.remove('active'));
            
            // 2. Add the 'active' class to the one that was clicked
            circle.classList.add('active');
            
            // 3. Update all the info displayed on the page
            updateInfo(circle);
        });
    });

    // Optional: Initialize the page with the data from the default 'active' circle
    const initialActive = document.querySelector('.circle.active');
    if (initialActive) {
        updateInfo(initialActive);
    }
});
