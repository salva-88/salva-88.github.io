$(window).on("scroll", function () {
  if ($(this).scrollTop() > 50) {
    $(".header").addClass("scrolled");
  } else {
    $(".header").removeClass("scrolled");
  }
});




$('.slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2500,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>'
});

$(document).ready(function () {
  $('.toggle-bt').click(function () {
    $('.toggle-bt').toggleClass('toggled');
    $('.header nav ul').toggleClass('toggled');
  });
})


$(document).ready(function () {
  $(document).ready(function () {
    const toggleBtn = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const overlay = document.querySelector(".mobile-nav-overlay");

    toggleBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
      overlay.classList.toggle("open");
      toggleBtn.classList.toggle("active"); // toggle X
    });

    overlay.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      overlay.classList.remove("open");
      toggleBtn.classList.remove("active");
    });
  });



})