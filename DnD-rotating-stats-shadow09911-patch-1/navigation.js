// Add an event listener to the "Add Character" button
document.getElementById("add-character-button").addEventListener("click", function () {
    openCharacterEntryPage();
});

// Function to open character-entry.html
function openCharacterEntryPage() {
    window.location.href = 'character-entry.html';
}