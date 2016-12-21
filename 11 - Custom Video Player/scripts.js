// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreenButton = player.querySelector('.fullscreen');

// Build our functions
function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Updates the player button depending on video status
// Alternate way
function updateButton() {
  if(video.paused) {
    toggle.innerHTML = '►';
  } else {
    toggle.innerHTML = '❚ ❚';
  }
}

function skip() {
  // Convert HTML attr to float
  video.currentTime += parseFloat(this.dataset.skip);
}

// Assign input's name and value to video attr
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// Update progress bar to reflect video completion
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime;
}

// Handles all fullscreen requests based on browser
function goFullScreen() {
  var requestMethod = video.requestFullScreen || video.webkitRequestFullScreen 
  || video.mozRequestFullScreen || video.msRequestFullScreen;

  if(requestMethod) {
    requestMethod.call(video);
  }
}

// Hook up the event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(btn => btn.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mouseDown = false;
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => {
  if(mouseDown) {
    scrub(e);
  }
})
progress.addEventListener('mouseup', () => mouseDown = false);

fullscreenButton.addEventListener('click', goFullScreen);


