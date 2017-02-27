//  Select elements
const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

//  Function to determine which div element was clicked
function logText(e) {
  console.log(this.classList.value);
  //  Stop bubbling event up
  e.stopPropagation();  //  Stop bubbling!
}

//  Event listeners
divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true
}));
//  The capture in the object, if true, will make the function run on capture, instead of on bubbling up
//  The once property will unbind the element, so that an event trigger will run only once

button.addEventListener('click', () => {
  console.log('Click!');
}, {
  once: true
});

/*
A click on an element within other elements will 'bubble' up to the higher elements,
triggering click events on those as well.

When you click on an element, first is a 'capture', where the elements trigger from the top down to the clicked element.
From there, events will bubble back up in the reverse.

Capture -> top down
Bubble -> bottom up
*/
