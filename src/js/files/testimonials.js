// Swiper
import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.testimonials__swiper', {
  modules: [Navigation, Pagination],
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

//     // Responsive breakpoints
//     breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 3,
//       spaceBetween: 20
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     },
//   }
});
