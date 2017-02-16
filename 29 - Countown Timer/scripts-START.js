let countdown;
const timeLeft = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");

function timer(seconds) {
  const now = Date.now();
  const then = now + (seconds * 1000);
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
  displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutesLeft = Math.floor(seconds / 60);
  let secondsLeft = seconds % 60;
  secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
  timeLeft.textContent = `${minutesLeft}:${secondsLeft}`;
  document.title = timeLeft.textContent;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjHour = hour > 12 ? hour - 12 : hour;
  console.log('hour', hour);
  let minutes = end.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;
  console.log('minutes', minutes);
  endTime.textContent = `Return at ${adjHour}:${minutes}`;
}
