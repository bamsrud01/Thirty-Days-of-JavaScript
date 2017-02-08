//  URL from which city data will be requested
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//  Array to hold city data after it has been received
const cities = [];

//  Fetch function, returns a promise, use .then()
  //  Response data doesn't know what kind of file it is.  Returns another promise
fetch(endpoint)
  .then(res => res.json())
  .then(data => cities.push(...data));  //  Spread operator pushes items in data, rather than data array itself
