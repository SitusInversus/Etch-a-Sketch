let sizeGrid = 320;
let numberGridElements = 16;
let sizeGridElement = sizeGrid/numberGridElements;

const body = document.querySelector("body")
const containerGrid = document.createElement("div");

const containerGrid = document.createElement("div");
body.appendChild(containerGrid);

containerGrid.classList.add("containerGrid");
containerGrid.style.width = `${sizeGrid}px`;
containerGrid.style.height = `${sizeGrid}px`;
containerGrid.style.display = "flex";
containerGrid.style.backgroundColor = "#7e8b003d";

const squareDiv = document.createElement("div");
containerGrid.appendChild(squareDiv);

squareDiv.style.width = `${sizeGrid}/${dimension}`