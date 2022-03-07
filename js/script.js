const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    createCells(buttons[i].value);

    /* EXTRA */
    changeDifficultyDisplay(buttons[i].innerText); // change diffuclty counter
    changeTimerDisplay(event); // change timer display
  });
}

/**** FUNCTIONS ****/

/**
 * Create all the cells
 * @param {*} cellsNumber
 */
function createCells(cellsNumber) {
  const grid = document.getElementById("grid");
  grid.innerHTML = ""; // remove all elements before create new cells

  for (let i = 0; i < cellsNumber; i++) {
    const cell = document.createElement("div");

    if (cellsNumber == 100) cell.classList.add("easy");
    if (cellsNumber == 81) cell.classList.add("medium");
    if (cellsNumber == 48) cell.classList.add("hard");

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

/**** EXTRA ****/
/*** DIFFICULTY ***/

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

/*** TIME ***/

const timerDisplay = document.getElementById("timer");
let time = 0;
let timer;

function changeTimerDisplay(event) {
  // if time is on reset time number and timer
  if (time > 0) {
    time = 0;
    clearInterval(timer);
    timerDisplay.innerText = writeTime(time);
  }
  /* Prevent multiple click with more speed timer */
  if (time === 0 && event.detail === 1) timer = setInterval(startTimer, 1000); // restart timer
}

/**
 * Start the timer
 */
function startTimer() {
  time++;
  timerDisplay.innerText = writeTime(time);
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

/*** RELOAD ***/

const reset = document.getElementById("reset");

// Reload the page
reset.addEventListener("click", () => {
  window.location.reload();
});
