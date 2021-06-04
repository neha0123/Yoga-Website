
//     $(window).load(function(){
//         $('.se-pre-con').fadeOut();
//    });

$(document).ready(function(){
    lightbox.option({
               'wrapAround': false
      })
})


$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });

  