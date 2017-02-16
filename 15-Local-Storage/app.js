//  Select elements
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

const items = JSON.parse(localStorage.getItem('items')) || [];

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
  //  Set in local storage
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;  //  Skip unless input
  //  Use data-index
  const el = e.target;
  const index= el.dataset.index;
  items[index].done = !items[index].done;
  //  Set in local Storage
  localStorage.setItem('items', JSON.stringify(items));
}

//  Event listeners
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
