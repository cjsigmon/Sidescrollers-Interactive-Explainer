const canvas = document.getElementById("canvas-scroll");
const ctx = canvas.getContext("2d");
const middleX = canvas.width/2;
const middleY = canvas.height/2;


$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(canvas);
    var tool = new Tool();


    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point.x, event.point.y, 50);
        c.fillColor = 'green';
    }


    paper.view.draw();
})

console.log("scrolly js  loaded");
