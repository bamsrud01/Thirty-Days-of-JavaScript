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
ctx.strokeStyle = 'black';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;

// Controls of when and where a line is drawn
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Controls of line style
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); //  Start point
  ctx.lineTo(e.offsetX, e.offsetY); //  End point
  ctx.stroke();
  // Update position, using ES2015 feature
  [lastX, lastY] = [e.offsetX, e.offsetY];
  // Increment color
  if (hue >= 360) hue = 0;
  hue ++;
  // Adjust line width
  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

// Event listeners to control drawing of line
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
