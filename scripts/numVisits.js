//Initialize display element variable
const visitsDisplay = document.querySelector("#visits");

//Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 1 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 1;

//Determine if this is the first visit or display the number of visits.
if (numVisits !== 1) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

//increment the number of visits by one.
numVisits++;

//store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);
