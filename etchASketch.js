let sizeGrid = 320;
let columnLength = 16;
let numberGridElements = columnLength**2;
let sizeGridElement = sizeGrid/columnLength;



const body = document.querySelector("body")
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.backgroundColor = "grey";
body.style.border = "1px solid red";
body.style.flex = "stretch";

const containerGrid = document.createElement("div");
body.appendChild(containerGrid);

containerGrid.classList.add("containerGrid");
containerGrid.style.width = `${sizeGrid}px`;
containerGrid.style.height = `${sizeGrid}px`;
containerGrid.style.display = "flex";
containerGrid.style.backgroundColor = "#7e8b003d";
containerGrid.style.boxSizing = "border-box";
containerGrid.style.flexWrap = "wrap";
containerGrid.style.alignSelf = "center";

for (let i = 0; i<numberGridElements; i++) {
    const squareDivLoop = document.createElement("div");
    squareDivLoop.classList.add("squareDiv");
    containerGrid.appendChild(squareDivLoop);
};

const squareDivs = document.querySelectorAll(".squareDiv");

squareDivs.forEach(squareDiv => {
    squareDiv.style.width = `${sizeGridElement}px`;
    squareDiv.style.height = `${sizeGridElement}px`;
    squareDiv.style.backgroundColor = "white";
    squareDiv.style.backgroundColor = "red";
    squareDiv.style.boxSizing = "border-box";
    
});

