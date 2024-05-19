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

  document.getElementById("timestamp").value = new Date().toISOString();
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
