// swiper 
var splide = new Splide('.splide', {
    type: 'loop',
    arrowPath: 'M6.34576 31L0 31L-6.77527e-07 15.5L-1.35505e-06 0L6.34576 -7.2751e-07L19.0373 15.5L6.34576 31Z',
});

splide.mount();

var splide = new Splide('.info_slide', {
    type: 'loop',
    arrowPath: 'M6.34576 31L0 31L-6.77527e-07 15.5L-1.35505e-06 0L6.34576 -7.2751e-07L19.0373 15.5L6.34576 31Z',
    drag: 'free',
    focus: 'center',
    perPage: 3,
    autoScroll: {
        speed: -1,
    },
});

splide.mount();