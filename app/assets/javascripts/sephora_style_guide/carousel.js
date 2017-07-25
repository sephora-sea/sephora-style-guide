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
});
