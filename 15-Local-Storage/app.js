//  Select elements
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

const items = [];

//  Function to add item to list
function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text, // ES6 shorthand
    done: false
  }
  items.push(item);
  populateList(items, itemsList);
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <label for="">${plate.text}</label>
      </li>
    `;
  }).join('');
}

//  Event listeners
addItems.addEventListener('submit', addItem);
