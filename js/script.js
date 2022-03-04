const grid = document.getElementById("grid");

/* Create Cells */
for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.innerHTML = `<span>${[i + 1]}</span>`;
  grid.appendChild(cell);
}
