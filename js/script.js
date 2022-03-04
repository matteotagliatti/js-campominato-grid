const buttons = document.querySelectorAll("button");
const reset = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");
let time = 0;
let timer;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    checkGrid(buttons[i].value);

    changeDifficultyDisplay(buttons[i].innerText); // change diffuclty counter

    // if time is on reset time number and timer
    if (time > 0) {
      time = 0;
      clearInterval(timer);
      timerDisplay.innerText = writeTime(time);
    }
    /* Prevent multiple click with more speed timer */
    if (event.detail === 1) {
      timer = setInterval(startTimer, 1000); // restart timer
    }
  });
}

// Reload the page
reset.addEventListener("click", () => {
  window.location.reload();
});

/**
 * Check if grid is empty or not
 * @param {*} value // stored in the html tag button, value attribute
 */
function checkGrid(value) {
  const gridInner = document.querySelectorAll("#grid > div");
  const grid = document.getElementById("grid");

  /* Check if the grid is empty. Then create grid cells */
  if (gridInner.length === 0) {
    createCells(value);
  } else {
    grid.innerHTML = "";
    createCells(value);
  }
}

/**
 * Create all the cells
 * @param {*} value
 */
function createCells(value) {
  for (let i = 0; i < value; i++) {
    const cell = document.createElement("div");
    cell.addEventListener("click", bgBlue);
    cell.innerHTML = `${[i + 1]}`;
    grid.appendChild(cell);
  }
}

/**
 * Add blue background
 * @param {*} event
 */
function bgBlue(event) {
  const cell = event.target;
  cell.classList.toggle("bg-blue");
}

/**
 * Display time in the correct way
 * @param {*} value
 * @returns // time
 */
function writeTime(time) {
  if (time < 10) return `00${time}`;
  if (time < 100) return `0${time}`;
  if (time >= 100) return `${time}`;
}

/**
 * Change diffuclity display counter
 * @param {*} button // button value
 */
function changeDifficultyDisplay(button) {
  const difficultyDisplay = document.getElementById("difficulty-counter");
  if (button == "Easy") difficultyDisplay.innerText = "001";
  if (button == "Medium") difficultyDisplay.innerText = "002";
  if (button == "Hard") difficultyDisplay.innerText = "003";
}

/**
 * Start the timer
 */
function startTimer() {
  time++;
  timerDisplay.innerText = writeTime(time);
}
