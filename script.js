const gridBox = document.getElementById("container");

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const divRows = document.createElement("divRows");
    for (let j = 0; j < num; j++) {
      const divColumns = document.createElement("divColumns");
      divRows.append(divColumns);
    }
    gridBox.appendChild(divRows);
  }
}
