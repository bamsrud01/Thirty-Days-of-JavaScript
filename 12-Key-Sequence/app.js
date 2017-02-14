//  This array will hold the sequence of keys pressed
const pressed = [];

//  This is the secret sequence of keys, in string form
const secretCode = 'challenge';

//  Event listener to detect key sequence
window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  //  Ensure that the pressed array remains no longer than the length of the secret code
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  //  Check to see if key sequence matches the secret code
  if (pressed.join('').includes(secretCode)) {
    console.log('You did it!');
    cornify_add();
  }
});
