var swiper = new Swiper(".mySwiper", {
  slidesPerView:1,
  loop:true,
  autoplay:{
    delay:3000,
    disableOnInteraction:true,
    pauseOnMouseEnter:true,
  },
  speed: 700
});
var swiper = new Swiper(".mySwiper02", {
  slidesPerView:4, //한번에 보여줄 슬라이드 수
  spaceBetween:15, //간격
  loop:true,
  autoplay:{
    delay:3000,
    disableOnInteraction:true,
    pauseOnMouseEnter:true,
  },
  breakpoints:{
    1024:{
      slidesPerView:4,
    },
    768:{
      slidesPerView:3,
    },
    480:{
      slidesPerView:2,
    },
  },
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});