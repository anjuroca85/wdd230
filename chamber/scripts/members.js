document.addEventListener("DOMContentLoaded", () => {
  fetch("data/members.json")
    .then((response) => response.json())
    .then((data) => {
      displayMembers(data);
    })
    .catch((error) => console.error("Error fetching the JSON:", error));
});

function displayMembers(members) {
  const container = document.getElementById("members-container");
  container.innerHTML = "";

  members.forEach((member) => {
    const memberCard = document.createElement("div");
    memberCard.classList.add("member-card");

    memberCard.innerHTML = `
            <img src="https://via.placeholder.com/500x250/" alt="${member.altDesc}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
            <p>Membership Level: ${member.membershipLevel}</p>
            <p>${member.description}</p>
        `;

    container.appendChild(memberCard);
  });
}

function toggleView() {
  const container = document.getElementById("members-container");
  container.classList.toggle("list-view");

  const members = container.querySelectorAll(".member-card");
  members.forEach((member) => {
    member.classList.toggle("member-list-item");
  });
}
