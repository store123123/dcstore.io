

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


  $(document).ready(function() {
    $('.size-span').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            checkSelection(); 
        } else {
            $('.size-span').removeClass('active');
            $(this).addClass('active');
            $('.please').css('visibility', 'hidden');
        }
    });

    function checkSelection() {
        if ($('.size-span.active').length === 0) {
            $('.please').css('visibility', 'visible'); 
        }
    }

    checkSelection(); 
});

//chinh so luong

$(document).ready(function() {
  $('.quantity-btn.minus').click(function() {
      var input = $(this).siblings('input[type="number"]');
      var currentValue = parseInt(input.val());
      if (currentValue > 1) {
          input.val(currentValue - 1);
      }
  });

  $('.quantity-btn.plus').click(function() {
      var input = $(this).siblings('input[type="number"]');
      var currentValue = parseInt(input.val());
      input.val(currentValue + 1);
  });
});

//doi hinh

function changeImage(newSrc) {
  document.getElementById('big-img').src = newSrc;
}

//alert
function addToCart() {
  const selectedSize = document.querySelector('.size-span.selected');
  const quantity = document.getElementById('quantity').value;
  if (selectedSize) {
      const sizeText = selectedSize.textContent;
      alert(`Đã thêm ${quantity} sản phẩm Nike Air Force 1 size ${sizeText} vào giỏ hàng.`);
  } else {
      alert('Vui lòng chọn size trước khi thêm vào giỏ hàng.');
  }
}

document.querySelectorAll('.size-span').forEach(span => {
  span.addEventListener('click', function () {
      document.querySelectorAll('.size-span').forEach(s => s.classList.remove('selected'));
      this.classList.add('selected');
  });
});

function buyNow() {
      alert(`Đã xác nhận đơn hàng`);
}

