$(document).ready(function() {
  $('.product-card').click(function(e) {
    if (e.target.className === 'carousel-arrow-right') {
      $('.product-card-variants').animate({ scrollLeft: '+=60' }, 500);
      $('.carousel-more-variants').hide();
    } else if (e.target.className === 'carousel-arrow-left') {
      $('.product-card-variants').animate({ scrollLeft: '-=60' }, 500);
      $('.carousel-more-variants').show();
    }
  });

  $('.product-card').mouseover(function(e) {
    if ($('[name="variant11"]').hasClass('active')) {
      $('.product-card-variants').animate({ scrollLeft: $('[name="variant11"]').offset().left }, 500);
      $('.carousel-more-variants').hide();
    } else if ($('[name="variant12"]').hasClass('active')) {
      $('.product-card-variants').animate({ scrollLeft: $('[name="variant12"]').offset().left }, 500);
      $('.carousel-more-variants').hide();
    } else if ($('[name="variant13"]').hasClass('active')) {
      $('.product-card-variants').animate({ scrollLeft: $('[name="variant13"]').offset().left }, 500);
      $('.carousel-more-variants').hide();
    }
  });
});
