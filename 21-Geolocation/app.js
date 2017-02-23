//  Select elements
const arrow = document.querySelector('.arrow');
const speec = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.err(err);
  alert('You must enable location to use this application.');
});
