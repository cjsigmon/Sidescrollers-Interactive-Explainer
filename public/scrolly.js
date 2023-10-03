$(document).ready(function() {
    'use strict';
    const canvas = document.getElementById("canvas-scroll");
    const ctx = canvas.getContext("2d");
    const WIDTH = canvas.width-130;
    const X0 = 135;
    const HEIGHT = canvas.height-150;
    const Y0 = 50;
    const middleX = (WIDTH-X0)/2 + X0;
    const middleY = (HEIGHT-Y0)/2 + Y0;
    const spriteSheet = document.getElementById("spritesheet");
    const frameWidth = 16; // Width of a single frame in pixels
    const frameHeight = 16; // Height of a single frame in pixels
    const frameCount = 2; // Number of frames in the spritesheet
        // sprite sheet animation
    let timeFrame = 0;
    let currentFrame = 0; // The current frame to display (on row)
    let frameRow = 0;
    paper.install(window);

    const player = {
        x: middleX,
        y: HEIGHT - 54,
        width: 54,
        height: 54,
        speedY: 8,
        defaultSpeed: 8
    };

    function updatePlayerFrame() {
        if (timeFrame <= 10) {
            timeFrame++;
        } else {
            currentFrame = (currentFrame + 1) % frameCount;
            timeFrame = 0;
        }
    }

    function playFrames() {
        updatePlayerFrame();
        paper.setup(canvas);
        var tool = new Tool();
    
    
        var tv = new Raster('tv');
        tv.position = view.center;
        tv.scale(canvas.height/tv.height * 0.83);
    
        var c = Shape.Circle(middleX, middleY, 5);
        c.fillColor = 'green';


    


        paper.view.draw();
        ctx.drawImage(
            spriteSheet,
            currentFrame * frameWidth + 2,
            frameRow * frameHeight,
            frameWidth,
            frameHeight,
            player.x,
            player.y,
            player.width,
            player.height
        );
        requestAnimationFrame(playFrames); // continue the animation loop

    }

    // start the animation loop
    requestAnimationFrame(playFrames);
})

