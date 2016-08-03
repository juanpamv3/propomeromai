$(document).on("ready",function(){
    var newHeight = window.innerHeight;
    $('#header1').css('height', newHeight);
});
$(window).on("resize",function(){
    var newHeight = window.innerHeight;
    $('#header1').css('height', newHeight);

    var newWidth = window.innerWidth;
    if (newWidth > 768){
      $('#header1').css({
        'position': 'fixed',
        'opacity': '1',
        'right': '83.4%'
      });
    } else {
      $('#header1').css({
        'opacity': '0',
        'right': '100%'
      });
    }
});
$(document).on('click','.mov_menu',function(event){
  event.preventDefault();
  $('#header1').animate( {
    'right': '0%',
    'opacity' : '1'
}, 500 );
});
$(document).on('click','.closeMenu',function(event){
  event.preventDefault();
  $('#header1').animate( {
    'right': '100%',
    'opacity' : '0'
}, 500 );
});
$(document).on('click','#header1 nav ul a',function(event){
  event.preventDefault();
  //alert("hola");
  $('#header1').delay(800).animate( {
    'right': '100%',
    'opacity' : '0'
}, 500 );
});
$(document).on('click','#publications',function(event){
  event.preventDefault();
  //alert("hola");
  window.location.href = "publicaciones.html";
});
