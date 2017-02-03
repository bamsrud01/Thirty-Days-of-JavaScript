// Function to listen for keydown event, and run associated function
window.addEventListener('keydown', playSound);

function playSound(e) {
  //  Check to see if pressed key's keycode is linked to a data-key attribute
    // If not, audio is null
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; //  If audio is null, exit function
  audio.currentTime = 0;  //  Start audio from beginning if currently playing
  audio.play(); // Play audio file
  key.classList.add('playing'); //  Add 'playing' class for animation
}

// Funtion to remove 'playing' class from finished event
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;  //  transform is the longest event, so skip the others
  // 'this' refers to the active key element
  this.classList.remove('playing');
}

// All elements will class 'key' on page
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
