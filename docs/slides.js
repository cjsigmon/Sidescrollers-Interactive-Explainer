var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); 
  

//   const swiper = document.querySelector('.swiper').swiper;

// // Now you can use all slider methods like
// swiper.slideNext();

function evalSlideIndex(index) {
  var activeIndex = swiper.activeIndex;
  if (index === activeIndex) {
    swiper.slideTo(index - 1);

  } else {
    swiper.slideTo(index);
  }
}


// Get references to the next and prev buttons
var nextButton = document.getElementById('mynext');
var prevButton = document.getElementById('myback');


