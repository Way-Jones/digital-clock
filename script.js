// Function to update the clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Function to toggle between light and dark mode
function toggleMode() {
    const body = document.body;
    const button = document.getElementById('toggle-button');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.textContent = 'Switch to Dark Mode';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        button.textContent = 'Switch to Light Mode';
    }
}

// Set initial mode
document.body.classList.add('light-mode');

// Update the clock every second
setInterval(updateClock, 1000);

// Add event listener to the toggle button
document.getElementById('toggle-button').addEventListener('click', toggleMode);

// Initialize the clock display
updateClock();