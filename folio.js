
$('.bxslider').bxSlider({
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 570,
    slideMargin: 50
  });

  $(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      randomStart:true,
      autoControls: true,
      stopAutoOnClick: true,
      pager:true,
      auto:true,
      slideWidth: 900,
    });
  });
