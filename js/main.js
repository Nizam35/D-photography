
// to add visibilty to the top

$(document).ready(function(){
    $(window).bind('scroll', function() {
 if ($(window).scrollTop() > 150) {
              $(' #to').addClass('visible');
          }
          else {
              $(' #to').removeClass('visible');
          }
     });
 });

//  animate smooth scroll

$('#view-more').on('click', function(){
    const images = $('#images').position().top;

    // to animate
    $('html , body').animate({
        scrollTop:images
    },
    900
    );
 
});

$('#to').on('click', function(){
    const landing = $('#landing').position().top;
// to animate
$('html , body').animate({
    scrollTop:landing
},
900
);
});

