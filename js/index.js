// slider main 
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'loop',
        breakpoints: {
        },
    }).mount();
});

// slider_info
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide1', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        gap: '20px',
        pagination: false,
        autoScroll: {
            speed: 1,
        },
        breakpoints: {
        },
    }).mount(window.splide.Extensions);

});

// slider_new
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide2', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 6,
        gap: '20px',
        pagination: false,
        breakpoints: {
        },
    }).mount();

});


document.querySelectorAll('.like, .shop').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});