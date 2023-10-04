$(document).ready(function() {
    'use strict';
    const canvas = document.getElementById("canvas-scroll");
    const ctx = canvas.getContext("2d");

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const middleX = WIDTH/2;
    const middleY = canvas.height/2;
    const spriteSheet = document.getElementById("spritesheet");
    const pixBg = document.getElementById("pixBg");
    // const tv = document.getElementById("tv");

    const frameWidth = 64; // Width of a single frame in pixels
    const frameHeight = 64; // Height of a single frame in pixels
    const frameCount = 2; // Number of frames in the spritesheet
        // sprite sheet animation
    let timeFrame = 0;
    let currentFrame = 0; // The current frame to display (on row)
    let frameRow = 0;
    let bgScrollX = 0;
    let breakPoints = new Set();
    const keys = {};
    paper.install(window);

    const player = {
        x: middleX,
        y: middleY,
        width: 64,
        height: 64,
        fallSpeed: 2,
        jumpSpeed: 64,
        defaultSpeed: 8
    };

    const bgWidthSegment = pixBg.width/8;
    for (let i = 0; i < 7; i++) {
        breakPoints.add(bgWidthSegment*(i+1));
    }

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
        if (player.y > 0) {
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
    if (player.y < HEIGHT - player.height) {
        player.y+= player.fallSpeed;
    }
}
  

// x - moving
function updateBGPosition() {
    if (keys['a'] || keys['A'] || keys['ArrowLeft']) {
        frameRow = 1; 
        if (bgScrollX > 0) {
            bgScrollX-= 2;
        }
    }
    if (keys['d'] || keys['D'] || keys['ArrowRight']) {
        frameRow = 1;
        if (bgScrollX < pixBg.width-40) {
            bgScrollX+= 2;
        }
    }

    if (breakPoints.has(bgScrollX)) {
        let index = bgScrollX/bgWidthSegment;
        // slideBreak(index);
        // go tell slides to update content
    }
} // end function updatePlayerPosition()

    function playFrames() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        updatePlayerFrame();
        updateBGPosition();
        updatePlayerPosition();

        

        ctx.drawImage(
            pixBg,
            bgScrollX,
            0,
            1200,
            160,
            0,
            0,
            canvas.width,
            canvas.height
        );

        
        // ctx.drawImage(
        //     tv,
        //     0,
        //     0,
        //     1288,
        //     1339,
        //     0,
        //     0,
        //     canvas.width,
        //     canvas.height   
        // );

    

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

