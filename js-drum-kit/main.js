
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`div[data-key="${e.key}"]`);
  
  if (!audio) return; //stop the function from running all togheter
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //skip if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener('keydown', playSound);