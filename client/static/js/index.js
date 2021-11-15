// const { retrieveFood } = require("./app");

const inputForm = document.querySelector("#inputform");
const selectForm = document.querySelector("#showform");

inputForm.addEventListener("submit", addFood);
selectForm.addEventListener("submit", retrieveFood);

getFood();
