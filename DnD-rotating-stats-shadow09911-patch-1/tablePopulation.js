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
