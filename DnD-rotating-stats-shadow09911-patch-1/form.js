// Function to add a character to the existing data
function addCharacterToExistingData(newCharacter) {
    const existingCharacters = JSON.parse(localStorage.getItem('characters')) || [];
    existingCharacters.push(newCharacter);
    localStorage.setItem('characters', JSON.stringify(existingCharacters));
}

// Add event listener for form submission in character-entry.html
const characterForm = document.getElementById("character-form");
characterForm.addEventListener("submit", handleFormSubmission);

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent form submission

    // Collect input data
    const name = document.getElementById("name").value;
    const hp = parseInt(document.getElementById("hp").value);
    const ac = parseInt(document.getElementById("ac").value);
    const str = parseInt(document.getElementById("str").value);
    const dex = parseInt(document.getElementById("dex").value);
    const con = parseInt(document.getElementById("con").value);
    const int = parseInt(document.getElementById("int").value);
    const wis = parseInt(document.getElementById("wis").value);
    const cha = parseInt(document.getElementById("cha").value);

    // Create a new character object
    const newCharacter = {
        name: name,
        hp: hp,
        ac: ac,
        str: str,
        dex: dex,
        con: con,
        int: int,
        wis: wis,
        cha: cha
    };

    // Add the new character to existing data (if any)
    addCharacterToExistingData(newCharacter);

    // Redirect back to the contents page (assuming it's named "contents.html")
    window.location.href = "contentsv2.html";
}
