// const { retrieveFood } = require("./app");

const inputForm = document.querySelector("#inputform");
const selectForm = document.querySelector("#showform");
const foodsList = document.querySelector("#foodsList");

inputForm.addEventListener("submit", addFood);
foodsList.addEventListener("change", retrieveFood);

getFood();
