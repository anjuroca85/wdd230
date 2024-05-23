// const baseURL = "https://anjuroca85.github.io/wdd230/";
const baseURL = "http://127.0.0.1:5500/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (!response.ok) {
      throw new Error("No network response");
    }
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error("There has been a problem with the fetch operation:", error);
  }
}

function displayLinks(data) {
  const activityLinks = document.getElementById("activityLinks");
  activityLinks.innerHTML = ""; // This one clears existing content to prevent duplicate data

  // The following iterates over each week object in the data.weeks array from the JSON file
  data.weeks.forEach((week) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${week.week}: `;

    //The following iterates over each link object in the week.links array from the JSON file
    week.links.forEach((link, index) => {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);

      //The following controls when the pipe charachter should be giving as output.
      if (index < week.links.length - 1) {
        listItem.innerHTML += " | ";
      }
    });
    activityLinks.appendChild(listItem);
  });
}

//Calling the function
getLinks();
