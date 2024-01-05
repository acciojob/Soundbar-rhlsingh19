//your JS code here. If required.
function playSound(soundFileName) {
  const audio = new Audio(`sounds/${soundFileName}`);
  audio.play();
}

function stopAllSounds() {
  const allAudio = document.querySelectorAll('audio');
  allAudio.forEach(audio => audio.pause());
}
