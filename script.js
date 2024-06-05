const gridBox = document.getElementById("container");
const gridDimensions = 700; // Grid height and width, square, from css
const defaultGrid = 16;

const resetButton = document.querySelector(".reset-button");

resetButton.addEventListener("click", () => {
  let desiredSize = Number(
    prompt("Enter your desired dimensions for the new grid(1-100)")
  );

  if (desiredSize < 1 || desiredSize > 100) {
    alert("Please enter valid grid size");
  } else {
    const wrapper = document.querySelector(".wrapper");
    if (!wrapper) {
      createGrid(desiredSize);
    } else {
      wrapper.remove();
      createGrid(desiredSize);
    }
  }
});

createGrid(defaultGrid);

function createGrid(numOfGrids) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  for (let i = 0; i < numOfGrids; i++) {
    const divRows = document.createElement("divRows");
    divRows.classList.add("div-rows");
    for (let j = 0; j < numOfGrids; j++) {
      const Dimensions = gridDimensions / numOfGrids;
      const divColumns = document.createElement("divColumns");

      divColumns.classList.add("div-columns");
      divColumns.style.width = `${Dimensions}px`;
      divColumns.style.height = `${Dimensions}px`;

      divRows.append(divColumns);

      divColumns.addEventListener("mouseenter", () => {
        divColumns.style.backgroundColor = randomizeColor();
      });
    }
    wrapper.appendChild(divRows);
  }
  gridBox.appendChild(wrapper);
}

function randomizeColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

console.log(randomizeColor());
