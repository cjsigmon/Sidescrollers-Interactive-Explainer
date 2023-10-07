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
    const bgWidthSegment = pixBg.width/10;
    var rectX = bgWidthSegment - bgScrollX + middleX;
    const rectY = canvas.height - 30; // Y-coordinate of the top-left corner
    const frameWidth = 64; // Width of a single player frame
    const frameHeight = 64; // Height of player frame
    const frameCount = 2; // Number of frames in the player spritesheet
    // sprite sheet animation variables
    let timeFrame = 0;
    let currentFrame = 0; // The current frame to display (on row)
    let frameRow = 0;
    var bgScrollX = 0;
    let breakPoints = new Set();
    // keys for user input
    const keys = {};
    var nextButton = document.getElementById('mynext');
    var prevButton = document.getElementById('myback');
    paper.install(window);
    // SLIDE 2 VARIABLES
    var playerXRange = document.getElementById("playerXRange");
    var playerXOutput = document.getElementById("playerXOutput");


    function skipBgAhead(iterations, dir) {
        let count = 0;
      
        const intervalId = setInterval(function() {      
          bgScrollX += dir * bgWidthSegment/iterations;
          count++;
      
          if (count >= iterations) {
            clearInterval(intervalId); // Stop the interval when the desired number of iterations is reached
            console.log('Function completed');
          }
        }, 1);
      }

    // Add event listeners to the buttons
    nextButton.addEventListener('click', function () {
        if (bgScrollX < pixBg.width-bgWidthSegment) {
            bgScrollX+= 4
            skipBgAhead(8, 1);
        }
    });
    
    prevButton.addEventListener('click', function () {
        if (bgScrollX > bgWidthSegment) {
            bgScrollX+= 1;
            skipBgAhead(8, -1);
        }
    });

    const player = {
        x: middleX,
        y: middleY - 64,
        width: 64,
        height: 64,
        fallSpeed: 2,
        jumpSpeed: 64,
        defaultSpeed: 8
    };


    for (let i = 0; i < 8; i++) {
        breakPoints.add(bgWidthSegment*(i+1));
        breakPoints.add(bgWidthSegment*(i+1)+1);
        breakPoints.add(bgWidthSegment*(i+1)+2);
        breakPoints.add(bgWidthSegment*(i+1)+3);
        breakPoints.add(bgWidthSegment*(i+1)+4);
        breakPoints.add(bgWidthSegment*(i+1)-1);
        breakPoints.add(bgWidthSegment*(i+1)-2);
        breakPoints.add(bgWidthSegment*(i+1)-3);
        breakPoints.add(bgWidthSegment*(i+1)-4);
        breakPoints.add(bgWidthSegment*(i+1)-5);

        breakPoints.add(bgWidthSegment*(i+1)-6);
        breakPoints.add(bgWidthSegment*(i+1)-7);
        breakPoints.add(bgWidthSegment*(i+1)-8);






    }

    // this controls the animation for player from their spritesheet
    function updatePlayerFrame() {
        if (timeFrame <= 10) {
            timeFrame++;
        } else {
            currentFrame = (currentFrame + 1) % frameCount;
            timeFrame = 0;
        }
    }

// user input for keys
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



function playerIsAfterRect() {
    return player.x > rectX;
}
function playerIsAboveRect() {
    return player.y <= rectY - player.height;
}
function playerIsOnRect() {
    return (player.y <= rectY - player.height + player.fallSpeed && player.y >= rectY - player.height - player.fallSpeed);
}

function playerIsAboveGround() {
    return player.y <= HEIGHT - player.height;
}
  
// updates player's position RELATIVE TO THE CANVAS
function updatePlayerPosition() {
    // handle how far the player falls
    if (playerIsAfterRect()) {
        if (playerIsAboveRect()) {
            player.y+= player.fallSpeed;
        }
    } else if (playerIsAboveGround()) {
        player.y+= player.fallSpeed;
    }
    // end player y positioning, start player x-positioning
    player.x = playerXRange.value * (middleX/5);
    playerXOutput.innerHTML = playerXRange.value;


}

// x - moving
function updateBGPosition() {
    if (keys['a'] || keys['A'] || keys['ArrowLeft']) {
        frameRow = 1; 
        if (bgScrollX > 0) {
            bgScrollX-= 6;
        }
    }
    if (keys['d'] || keys['D'] || keys['ArrowRight']) {
        frameRow = 1;
        if (bgScrollX < pixBg.width-canvas.width) {
            if (playerIsAfterRect()) {
                if (playerIsAboveRect() || playerIsOnRect()) {
                    bgScrollX+= 6;
                }
            } 
            else {
                bgScrollX+= 6;
            }
        }
    }

    if (breakPoints.has(bgScrollX)) {
        let index = bgScrollX/bgWidthSegment;
        evalSlideIndex(index);
        // this is a function in slides.js
        // go tell slides to update content
    }
} // end function updatePlayerPosition()

    function playFrames() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        updatePlayerFrame();
        updateBGPosition();
        updatePlayerPosition();

        
        // draw the background
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

        // draw a rectangle on the canvas
        rectX = bgWidthSegment - bgScrollX + middleX;
        var rectWidth = canvas.width-rectX; 
        var rectHeight = 30; 
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)"; // Red with 50% opacity
        ctx.fillRect(rectX, rectY, rectWidth, rectHeight);


        //  draw the player
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

