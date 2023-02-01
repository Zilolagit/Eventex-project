import "bootstrap";
import Swiper from 'swiper/bundle';


const swiper = new Swiper('#slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 15,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
const swiper2 = new Swiper('#meetSwiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 15,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const swiper3 = new Swiper('#swiperImg', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    loop: false,
    spaceBetween: 15,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints:{
        768:{
            slidesPerView: 3,
        },
    },
    autoplay: false
});
const swiper4 = new Swiper('#saySwiper', {
    direction: 'horizontal',
    slidesPerView: "1",
    loop: false,
    spaceBetween: 15,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints:{
        767:{
            slidesPerView: "2",
        }
    }
});