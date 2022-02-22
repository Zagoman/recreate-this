let minutes = 24;
let seconds = 60;
let timerRunning = true;
const startBtn = document.querySelector("#start-btn");
//show minutes
const showTime = () => {
  seconds--;
  //display seconds
  document.querySelector("#seconds").textContent = `${
    seconds < 10 ? `0${seconds}` : `${seconds}`
  }`;
  document.querySelector("#minutes").textContent = `${
    minutes < 10 ? `0${minutes}` : `${minutes}`
  }`;
  if (minutes <= 0 && seconds <= 0) {
    timerRunning = false;
    return;
  }
  if (seconds <= 0 && timerRunning) {
    minutes--;
    document.querySelector("html").offsetHeight;
    //show minutes
    document.querySelector("#minutes").textContent = `${
      minutes < 10 ? `0${minutes}` : `${minutes}`
    }`;
    seconds = 60;
    setTimeout(showTime, 1000);
  } else if (seconds > 0 && timerRunning) {
    setTimeout(showTime, 1000);
  }
};
startBtn.addEventListener("click", () => {
  if (startBtn.textContent == "START") {
    timerRunning = true;
    showTime();
    startBtn.textContent = "STOP";
  } else {
    timerRunning = false;
    startBtn.textContent = "START";
  }
});
