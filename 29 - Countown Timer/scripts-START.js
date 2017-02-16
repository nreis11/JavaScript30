let countdown;
const timeLeft = document.querySelector(".display__time-left");


function timer(seconds) {
  const now = Date.now();
  const then = now + (seconds * 1000);
  displayTimeLeft(seconds);

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
  console.log('minutesLeft', minutesLeft);
  let secondsLeft = seconds % 60;
  secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
  console.log('secondsLeft', secondsLeft);
  timeLeft.textContent = `${minutesLeft}:${secondsLeft}`;
  document.title = timeLeft.textContent;
}
