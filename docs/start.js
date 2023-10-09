
$(document).ready(function() {



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
