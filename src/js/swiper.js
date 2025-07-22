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
