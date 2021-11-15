// const { retrieveFood } = require("./app");

const inputForm = document.querySelector("#inputform");
const selectForm = document.querySelector("#showform");
// const foodsList = document.querySelector("#foodsList");
// const foodsNames = foodsList.children;
// let foodsNamesList = document.querySelectorAll("#foodsList option");

// function addClicks() {
// 	let foodsNamesList = document.querySelectorAll("#foodsList option");
// 	// console.log(foodsNamesList);
// 	for (let i = 0; i < foodsNamesList.length; i++) {
// 		// console.log(foodsNamesList[i]);
// 		foodsNamesList[i].addEventListener("change", retrieveFood);
// 	}
// }

inputForm.addEventListener("submit", addFood);
selectForm.addEventListener("submit", retrieveFood);

// function runLists() {
// 	getFood();
// 	setTimeout(addClicks, 1000);
// }

getFood();
// runLists();
