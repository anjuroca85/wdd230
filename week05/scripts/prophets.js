const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets); // temporary testing of data retreival
  displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let fullName = document.createElement("h2"); // Created an H2 element
    let portrait = document.createElement("img");
    let birthday = document.createElement("p");
    let placeBorn = document.createElement("p");

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
    birthday.textContent = `Date of Birth: ${prophet.birthdate}`; // fill in the blank
    placeBorn.textContent = `Place of Birth: ${prophet.birthplace}`; // fill in the blank

    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    ); // fill in the blank
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    // Append the section(card) with the created elements
    card.appendChild(fullName); // Appending fullName to the card
    card.appendChild(birthday); // Appending Date of Birth
    card.appendChild(placeBorn); // Appending Place of Birth
    card.appendChild(portrait); // Appending portrait to the card

    cards.appendChild(card); // Appending the card to the cards div
  }); // end of arrow function and forEach loop
};
