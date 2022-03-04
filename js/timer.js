const timerDisplay = document.getElementById("timer");
let time = 000;

const timer = setInterval(function () {
  time++;
  timerDisplay.innerText = writeTime(time);
}, 1000);

function writeTime(value) {
  if (value < 10) return `00${time}`;
  if (value < 100) return `0${time}`;
  if (value >= 100) return `${time}`;
}
