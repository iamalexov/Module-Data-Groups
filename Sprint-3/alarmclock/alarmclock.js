const alarmInput = document.getElementById("alarmSet");
const timeDisplay = document.getElementById("timeRemaining");

function time_convert(value) {
  // Calculate the number of hours by dividing num by 60 and rounding down
  var minutes = Math.floor(value / 60)
    .toString()
    .padStart(2, "0");
  // Calculate the remaining minutes by taking the remainder when dividing num by 60
  var seconds = (value % 60).toString().padStart(2, "0");
  // Return the result as a string in the format "hours:minutes"
  return minutes + ":" + seconds;
}

let seconds = 0;
let interval;

function setAlarm() {
  if (!alarmInput.value) {
    alert("Please set time");
    return;
  }

  /*   let minutes = Math.floor(value / 60).toString().padStart(2, "0")
   */
  seconds = Number(alarmInput.value);
  let currentTime = seconds;
  timeDisplay.textContent = "Time Remaining: " + time_convert(currentTime);

  interval = setInterval(() => {
    timeDisplay.textContent = "Time Remaining: " + time_convert(currentTime);

    if (currentTime > 0) {
      currentTime--;

      timeDisplay.textContent = "Time Remaining: " + time_convert(currentTime);
    } else {
      playAlarm();
      clearInterval(interval);
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;

{
}
