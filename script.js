const gridBox = document.getElementById("container");
const gridDimensions = 700; // Grid height and width, square, from css

const resetButton = document.querySelector(".size-button");

// resetButton.addEventListener("click", () => {
//   // createGrid();
// });

createGrid(16);

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const divRows = document.createElement("divRows");
    divRows.classList.add("div-rows");
    for (let j = 0; j < num; j++) {
      const Dimensions = gridDimensions / num;
      const divColumns = document.createElement("divColumns");

      divColumns.classList.add("div-columns");
      divColumns.style.width = `${Dimensions}px`;
      divColumns.style.height = `${Dimensions}px`;

      divRows.append(divColumns);

      divColumns.addEventListener("mouseenter", () => {
        divColumns.style.backgroundColor = "#000000";
      });
    }
    gridBox.appendChild(divRows);
  }
}

// const gridSize = prompt("Enter a number between 1 and 100 for your grid size");

// function resetGrid() {
//   const gridSize = prompt(
//     "Enter a number between 1 and 100 for your grid size"
//   );
//   if (gridSize < 1 && gridSize > 100) {
//     resetGrid();
//   } else {
//     return gridSize;
//   }
// }
