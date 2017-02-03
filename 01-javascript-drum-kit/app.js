// Function to listen for keydown event, and play associated audio file
window.addEventListener('keydown', function(e) {
  //  Check to see if pressed key's keycode is linked to a data-key attribute
    // If not, audio is null
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // console.log(audio);  //  Logs the audio element
  if (!audio) return;
  // Play audio file
  audio.play();
});
