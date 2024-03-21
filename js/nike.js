

document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector('.buger-menu');
    const navbar = document.querySelector('.navbar');
  
    burgerMenu.addEventListener('click', function () {
      navbar.classList.toggle('active');
      burgerMenu.classList.toggle('active');
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".sideslip");
  
    function checkPosition() {
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let position = item.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
  
        if (position < screenHeight * 0.75) {
          item.classList.add("show");
        } else {
          item.classList.remove("show");
        }
      }
    }
  
    window.addEventListener("scroll", checkPosition);
  });


