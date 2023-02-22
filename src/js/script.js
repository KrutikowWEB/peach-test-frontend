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
    slidesToScroll: 1,

  });

  let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};

    let body=document.querySelector('body');
  if (isMobile.any()){
    body.classList.add('touch');
    let arrow=document.querySelectorAll('.arrow');
  for(i=0; i<arrow.length; i++){
        let thisLink=arrow[i].previousElementSibling;
        let subMenu=arrow[i].nextElementSibling;
        let thisArrow=arrow[i];

        thisLink.classList.add('parent');
      arrow[i].addEventListener('click', function(){
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
      });
    }
}else{
    body.classList.add('mouse');
}

function toggleSlide(item) {
  $(item).each(function(i) {
      $(this).on('click', function(e) {
          $('.direction__item').eq(i).toggleClass('open');
          $('.arrow2').eq(i).toggleClass('active');
          
      })
  });
};
toggleSlide('.arrow2');
toggleSlide('active');
