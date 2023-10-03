console.log("slides js loaded");
const slideNum = 7;
const slideShow = document.getElementById("slideShow");
const slides = document.getElementsByClassName("slide");


function slideBreak(x) {
    console.log("we called slide break at " + x);
    if (slides[x].classList.contains("visible")) {
        // then we are going backwards
        slides[x].classList.remove("visible");
        slides[x-1].classList.add("visible");


    } else if (slides[x-1].classList.contains("visible")) {
        // we are going forwards
        slides[x-1].classList.remove("visible");
        slides[x].classList.add("visible");
    }
}