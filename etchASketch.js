const body = document.querySelector("body")

const containerGrid = document.createElement("div");

let sizeGrid = 300;

containerGrid.classList.add("containerGrid");
containerGrid.style.width = `${sizeGrid}px`;
containerGrid.style.height = `${sizeGrid}px`;
containerGrid.style.display = "flex";
containerGrid.style.backgroundColor = "#7e8b003d";

body.appendChild(containerGrid);

let dimensionGrid = 16;

const div = document.createElement("div");