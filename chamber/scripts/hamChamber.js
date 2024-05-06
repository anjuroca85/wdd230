const hamburgerElement = document.querySelector("#myButton");
const navElement = document.querySelector("#menuChamber");

hamburgerElement.addEventListener("click", () => {
  navElement.classList.toggle("open");
  hamburgerElement.classList.toggle("open");
});
