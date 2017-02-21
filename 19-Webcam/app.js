//  Select elements
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

//  Access user's webcam
function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    }).catch(err => {
      console.error('Error:', err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    //  Take pixel data
    let pixels = ctx.getImageData(0, 0, width, height);
    //  Apply effect
    // pixels = redEffect(pixels);
    pixels = rgbSplit(pixels);
    //  Show altered image
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

//  Handles capturing an image from the video
function takePhoto() {
  //  Play photo sound
  snap.currentTime = 0;
  snap.play();
  //  Take data from canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'photobooth');
  link.innerHTML = `<img src="${data}" alt="Photobooth Image" />`;
  strip.insertBefore(link, strip.firstChild);
}

//  Filters and effects

function redEffect(pixels) {
  //  Pixels are logged as an array of alternating rgba values
  for(let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] += 100;
  }
  return pixels;
}

function rgbSplit(pixels) {
  //  Pixels are logged as an array of alternating rgba values
  for(let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i]; //  Red
    pixels.data[i + 100] = pixels.data[i + 1]; //  Red
    pixels.data[i - 150] = pixels.data[i + 2]; //  Red
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
