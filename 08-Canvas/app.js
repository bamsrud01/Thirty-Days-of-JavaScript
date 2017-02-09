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
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// Controls of when and where a line is drawn
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); //  Start point
  ctx.lineTo(e.offsetX, e.offsetY); //  End point
  ctx.stroke();
  // Update position, using ES2015 feature
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Event listeners to control drawing of line
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
