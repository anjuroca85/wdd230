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

  // Check if it's the user's first visit
  if (!localStorage.getItem("lastVisit")) {
    document.getElementById("visit").textContent =
      "Welcome! Let us know if you have any questions.";
  } else {
    const lastVisitDate = parseInt(localStorage.getItem("lastVisit"));
    const currentDate = Date.now();
    const timeDifference = currentDate - lastVisitDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (daysDifference === 1) {
      document.getElementById("visit").textContent =
        "You last visited 1 day ago.";
    } else {
      document.getElementById(
        "visit"
      ).textContent = `You last visited ${daysDifference} days ago.`;
    }
  }
  // Update the last visit date in localStorage
  localStorage.setItem("lastVisit", Date.now().toString());
});

// Lazy loading for images
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("#gallery img");

  const lazyLoad = (target) => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute("data-src");
          img.setAttribute("src", src);
          observer.disconnect();
        }
      });
    });

    io.observe(target);
  };

  images.forEach((image) => {
    lazyLoad(image);
  });
});
