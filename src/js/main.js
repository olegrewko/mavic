$(function(){
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrow--left" src="img/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrow--right" src="img/arrow-right.svg" alt="">',
    asNavFor: '.slider-dots'

  });
  $('.surf-slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrow--left" src="img/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrow--right" src="img/arrow-right.svg" alt="">'

  });
  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider'

  });
  $('.anim').addClass('animated fadeInDown infinite slow');

});
