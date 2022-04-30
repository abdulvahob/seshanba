var swiper = new Swiper(".mySwiper", {
   centeredSlides: true,
   loop: true,
   autoplay: {
     delay: 2500,
     disableOnInteraction: true,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });