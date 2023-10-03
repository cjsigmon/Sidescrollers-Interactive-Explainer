
$(document).ready(function() {
    $('#START').css({
        display: "block"       
    });


    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            console.log("Yoy pressed enter")
            $('#start-screen').hide();
        }
      });


      $( "#start-btn" ).on( "click", function() {
        $('#start-screen').hide();
      } );



})
