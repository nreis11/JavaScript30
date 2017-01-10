$(document).ready(function() {
  console.log("ran");
});

const positions = {
  "one": {top: 0, right: 385, bottom: 381, left: 0},
  "two": {top: 0, right: 827, bottom: 381, left: 385},
  "three": {top: 382, right: 385, bottom: 762, left: 0},
  "four": {top: 382, right: 800, bottom: 762, left: 385}
};

// 1st - rect(0px,385px,385px,0px)
// 2nd - rect(0px,827px,385px,384px)
// 3rd - rect(382px,385px,762px,0px)
// 4th - rect(382px,800px,762px,385px)

const changeImgCrop = function(args = {}) {
  $('#portrait').css('clip', `rect(${args.top}px,${args.right}px,${args.bottom}px,${args.left}px)`);
};