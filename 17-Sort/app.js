//  Names used in sorting
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

//  Strip articles from name
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}
//  /^ = starts with
//  /i = case insensitive

//  Sorted bands and sorting function
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

//  Select element and add sorted bands
document.querySelector('#bands').innerHTML = sortedBands
  .map(band => `<li>${band}</li>`)
  .join('');  //  Necessary, otherwise commas will be added to HTML as well
