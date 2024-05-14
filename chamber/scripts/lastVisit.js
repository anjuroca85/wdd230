document.addEventListener("DOMContentLoaded", function () {
  const visitsDisplay = document.querySelector("#visit");
  const now = Date.now();
  const oneDayInMs = 24 * 60 * 60 * 1000;

  // Getting the stored value for the lastVisit key in localStorage if it exists.
  let lastVisit = Number(window.localStorage.getItem("lastVisit"));

  // Storing the current visit time in localStorage.
  window.localStorage.setItem("lastVisit", now.toString());

  // the following will determine the message to display in singular or plural days.
  if (!lastVisit) {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
  } else {
    const daysSinceLastVisit = Math.floor((now - lastVisit) / oneDayInMs);
    if (daysSinceLastVisit < 1) {
      visitsDisplay.textContent = `Back so soon! Awesome!`;
    } else {
      visitsDisplay.textContent = `You last visited ${daysSinceLastVisit} day${
        daysSinceLastVisit > 1 ? "s" : ""
      } ago.`;
    }
  }
});
