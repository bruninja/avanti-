(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$('.carousel.carousel-slider').carousel({fullWidth: true});

$(document).ready(function(){
     $('.carousel').carousel({
           dist:0,
           shift:0,
           padding:20,

     });

   });

   $(document).ready(function(){
        $('.products').carousel({
              dist:0,
              shift:0,
              padding:20,

        });

      });
