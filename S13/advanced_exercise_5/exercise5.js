// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const excitedNames = [];
const temp = array.forEach(account => excitedNames.push(`${account.username}!`);

//Create an array using map that has all the usernames with a "? to each of the usernames
const excitedNames = array.map(account => `${account.username}?`);

//Filter the array to only include users who are on team: red
const redTeam = array.filter(account => account.team === "red");

//Find out the total score of all users using reduce
let score = array.reduce((acc, account) => acc + account.score), 0);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

// (1): i is the array index
// (2):
const newArray = arrayNum.map((num, i) => {
	return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const excitedItems = array.map(account => {
	account.items = account.items.map(item => `${item}!`);
	return account;
});