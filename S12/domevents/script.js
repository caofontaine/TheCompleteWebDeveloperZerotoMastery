var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	createDeleteButton(li);
	ul.appendChild(li);
	input.value = "";
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

function toggleDone(event) {
	var listItemClicked = event.target; //Gets the list item that is clicked.
	listItemClicked.classList.toggle("done");
}

function addDeleteButton(items) {
	for (var i = 0; i < items.length; i++) {
		createDeleteButton(items[i]);
	}
}

function createDeleteButton(item) {
	var deleteButton = document.createElement("button");
	var deleteText = document.createTextNode("DELETE");
	deleteButton.appendChild(deleteText);
	deleteButton.addEventListener("click", deleteListItem);
	item.appendChild(deleteButton);
}

function deleteListItem() {
	this.parentNode.parentNode.removeChild(this.parentNode); //button -> li -> ul (parent) DELETES li where button was clicked.
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDone);

addDeleteButton(listItems);