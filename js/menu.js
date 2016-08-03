$(document).on("ready",function(){
    var newHeight = window.innerHeight;
    $('header').css('height', newHeight);
});
$(window).on("resize",function(){
    var newHeight = window.innerHeight;
    $('header').css('height', newHeight);

    var newWidth = window.innerWidth;
    if (newWidth > 768){
      $('header').css({
        'position': 'fixed',
        'opacity': '1',
        'right': '83.4%'
      });
    } else {
      $('header').css({
        'opacity': '0',
        'right': '100%'
      });
    }
});
$(document).on('click','.mov_menu',function(event){
  event.preventDefault();
  $('header').animate( {
    'right': '0%',
    'opacity' : '1'
}, 500 );
});
$(document).on('click','.closeMenu',function(event){
  event.preventDefault();
  $('header').animate( {
    'right': '100%',
    'opacity' : '0'
}, 500 );
});
