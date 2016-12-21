// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progresss__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

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

// Hook up the event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(btn => btn.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));