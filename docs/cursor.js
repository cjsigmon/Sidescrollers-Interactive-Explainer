$(document).ready(function() {
    $('body').css({
        cursor: 'none'
    });

    $('.my-swiper-button-next').mouseenter(function () {
        console.log('Mouse entered .swiper-button-next');
    });


    $(document).on('mousemove', function(e){
        if($('#start-btn:hover').length != 0 || $('.cursor-none:hover').length != 0 
        || $('.answers:hover').length != 0 || $('a:hover').length != 0) {
            $('#custom-cursor').css({
                left:  e.pageX,
                top:   e.pageY,
                "background-image": "url('img/cursor-pointer.png')",
                pointerEvents: 'none'
            });
        } else {
            $('#custom-cursor').css({
                left:  e.pageX,
                top:   e.pageY,
                "background-image": "url('img/cursor-normal.png')",
                pointerEvents: 'none'
            });
        }
    
    });

});


