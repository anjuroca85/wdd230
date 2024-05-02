const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (input.value != "") {
    const myItem = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const deleteButton = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = myItem;

    listItem.appendChild(deleteButton);
    deleteButton.textContent = "❌";

    list.appendChild(listItem);

    deleteButton.addEventListener("click", () => {
      list.removeChild(listItem);
      input.focus();
    });
  } else {
    // const body = document.body;
    // const div = document.createElement("div");
    const div = document.querySelector("div");
    div.innerHTML =
      "<mark>Please enter a Book of Mormon Book and Chapter</mark>";
    //body.append(div);
  }

  input.focus();
});
