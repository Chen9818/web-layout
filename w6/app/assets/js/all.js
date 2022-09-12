AOS.init();

// import Swiper from 'swiper';

const swiper = new Swiper(".swiper", {
  autoplay: {
      disableOnInteraction: false,
      delay: 0
  },
  speed: 3000,
  loop: true,
  watchSlidesProgress: true,
  //多欄
  breakpoints: {
      480: {
          slidesPerView: 3
      },
      768: {
          slidesPerView: 4
      },
      1200: {
          slidesPerView: 5
      }
  }

});

const swiperComment = new Swiper('.swiper-comment', {
    // Optional parameters
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

