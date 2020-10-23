$(function(){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-dotshead'
    });

    

    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1, 
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-map',
  
    });

    $('.surf-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
    });
  
    $('.slider-map').slick({
        arrows: false,
        // fade: true,
        slidesToShow: 8,
        slidesToScroll: 1, 
        asNavFor: '.surf-slider',
        focusOnSelect: true,
    });

    $('.holder__slider, .shop__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-dotshead'
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt="star"></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt="star"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

    function calculate(){
      return ($('.slick-current .nights').val() * $('.slick-current .summ').data('nights') + ($('.slick-current .guests').val() - 1) * $('.slick-current .summ').data('guests')) - 1
    }

    let summ = calculate(); 
    $('.summ').html('$' + summ);

    $('.quantity-button').on('click', function(){
      summ = calculate(); 
      $('.summ').html('$' + summ);
    });

    $('.slick-arrow').on('click', function(){
      let summ = calculate(); 
      $('.slick-current .summ').html('$' + summ);

      $('.slick-current .quantity-button').on('click', function(){
        summ = calculate(); 
        $('.slick-current .summ').html('$' + summ);
      });
    });

    $('.surfboard-box__circle').on('click', function(){
      $(this).toggleClass('active')
    })
    

});


