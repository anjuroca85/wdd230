document.addEventListener("DOMContentLoaded", function () {
  // Getting the current year
  const currentYear = new Date().getFullYear();
  // Updating the content of the span element with the ID "year" to display the current year from the line before
  document.getElementById("year").textContent = currentYear;

  // Getting the last modified date of the document with the following:
  const lastModifiedDate = new Date(document.lastModified);
  // Formatting the last modified date as desired.
  const formattedLastModifiedDate = lastModifiedDate.toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );
  // Getting the current time
  const currentTime = new Date().toLocaleTimeString("en-US", { hour12: false });

  // Creating a strong element for "Last modified:" so that user can see it clearly.
  const strongLastModified = document.createElement("strong");
  strongLastModified.textContent = "Last modified: ";

  // Creating a strong element for the formatted last modified date and time for the same above reason
  const strongDateAndTime = document.createElement("strong");
  strongDateAndTime.textContent = `${formattedLastModifiedDate}, Time: ${currentTime}`;

  // Updating the content of the paragraph element with the ID "lastModified" to display the last modified date and time
  const lastModifiedParagraph = document.getElementById("lastModified");
  lastModifiedParagraph.textContent = ""; // Clearing existing content
  lastModifiedParagraph.appendChild(strongLastModified); // Appending the strong element for "Last modified:"
  lastModifiedParagraph.appendChild(strongDateAndTime); // Appending the strong element for the formatted date and time
});
