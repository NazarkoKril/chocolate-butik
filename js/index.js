// slider main 
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'fade',
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
            1200: {
                perPage: 2,
            },
            500: {
                perPage: 1.3,
            },
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
        arrows: false,
        pagination: false,
        breakpoints: {
            1640: {
                perPage: 5,
            },
            1400: {
                perPage: 4,
            },
            1000: {
                perPage: 3,
            },
            700: {
                perPage: 2,
            },
            500: {
                perPage: 1.3,
            },
        },
    }).mount();

});

// like click
document.querySelectorAll('.like, .shop').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});

// video 
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video_main");
    const observer = new IntersectionObserver(([entry], obs) => {
        if (entry.isIntersecting) {
            const source = document.createElement("source");
            source.src = "./video/video_main.mp4";
            source.type = "video/mp4";
            video.appendChild(source);
            obs.disconnect();
        }
    });
    observer.observe(video);
});

// slider_new
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide3', {
        type: 'fade',
        focus: 'center',
        perPage: 1,
        gap: '20px',
        pagination: false,
        breakpoints: {
        },
    }).mount();

});