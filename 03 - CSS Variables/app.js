//  Select all inputs in the DOM
const inputs = document.querySelectorAll('.controls input');

//  Function to handle update of CSS Variables
function handleUpdate() {
  //  Add 'px' suffix to CSS variables using dataset
    //  dataset will return an object of all 'data-' attributes on element
    //  If there is no data-sizing, suffix will be nothing
  const suffix = this.dataset.sizing || '';
  //  Update the CSS variables
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

//  Add event listener for each input
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
