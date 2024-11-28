// swiper 
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'loop',
        breakpoints: {
        },
    }).mount();
});

// swiper_gal
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide1', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        gap: '20px',
        // autoScroll: {
        //     speed: 1,
        // },
        breakpoints: {
        },
    }).mount();
});
window.splide.Extensions