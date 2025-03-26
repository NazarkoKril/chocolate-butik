// header - footer
Promise.all([
    fetch('./assets/components/header.html').then(res => res.text()),
    fetch('./assets/components/footer.html').then(res => res.text())
  ])
  .then(([headerData, footerData]) => {
    document.getElementById('header').innerHTML = headerData;
    document.getElementById('footer').insertAdjacentHTML('beforeend', footerData);
    
    initBacket();

    const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (
        linkPath === currentPath || 
        (currentPath === '/' && linkPath.endsWith('/index.html')) || 
        currentPath.endsWith(linkPath)
      ) {
        link.classList.add('active');
      }
    });
  });
  
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

// backet 
function initBacket() {
    const backetBtn = document.querySelector(".backet");
    const backetMain = document.querySelector(".backet_main");
    const closeBacketBtn = document.querySelector(".close_backet");
    const removeCandyBtns = document.querySelectorAll(".remove_candy");
  
    if (backetBtn && backetMain && closeBacketBtn) {
      backetBtn.addEventListener("click", function () {
        backetMain.classList.add("open");
      });
  
      closeBacketBtn.addEventListener("click", function () {
        backetMain.classList.remove("open");
      });
  
      removeCandyBtns.forEach(button => {
        button.addEventListener("click", function () {
          this.closest("li").remove();
        });
      });
    }
  }
  

