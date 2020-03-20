var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");
const deleteButton = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createDeleteElement() {
  var addDeleteButton = document.createElement("button");
  addDeleteButton.setAttribute("class", "delete");
  addDeleteButton.appendChild(document.createTextNode("DELETE"));
  return addDeleteButton;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
  li.appendChild(createDeleteElement());
	ul.appendChild(li);
	input.value = "";
  deleteListItemEvent(); //Add delete event listener to new item.
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function listItemDone(event) {
    if(event.target.tagName === "LI") { //Find the list item that is clicked on.
        event.target.classList.toggle("done"); //Toggle done class for strikethrough.
    }
}

function createDeleteButton() {
    for (var i = 0; i < li.length; i++) {
        li[i].appendChild(createDeleteElement());
    }
}

function deleteListItem(e) {
    var listItems = document.querySelectorAll("li");
    for (var i = 0; i < listItems.length; i++) {
        console.log(e);
        this.parentNode.remove();
    }
}

function deleteListItemEvent() {
    for (var i = 0; i < deleteButton.length; i++) { //Add delete click event for all delete buttons.
        deleteButton[i].addEventListener("click", deleteListItem);
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", listItemDone);

createDeleteButton();

deleteListItemEvent();