document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Update the content of the span element with the ID "year" to display the current year
    document.getElementById("year").textContent = currentYear;

    // Get the last modified date of the document
    const lastModifiedDate = new Date(document.lastModified);
    // Format the last modified date as desired (optional)
    const formattedLastModifiedDate = lastModifiedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    // Update the content of the paragraph element with the ID "lastModified" to display the last modified date
    document.getElementById("lastModified").textContent = `Last modified: ${formattedLastModifiedDate}`;
});
