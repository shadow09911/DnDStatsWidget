// Add an event listener to the "Download Data" button
document.getElementById("download-data-button").addEventListener("click", function () {
    downloadCharacterData();
});


// Function to download character data as a JSON file
function downloadCharacterData() {
    const dataToDownload = JSON.stringify(characters, null, 2); // Indent with 2 spaces for readability
    const blob = new Blob([dataToDownload], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "character_data.json"; // Set the desired file name

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Clean up the URL object to prevent memory leaks
    URL.revokeObjectURL(url);
}

