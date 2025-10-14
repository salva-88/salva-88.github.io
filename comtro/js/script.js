$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("header").addClass("scrolled");
  } else {
    $("header").removeClass("scrolled");
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

$(document). ready(function(){
    $('.toggle-bt').click(function(){
        $('.toggle-bt').toggleClass('toggled');
         $('.header nav ul').toggleClass('toggled');
    });
})