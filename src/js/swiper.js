import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-right",
      prevEl: ".swiper-button-left",
    },
    modules: [Navigation, Pagination],
  });

  const swiperInfo = new Swiper(".swiper-info", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-right-info",
    },
    modules: [Navigation],
    breakpoints: {
      1500: {
        slidesPerView: 4,
      },
      900: {
        slidesPerView: 3,
      },
      769: {
        slidesPerView: 2,
      },
    },
  });

  const swiperReviews = new Swiper(".swiper-reviews", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 200,
    navigation: {
      nextEl: ".swiper-button-right-reviews",
      prevEl: ".swiper-button-left-reviews",
    },
    modules: [Navigation],
  });
});
