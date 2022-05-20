
var scroll =
window.requestAnimationFrame ||
function(callback) {
  window.setTimeout(callback, 1000 / 60);
};
var elementsToShowFromLeft = document.querySelectorAll(
".show-on-scroll-from-left"
);
var elementsToShowFromRight = document.querySelectorAll(
".show-on-scroll-from-right"
);
var elementsToShowFromDown = document.querySelectorAll(
".show-on-scroll-from-down"
);

// Repeatition of scroll.
function loop() {
elementsToShowFromLeft.forEach(function(element) {
  if (isElementInViewport(element)) {
    element.classList.add("animate__fadeInLeft");
  } else {
    element.classList.remove("animate__fadeInLeft");
  }
});

elementsToShowFromRight.forEach(function(element) {
  if (isElementInViewport(element)) {
    element.classList.add("animate__fadeInRight");
  } else {
    element.classList.remove("animate__fadeInRight");
  }
});

elementsToShowFromDown.forEach(function(element) {
  if (isElementInViewport(element)) {
    element.classList.add("animate__fadeIn");
  }
});

scroll(loop);
}

loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
// special bonus for those using jQuery
if (typeof jQuery === "function" && el instanceof jQuery) {
  el = el[0];
}
var rect = el.getBoundingClientRect();
return (
  (rect.top <= 0 && rect.bottom >= 0) ||
  (rect.bottom >=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.top <=
      (window.innerHeight || document.documentElement.clientHeight)) ||
  (rect.top >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight))
);
}
