const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

let chaptersArray = getChapterList() || []; //compound condition to account for no user's input. The function gets defined later in this code.

chaptersArray.forEach((chapter) => {
  displayList(chapter); //The function gets defined later in this code. The argument is what the user enters
});

button.addEventListener("click", () => {
  if (input.value != "") {
    // The above makes sure the input is not empty
    displayList(input.value); // calls the function that outputs the submitted chapter
    chaptersArray.push(input.value); // adds the chapter to the array using the array method .push
    setChapterList(); // updates the localStorage with the new array. This input needs to be in JSON string format.
    input.value = ""; // clears the input
    input.focus(); // sets the focus back to the input as in week 2
  }
});

function displayList(item) {
  // the following achieves the behavior of week two.
  let li = document.createElement("li");
  let deletebutton = document.createElement("button");
  li.textContent = item; // please note the use of the displayList parameter 'item'. Here, I assign it in the li element.
  deletebutton.textContent = "❌";
  deletebutton.classList.add("delete"); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
    input.focus(); // set the focus back to the input
  });
}

function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray)); // The second argument is the data itself in JSON string format.
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList")); //retrieves data from the browser's local storage. It uses myFavBOMList key to fetch the values.
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // this sentence slices off the last character
  chaptersArray = chaptersArray.filter((item) => item !== chapter); //using the array.filter method returns everything except the chapter
  setChapterList(); //updates the localStorage item
}

//old code from week two
// button.addEventListener("click", () => {
//   if (input.value != "") {
//     const myItem = input.value;
//     input.value = "";

//     const listItem = document.createElement("li");
//     const listText = document.createElement("span");
//     const deleteButton = document.createElement("button");

//     listItem.appendChild(listText);
//     listText.textContent = myItem;

//     listItem.appendChild(deleteButton);
//     deleteButton.textContent = "❌";

//     list.appendChild(listItem);

//     deleteButton.addEventListener("click", () => {
//       list.removeChild(listItem);
//       input.focus();
//     });
//   } else {
//     // const body = document.body;
//     // const div = document.createElement("div");
//     const div = document.querySelector("div");
//     div.innerHTML =
//       "<mark>Please enter a Book of Mormon Book and Chapter</mark>";
//     //body.append(div);
//   }

//   input.focus();
// });
