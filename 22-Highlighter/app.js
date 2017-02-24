//  Select all trigger elements
const triggers = document.querySelectorAll('a');

//  Create highlight element
const highlight = document.createElement('span');

//  Add highlight class and append to DOM
highlight.classList.add('highlight');
document.body.append(highlight);

//  Function to handle highlighting
function highlightLink() {
  //  Get information on WHERE on page the element lives
  const linkCoords = this.getBoundingClientRect();
  //  Create coordinates based on amount user has scrolled down
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  }
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

//  Event listeners for triggers
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
