//  Speech recognition is global in the browser, but some browsers have a different name.
//  This keeps the format consistent through the application
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
//  Ensure that speech is populating while speaking, instead of waiting for speech to finish
recognition.interimResults = true;

//  Create new paragraph element
let p = document.createElement('p');

//  Append new paragraphs to DOM
const words = document.querySelector('.words');
words.appendChild(p);

//  Event listeners

//  This listener will run only once.  When speech is finished, it stops
recognition.addEventListener('result', e => {
  console.log(e.results);
  //  Create a string from the results
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    //  Add this information to the DOM
    p.textContent = transcript;
    //  Check if result is final, and create a new paragraph
    if (e.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    }
});

//  This event listener will restart the speech recognition event listener
recognition.addEventListener('end', recognition.start);

//  Start the application
recognition.start();
