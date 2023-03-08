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
});
