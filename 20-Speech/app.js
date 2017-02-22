//  Speech recognition is global in the browser, but some browsers have a different name.
//  This keeps the format consistent through the application
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
