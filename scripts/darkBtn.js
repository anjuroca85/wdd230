const modeButton = document.querySelector("#darkBtn");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
  main.classList.toggle("dark-mode");

  // Toggle button icon
  if (modeButton.src.includes("dark-theme-42px.png")) {
    modeButton.src = "images/light-theme-42px.png";
  } else {
    modeButton.src = "images/dark-theme-42px.png";
  }
});
