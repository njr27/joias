import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.main-banner', {
    
    direction: 'horizontal',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1,
})

const swiper2 = new Swiper('.content__showcasebox', {
    
  direction: 'horizontal',

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})