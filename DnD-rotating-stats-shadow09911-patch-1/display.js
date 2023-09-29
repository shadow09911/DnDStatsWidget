// Initialize characters with data from localStorage, or an empty array if not present
let characters = JSON.parse(localStorage.getItem('characters')) || [];

// Function to display character stats on the index.html page
function displayCharacterStats(characters, currentIndex) {
    const characterNameElement = document.getElementById("name");
    const hpElement = document.getElementById("hp");
    const acElement = document.getElementById("ac");
    const strElement = document.getElementById("str");
    const dexElement = document.getElementById("dex");
    const conElement = document.getElementById("con");
    const intElement = document.getElementById("int");
    const wisElement = document.getElementById("wis");
    const chaElement = document.getElementById("cha");

    const character = characters[currentIndex];

    if (character) {
        characterNameElement.textContent = character.name;
        hpElement.textContent = `HP: ${character.hp}`;
        acElement.textContent = `AC: ${character.ac}`;
        strElement.textContent = `STR: ${character.str}`;
        dexElement.textContent = `DEX: ${character.dex}`;
        conElement.textContent = `CON: ${character.con}`;
        intElement.textContent = `INT: ${character.int}`;
        wisElement.textContent = `WIS: ${character.wis}`;
        chaElement.textContent = `CHA: ${character.cha}`;
    }
}

let currentIndex = 0;

// Automatically cycle through characters every 10 seconds on index.html
setInterval(() => {
    currentIndex = (currentIndex + 1) % characters.length;
    if (currentIndex === 0) {
        // Refresh the characters data when currentIndex resets to 0
        characters = JSON.parse(localStorage.getItem('characters')) || [];
    }
    displayCharacterStats(characters, currentIndex);
}, 5000); // Change 5000 to 10000 for a 10-second interval

// Call displayCharacterStats to display the first character on index.html
displayCharacterStats(characters, currentIndex);
