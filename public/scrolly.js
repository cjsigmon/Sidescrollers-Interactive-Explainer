$(document).ready(function() {
    'use strict';
    const canvas = document.getElementById("canvas-scroll");
    const ctx = canvas.getContext("2d");
    const X0 = 0 + canvas.width/8;
    const Y0 = canvas.height/9;
    const WIDTH = canvas.width - 2*X0;
    const HEIGHT = canvas.height- 4*Y0;
    const middleX = (WIDTH-X0)/2 + X0;
    const middleY = (HEIGHT-Y0)/2 + Y0;
    const spriteSheet = document.getElementById("spritesheet");
    const pixBg = document.getElementById("pixBg");
    const tv = document.getElementById("tv");

    const frameWidth = 16; // Width of a single frame in pixels
    const frameHeight = 16; // Height of a single frame in pixels
    const frameCount = 2; // Number of frames in the spritesheet
        // sprite sheet animation
    let timeFrame = 0;
    let currentFrame = 0; // The current frame to display (on row)
    let frameRow = 0;
    const keys = {};
    paper.install(window);

    const player = {
        x: middleX,
        y: Y0,
        width: 54,
        height: 54,
        fallSpeed: 4,
        jumpSpeed: 60,
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

    // let the functions begin
document.addEventListener('keydown', (event) => {
    keys[event.key] = true;
    if (keys['w'] || keys['W'] || keys['ArrowUp'] || keys[' ']) {
        console.log(event.key)
        if (player.y > Y0 + player.height) {
            player.y -= player.jumpSpeed;
        }
        frameRow = 0;
    }
  });
  
document.addEventListener('keyup', (event) => {
    keys[event.key] = false;
    frameRow = 0;
});


function updatePlayerPosition() {
    if (player.y < HEIGHT) {
        player.y+= player.fallSpeed;
    }
}
  

// x - moving
function updateBGPosition() {
    if (keys['a'] || keys['A'] || keys['ArrowLeft']) {
        frameRow = 1; 
    }
    if (keys['d'] || keys['D'] || keys['ArrowRight']) {
        frameRow = 1;
    }
} // end function updatePlayerPosition()

    function playFrames() {
        updatePlayerFrame();
        updateBGPosition();
        updatePlayerPosition();

        ctx.drawImage(
            pixBg,
            0,
            0,
            40,
            32,
            X0,
            Y0,
            WIDTH,
            HEIGHT
        );

        
        ctx.drawImage(
            tv,
            0,
            0,
            1288,
            1339,
            0,
            0,
            canvas.width,
            canvas.height   
        );

        






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

