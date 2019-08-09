$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$(window).scroll(function() {
   var e = ".preanim",
       hT = $(e).offset().top,
       hH = $(e).outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)-200){
       $(e).addClass("anim");
  }
});