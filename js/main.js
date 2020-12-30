$( document ).ready(function() {

  $('.result__content-wrapper').on('mouseenter', function (event) {
    $(event.target).parents('.result__item').addClass("active");
  });

  $('.result__content-wrapper').on('mouseleave', function (event) {
    $(event.target).parents().removeClass("active");
  });

  $('.result__button').on('click', function() {
    $('.result__modal-wrapper').addClass('visible');
  });
  
  $('.result__modal-close').on('click', function() {
    $('.result__modal-wrapper').removeClass('visible');
  });

  $(document).on('keydown', function(event){
    if (event.keyCode == 27) {
      $('.result__modal-wrapper').removeClass('visible');
    }
  });
  
});