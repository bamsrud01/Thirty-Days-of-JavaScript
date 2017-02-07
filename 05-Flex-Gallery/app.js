//  Create a node list of all panel elements in .panels
const panels = document.querySelectorAll('.panel');

//  Function to toggle .open in each panel
function toggleOpen() {
  this.classList.toggle('open');
}

//  Function to toggle .open-active after transition ends
function toggleActive(e) {
  //  Listen only for the flex-grow transition, or flex in some browsers
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

//  Event listener for each panel
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
