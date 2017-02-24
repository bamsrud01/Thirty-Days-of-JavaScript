//  Starter code
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

//  Function to populate voices to use
//  Will return man voices, each with a name and language
function populateVoices() {
  voices = this.getVoices();
  const voiceOptions = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
  voicesDropdown.innerHTML = voiceOptions;
}

//  Function to choose a voice from the list
function setVoice() {
  //  Find matching SpeechSynthesisVoice object
  msg.voice = voices.find(voice => voice.name === this.value);
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

//  Event listeners
speechSynthesis.addEventListener('voiceschanged', populateVoices);
// speechSynthesis is a global variable
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
