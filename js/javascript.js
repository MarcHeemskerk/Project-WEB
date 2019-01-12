/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/



/*      VERRAS ME KNOP      */

var verrasMe = document.getElementById("verrasMe");

function verrasMeFunc() {
    window.location = './verhalen/ericLucassen.html';
}

verrasMe.addEventListener("click", verrasMeFunc);



/*      SHOW AND HIDE FILTERS     */

var filtersBtn = document.getElementById("filtersShowBtn");
var filters = document.getElementById("filters");

function showFilters() {

    if (filters.classList.contains("hide")) {

        filters.classList.remove("hide");
        filters.classList.add("show");

    } else {

        filters.classList.remove("show");
        filters.classList.add("hide");
    }


}

filtersBtn.addEventListener("click", showFilters);



/*          LIKING ARTICLES         */

var star1 = document.getElementById("star1");
var star2 = document.getElementById("star2");
var star3 = document.getElementById("star3");

function classChangerStar1() {

    if (star1.classList.contains("notliked")) {
        star1.classList.remove("notliked");
        star1.classList.add("liked");


    } else {
        star1.classList.remove("liked");
        star1.classList.add("notliked");

    }
}

function classChangerStar2() {

    if (star2.classList.contains("notliked")) {
        star2.classList.remove("notliked");
        star2.classList.add("liked");


    } else if (star2.classList.contains("liked")) {
        star2.classList.remove("liked");
        star2.classList.add("notliked");

    }
}

function classChangerStar3() {

    if (star3.classList.contains("notliked")) {
        star3.classList.remove("notliked");
        star3.classList.add("liked");

    } else if (star3.classList.contains("liked")) {
        star3.classList.remove("liked");
        star3.classList.add("notliked");

    }
}

star1.addEventListener("click", classChangerStar1);
star2.addEventListener("click", classChangerStar2);
star3.addEventListener("click", classChangerStar3);
