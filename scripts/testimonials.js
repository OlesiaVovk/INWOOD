let gallery = document.querySelector(".testimonials_gallery"),
  galleryList = gallery.querySelector(".testimonials_gallery_list"),
  galleryTrack = gallery.querySelector(".testimonials_gallery_track"),
  gallerySlides = gallery.querySelectorAll(".testimonials_gallery_slide"),
  galleryArrows = gallery.querySelector(".testimonials_gallery_arrows"),
  prevArrow = galleryArrows.children[0],
  nextArrow = galleryArrows.children[1],
  galleryIndex = 0,
  galleryWidth = gallerySlides[0].offsetWidth,
  slideTransition = true,
  galleryMove = function () {
    if (slideTransition) {
      galleryTrack.style.slideTransition = "transform .5s";
    }
    galleryTrack.style.transform = `translate3d(-${
      galleryIndex * galleryWidth
    }px, 0px, 0px)`;

    prevArrow.classList.toggle("disabled", galleryIndex === 0);
    nextArrow.classList.toggle(
      "disabled",
      galleryIndex === --gallerySlides.length
    );
  };

galleryArrows.addEventListener("click", function () {
  let target = event.target;

  if (target.classList.contains("testimonials_gallery_btnNext")) {
    galleryIndex++;
  } else if (target.classList.contains("testimonials_gallery_btnPrev")) {
    galleryIndex--;
  }
  galleryMove();
});
