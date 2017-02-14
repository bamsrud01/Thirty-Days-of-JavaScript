//  Provided function, ensuring functions run every 20 milliseconds rather than every millisecond
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

//  Select elements
const sliderImages = document.querySelectorAll('.slide-in');

//  Function to run when user scrolls
function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    //  Halfway through image and bottom of image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    //  Determine if image is half shown
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

//  Event listeners
window.addEventListener('scroll', debounce(checkSlide));
