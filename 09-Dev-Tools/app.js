const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
// Regular
console.log('hello');
// Interpolated
console.log('hello, I am an %s string!', 'interpolated');
// Styled
console.log('%c I am styled text', 'font-size:50px; background:red;');
// warning!
console.warn('Warning!');
// Error :|
console.error('ERROR!');
// Info
console.info('Info or fact here');
// Testing
console.assert(1 == 2, 'That is wrong!');  //  If first arg is false, will send error message
// clearing
console.clear();
// Viewing DOM Elements
console.dir(p);  //  opens a dropdown of things in that element
console.clear();
// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}.`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`That's ${dog.age * 7} years old in dog years.`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Counts the number of times using this argument.');
// timing
console.time('Fetching data...');
