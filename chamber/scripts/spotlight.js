document.addEventListener("DOMContentLoaded", () => {
  fetch("data/members.json")
    .then((response) => response.json())
    .then((data) => {
      const members = data.filter(
        (member) =>
          member.membershipLevel === "Gold" ||
          member.membershipLevel === "Silver"
      );
      const randomMembers = members.sort(() => 0.5 - Math.random()).slice(0, 3); // Get 2-3 random members

      const spotlightsContainer = document.getElementById("spotlights");
      randomMembers.forEach((member) => {
        const spotlightCard = document.createElement("div");
        spotlightCard.classList.add("spotlight-card");
        spotlightCard.innerHTML = `
                    <img src="https://via.placeholder.com/500x250/" alt="${member.altDesc}">
                    <h3>${member.name}</h3>
                    <p>${member.description}</p>
                    <a href="${member.website}">Visit Website</a>
                `;
        spotlightsContainer.appendChild(spotlightCard);
      });
    })
    .catch((error) => console.error("Error fetching members:", error));
});

// document.addEventListener("DOMContentLoaded", () => {
//   fetch("data/members.json")
//     .then((response) => response.json())
//     .then((data) => displaySpotlights(data));
// });

// function displaySpotlights(members) {
//   const spotlightContainer = document.querySelector("#spotlights");

//   // Filtering members with Silver or Gold membership
//   const spotlightMembers = members.filter(
//     (member) =>
//       member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
//   );

//   // Shuffle and select 2-3 members
//   const selectedMembers = spotlightMembers
//     .sort(() => 0.5 - Math.random())
//     .slice(0, 3);

//   selectedMembers.forEach((member) => {
//     const spotlight = `
//       <div class="spotlight">
//         <h3>${member.name}</h3>
//         <img src="https://via.placeholder.com/500x250/" alt="${member.altDesc}">
//         <p>${member.description}</p>
//         <a href="${member.website}">Visit Website</a>
//       </div>
//     `;
//     spotlightContainer.innerHTML += spotlight;
//   });
// }
