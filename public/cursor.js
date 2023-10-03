$(document).ready(function() {
    $('body').css({
        cursor: 'none'
    });


    $(document).on('mousemove', function(e){
        if($('#start-btn:hover').length != 0) {
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

})


