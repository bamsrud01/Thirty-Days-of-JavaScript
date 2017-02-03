//  Select hand elements
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

//  Function to
function setDate() {
  const now = new Date();

  //  Break down the time from 'now' constant
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  //  Determine the degree for each hand
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minuteDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = ((hours / 12) * 360) + 90;

  //  Set each hand to its degree
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

};

//  Run setDate() every second
setInterval(setDate, 1000);
