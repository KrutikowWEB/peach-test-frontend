$('#shevron-bottom').on('click', function() {
  $('#sub-list, #shevron-right').fadeIn();
  $('#shevron-bottom').fadeOut();
});

$('#shevron-right').on('click', function() {
  $('#sub-list, #shevron-right').fadeOut();
  $('#shevron-bottom').fadeIn();
});

$(document).ready(function(){
  $(".offices__item").click(function() {
      $('.local').not(".st"+ID).hide();
   var ID = jQuery(this).attr("id");
   $(".st"+ID).show('slow');
   });
  });

  $('.life__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L2 11L12 21" stroke="#A30C33" stroke-width="2"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L11 11L1 21" stroke="#A30C33" stroke-width="2"/></svg></button>',
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });