//  Select all checkbox inputs
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// Variable holding information of checked boxes
let lastChecked;

//  Function to handle checkboxes
function handleCheck(e) {
  //  Variable determining if checkboxes are between first and last boxes
  let inBetween = false;
  //  Check to see if shift key was held down and box is being checked, not unchecked
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox == this || checkbox == lastChecked) {
        inBetween = !inBetween;
      }
      // Check all boxes between first and last checked
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  //  Assign lastChecked variable
  lastChecked = this;
}

//  Event listeners
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
