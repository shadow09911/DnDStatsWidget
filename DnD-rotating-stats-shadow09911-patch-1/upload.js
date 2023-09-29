// Add an event listener to the "Load Template" button
document.getElementById("load-template-button").addEventListener("click", function () {
    document.getElementById("template-file").click();
});

// Add an event listener to the file input element
document.getElementById("template-file").addEventListener("change", function (event) {
    const fileInput = event.target;
    loadCharacterDataFromTemplate(fileInput);
});

// Function to load character data from a selected local file
function loadCharacterDataFromTemplate(fileInput) {
    if (fileInput.files.length > 0) {
        const selectedFile = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            try {
                const templateData = JSON.parse(event.target.result);
                // Set the characters array with data from the selected template
                characters = templateData;
                localStorage.setItem('characters', JSON.stringify(characters));
                // Refresh the table or character display as needed
                populateCharacterTable();
            } catch (error) {
                console.error(`Error parsing JSON data: ${error.message}`);
                // You can display a user-friendly error message here if needed
            }
        };

        reader.readAsText(selectedFile);
    }
}

// Function to populate the character data in a table on the contents.html page
function populateCharacterTable() {
    const characterTable = document.getElementById("character-table");
    const tbody = characterTable.querySelector("tbody"); // Get the tbody element

    // Clear existing rows in tbody
    tbody.innerHTML = "";

    // Check if the header row exists
    let headerRow = characterTable.querySelector("thead tr");

    if (!headerRow) {
        // Create the header row if it doesn't exist
        const thead = characterTable.querySelector("thead");
        headerRow = thead.insertRow(); // Create a new row in thead

        // Add header cells
        ["Name", "HP", "AC", "STR", "DEX", "CON", "INT", "WIS", "CHA"].forEach(headerText => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
    }

    characters.forEach((character, index) => {
        const row = tbody.insertRow(); // Create a new row in tbody

        // Add data cells
        Object.values(character).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });

        // Add action buttons
        const actionCell = row.insertCell();
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editCharacter(index));
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteCharacter(index));
        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);
    });
}

// Call populateCharacterTable when the page loads
window.addEventListener('load', function() {
    populateCharacterTable();
});

// Function to save characters to localStorage
function saveCharactersTolocalStorage() {
    localStorage.setItem('characters', JSON.stringify(characters));
}
