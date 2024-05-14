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

  // Updating the content of the paragraph element with the ID "lastModified" to display the last modified date and time
  document.getElementById(
    "lastModified"
  ).textContent = `Last modified: ${formattedLastModifiedDate}, Time: ${currentTime}`;

  // // Check if it's the user's first visit
  // //Initialize display element variable
  // const visitsDisplay = document.querySelector("#visit");

  // //Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 1 to the numVisits variable.
  // let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 1;

  // //Determine if this is the first visit or display the number of visits.
  // if (numVisits !== 1) {
  //   visitsDisplay.textContent = `${numVisits} number of visits`;
  // } else {
  //   visitsDisplay.textContent = `🥳 Welcome! Let us know if you have any questions.`;
  // }

  // //increment the number of visits by one.
  // numVisits++;

  // //store the new visit total into localStorage, key=numVisits-ls
  // localStorage.setItem("numVisits-ls", numVisits);
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("#gallery img");

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting || !("IntersectionObserver" in window)) {
        const img = entry.target;
        const src = img.getAttribute("data-src");
        img.setAttribute("src", src);
        observer.disconnect();
      }
    });
  });

  images.forEach((image) => {
    io.observe(image);
  });
});
