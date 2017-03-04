//  Select elements
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastHole;
let timeUp = false;
let score = 0;

//  Set random time
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

//  Function to choose a random hole for the mole
function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

//  Function to animate moles
function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

//  Function to start game
function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 20000);
}

//  Function to whack a mole!
function whack(e) {
  //  Ensure that the click is a real mouse click, not simulated
  if(!e.isTrusted) return;  //  CHEATER!!
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

//  Event listeners
moles.forEach(mole => mole.addEventListener('click', whack));
