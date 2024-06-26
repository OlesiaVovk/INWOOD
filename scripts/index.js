let slider = document.querySelector(".slider"),
  sliderList = slider.querySelector(".sliderList"),
  sliderTrack = slider.querySelector(".sliderTrack"),
  slides = slider.querySelectorAll(".slide"),
  arrows = slider.querySelector(".sliderArrows"),
  prev = arrows.children[0],
  next = arrows.children[1],
  slideIndex = 0,
  slideWidth = slides[0].offsetWidth,
  transition = true,
  slide = function () {
    if (transition) {
      sliderTrack.style.transition = "transform .5s";
    }
    sliderTrack.style.transform = `translate3d(-${
      slideIndex * slideWidth
    }px, 0px, 0px)`;

    prev.classList.toggle("disabled", slideIndex === 0);
    next.classList.toggle("disabled", slideIndex === --slides.length);
  };

arrows.addEventListener("click", function () {
  let target = event.target;

  if (target.classList.contains("popularbtnNext")) {
    slideIndex++;
  } else if (target.classList.contains("popularbtnPrev")) {
    slideIndex--;
  }
  slide();
});

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector("input");
const button = document.getElementById("subscribeButton");

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

function onInput() {
  if (!isEmailValid(input.value)) {
    button.setAttribute("disabled", "");
  } else {
    button.removeAttribute("disabled", "");
  }
}

input.addEventListener("input", onInput);
button.addEventListener("button", onInput);

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

window.addEventListener("scroll", function () {
  if (scrollY < document.documentElement.clientHeight) {
    arrowTop.style.opacity = "0";
  } else {
    arrowTop.style.opacity = "100";
  }
});
