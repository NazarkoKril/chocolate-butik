// burger 
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger__icon');
    const burgerMenu = document.querySelector('.burger__menu');

    if (burgerIcon && burgerMenu) {
        burgerIcon.addEventListener('click', () => {
            burgerIcon.classList.toggle('active');
            burgerMenu.classList.toggle('active');
            document.body.style.overflow = burgerMenu.classList.contains('active') ? 'hidden' : '';
        });

        document.addEventListener('click', (event) => {
            if (!burgerMenu.contains(event.target) && !burgerIcon.contains(event.target)) {
                burgerIcon.classList.remove('active');
                burgerMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const backetBtn = document.querySelector(".backet");
    const backetMain = document.querySelector(".backet_main");
    const closeBacketBtn = document.querySelector(".close_backet");
    const removeCandyBtns = document.querySelectorAll(".remove_candy");

    // Відкриття кошика
    backetBtn.addEventListener("click", function () {
        backetMain.classList.add("open");
    });

    // Закриття кошика
    closeBacketBtn.addEventListener("click", function () {
        backetMain.classList.remove("open");
    });

    // Видалення цукерки зі списку
    removeCandyBtns.forEach(button => {
        button.addEventListener("click", function () {
            this.closest("li").remove();
        });
    });
});
