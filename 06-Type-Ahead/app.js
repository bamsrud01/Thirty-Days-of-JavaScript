//  URL from which city data will be requested
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//  Array to hold city data after it has been received
const cities = [];

//  DOM elements
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

//  Event listeners
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

//  Fetch function, returns a promise, use .then()
  //  Response data doesn't know what kind of file it is.  Returns another promise
fetch(endpoint)
  .then(res => res.json())
  .then(data => cities.push(...data));  //  Spread operator pushes items in data, rather than data array itself

//  Function to find matches between user input and existing data
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    //  Here, determine if array item is a matches
      //  Create a regular expression.  g = global, i = insensitive
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

//  Function to add commas to large numbers
function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

//  Function to display matches
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    //  First, replace the matched text with the styled span
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    //  Then, create an html element for each match, and join together in a single string
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}
