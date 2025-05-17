
document.addEventListener('DOMContentLoaded', () => {
// burger 

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


// backet 
    const backetBtn = document.querySelector(".backet");
    const backetMain = document.querySelector(".backet_main");
    const closeBacketBtn = document.querySelector(".close_backet");
    const removeCandyBtns = document.querySelectorAll(".remove_candy");
    const overlay = document.querySelector('.overlay');
  
    if (backetBtn && backetMain && closeBacketBtn && overlay) {
      backetBtn.addEventListener("click", function () {
        backetMain.classList.add("open");
        overlay.classList.add('active');
      });
  
      closeBacketBtn.addEventListener("click", function () {
        backetMain.classList.remove("open");
        overlay.classList.remove('active');
      });

      overlay.addEventListener('click', () => {
        backetMain.classList.remove("open");
        overlay.classList.remove('active');
      });
  
      removeCandyBtns.forEach(button => {
        button.addEventListener("click", function () {
          this.closest("li").remove();
        });
      });
    }
  

});