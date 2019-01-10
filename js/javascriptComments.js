/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var star1 = document.getElementById("star1");
var star2 = document.getElementById("star2");
var star3 = document.getElementById("star3");
var star4 = document.getElementById("star4");
var star5 = document.getElementById("star5");

var imgSource = document.getElementById("animatie");

function hideAnimation() {


    imgSource.src = "images/10-desktop.svg";
    imgSource.style.display = "none";
}

function showAnimation() {

    imgSource.src = "images/ezgif.com-gif-maker.gif";
    imgSource.style.display = "block";
    console.log("yeet");
    setInterval(hideAnimation, 2000);
}

star1.addEventListener("click", showAnimation);
star2.addEventListener("click", showAnimation);
star3.addEventListener("click", showAnimation);
star4.addEventListener("click", showAnimation);
star5.addEventListener("click", showAnimation);


