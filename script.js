// HTML element references
const winsElement = document.getElementById('wins');
const lossesElement = document.getElementById('losses');

// Load values from Local Storage or default to 0
let wins = parseInt(localStorage.getItem('wins')) || 0;
let losses = parseInt(localStorage.getItem('losses')) || 0;

// Update HTML display
function renderCounter() {
    winsElement.textContent = wins + ' W';
    lossesElement.textContent = losses + ' L';
}

// Update logic for buttons
function updateCounter(type) {
    if (type === 'win_plus') {
        wins++;
    } else if (type === 'loss_plus') {
        losses++;
    } else if (type === 'win_minus') {
        if (wins > 0) wins--;
    } else if (type === 'loss_minus') {
        if (losses > 0) losses--;
    }

    // Save values
    localStorage.setItem('wins', wins);
    localStorage.setItem('losses', losses);
    
    renderCounter();
}

// Reset logic
function resetCounter() {
    if (confirm('Reset counter to 0-0?')) {
        wins = 0;
        losses = 0;
        localStorage.setItem('wins', 0);
        localStorage.setItem('losses', 0);
        renderCounter();
    }
}

// Initial render
renderCounter();
