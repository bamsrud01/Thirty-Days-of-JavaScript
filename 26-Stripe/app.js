//  Select elements
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

//  Function for mouse enter
function handleEnter() {
  this.classList.add('trigger-enter');
  //  Value of 'this' is inherited when using an arrow function as below
  setTimeout(() => {
    if (this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active');
    }
  }, 150);
  //  Display white background
  background.classList.add('open');
  //  Find which dropdown the background will act upon
  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left
  };
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

//  Function for mouse leave
function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

//  Event listeners
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
