let sizeGrid = 320;
let columnLength = 16;
let numberGridElements = columnLength**2;
let sizeGridElement = sizeGrid/columnLength;


const gridContainer = document.querySelector(".gridContainer")
const controls = document.querySelectorAll(".controls input") 

function handleUpdate() {
    removeDiv();
    createDiv (document.querySelector("#gridSize").value);
};

controls.forEach(control => {
    control.addEventListener('click', handleUpdate);
});

function createDiv (columnLength) {

    for (let i = 0; i<columnLength**2; i++) {
        const squareDivLoop = document.createElement("div");

        squareDivLoop.classList.add("squareDiv");
        squareDivLoop.style.display = "flex";

        squareDivLoop.style.width = `${sizeGrid/columnLength}px`;


        squareDivLoop.addEventListener('mouseenter', () => {
            if (squareDivLoop.classList.contains("colorme")){
                //squareDiv.classList.remove("colorme");
            }
            else {
                squareDivLoop.classList.add("colorme");
            }
        } );
        document.querySelector(".gridContainer").appendChild(squareDivLoop);
    };
return console.log(columnLength**2 + " squareDiv created")    
};

function removeDiv() {
    const squareDivs = document.querySelectorAll(".squareDiv");
    squareDivs.forEach(squareDiv => squareDiv.remove());
}

createDiv (document.querySelector("#gridSize").value);



