// swiper 
const swiper = new Swiper(".main_hero_swiper", {
    loop: true,
    pagination: {
        el: ".pagination_main_hero",
        clickable: true,
    },
    navigation: {
        nextEl: ".next_main_hero",
        prevEl: ".prev_main_hero",
    },
    slidesPerView: 1,
    speed: 1000,

});