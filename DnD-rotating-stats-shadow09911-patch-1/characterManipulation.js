// Function to edit a character
function editCharacter(index) {
    const character = characters[index];

    // Prompt the user to edit character details
    const newName = prompt("Edit Character Name:", character.name);
    const newHP = parseInt(prompt("Edit HP:", character.hp));
    const newAC = parseInt(prompt("Edit AC:", character.ac));
    const newStr = parseInt(prompt("Edit STR:", character.str));
    const newDex = parseInt(prompt("Edit DEX:", character.dex));
    const newCon = parseInt(prompt("Edit CON:", character.con));
    const newInt = parseInt(prompt("Edit INT:", character.int));
    const newWis = parseInt(prompt("Edit WIS:", character.wis));
    const newCha = parseInt(prompt("Edit CHA:", character.cha));

    if (newName !== null && !isNaN(newHP) && !isNaN(newAC) && !isNaN(newStr) && !isNaN(newDex) && !isNaN(newCon) && !isNaN(newInt) && !isNaN(newWis) && !isNaN(newCha)) {
        // Update the character's data
        characters[index].name = newName;
        characters[index].hp = newHP;
        characters[index].ac = newAC;
        characters[index].str = newStr;
        characters[index].dex = newDex;
        characters[index].con = newCon;
        characters[index].int = newInt;
        characters[index].wis = newWis;
        characters[index].cha = newCha;


        // Update the data in localStorage
        localStorage.setItem('characters', JSON.stringify(characters));

        // Refresh the table
        populateCharacterTable();
    }
}

// Function to delete a character
function deleteCharacter(currentIndex) {
    // Optionally, display a confirmation dialog before deletion
    if (confirm("Are you sure you want to delete this character?")) {
        // Remove the character from the characters array
        characters.splice(currentIndex, 1);

        if (currentIndex >= characters.length) {
            currentIndex = characters.length - 1;
        }
    
        // Update the data in localStorage
        localStorage.setItem('characters', JSON.stringify(characters));

        // Refresh the table
        populateCharacterTable();

    }
}
