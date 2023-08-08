// Variables to store the timer state
let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Function to update the timer display
function updateTimerDisplay() {
  const timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to start the timer
function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }
      updateTimerDisplay();
    }, 1000);
  }
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

// Function to reset the timer
function resetTimer() {
  stopTimer();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateTimerDisplay();
}

