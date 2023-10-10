let sizeGrid = 320;
let columnLength = 16;
let numberGridElements = columnLength**2;
let sizeGridElement = sizeGrid/columnLength;



const body = document.querySelector("body")


const containerGrid = document.createElement("div");
body.appendChild(containerGrid);

containerGrid.classList.add("containerGrid");
containerGrid.style.width = `${sizeGrid}px`;
containerGrid.style.height = `${sizeGrid}px`;

for (let i = 0; i<numberGridElements; i++) {
    const squareDivLoop = document.createElement("div");
    squareDivLoop.classList.add("squareDiv");
    containerGrid.appendChild(squareDivLoop);
};

const squareDivs = document.querySelectorAll(".squareDiv");

squareDivs.forEach(squareDiv => {
    squareDiv.style.width = `${sizeGridElement}px`;
    squareDiv.style.height = `${sizeGridElement}px`;
});

