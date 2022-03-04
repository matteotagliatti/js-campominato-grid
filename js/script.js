const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    createCells(buttons[i].value);
  });
}

/**
 * Create all the cells
 * @param {*} value // stored in the html tag button, value attribute
 */
function createCells(value) {
  const gridInner = document.querySelectorAll("#grid > div");

  /* Check if the grid is empty. Then create grid cells */
  if (gridInner.length === 0) {
    const grid = document.getElementById("grid");

    for (let i = 0; i < value; i++) {
      const cell = document.createElement("div");
      cell.innerHTML = `<span>${[i + 1]}</span>`;
      grid.appendChild(cell);
    }
  }
}
