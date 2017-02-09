// Select canvas element
const canvas = document.querySelector('#draw');

// Canvas needs a context, which is actually what is drawn on
  // Can be 2D or 3D
const ctx = canvas.getContext('2d');

// Resize canvas to user's window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Context settings
  // Stroke style - color of line
  // Line join & line cap - Is the line round or square when it meets another, or ends?
ctx.strokestyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
