const buttons = document.querySelectorAll("button");
const reset = document.getElementById("reset");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    createCells(buttons[i].value);
  });
}

// Reload the page
reset.addEventListener("click", function () {
  window.location.reload();
});

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
      cell.addEventListener("click", bgBlue);
      cell.innerHTML = `${[i + 1]}`;
      grid.appendChild(cell);
    }
  }
}

function bgBlue(event) {
  const cell = event.target;
  console.log(cell);
  cell.classList.toggle("bg-blue");
}
