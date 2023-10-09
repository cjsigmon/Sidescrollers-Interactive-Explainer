
$(document).ready(function() {
  $("#start-screen").quietflow({
    theme : "squareFlash",
    squareSize : 20,
    maxRed : 255,
    maxGreen : 40,
    maxBlue : 100,
    speed : 80
  })


    $('#START').css({
        display: "block"       
    });


    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            $('#start-screen').hide();
            $('.swiper').show();
            $('#canvas-scroll').show();
        }
      });


      $( "#start-btn" ).on( "click", function() {
        $('#start-screen').hide();
        $('.swiper').show();
        $('#canvas-scroll').show();
      } );



})
