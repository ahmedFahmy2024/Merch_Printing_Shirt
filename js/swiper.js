const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    // when window width is >= 480px
    430: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    991: {
      slidesPerView: 5,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 40
    },

  },

  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});