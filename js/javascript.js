/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/



/*      ALWAYS SHOW FILTERS DESKTOP      */

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (w < 950) {
    document.getElementById("filters").style.display = "none";
}


/*      SHOW AND HIDE FILTERS      */

function showFilters() {
    var getFilters = document.getElementById("filters");
    if (getFilters.style.display === "block") {
        getFilters.style.display = "none";
    } else {
        getFilters.style.display = "block";
    }
}

document.getElementById("filtersShowBtn").addEventListener("click", showFilters);



/*      MICRO INTERACTIE RATING      */

var iconSelector = document.querySelector("section div article div span");
var yeet = 0;

function classChanger() {
    if (yeet == 1) {

        iconSelector.classList = "liked fas fa-star";
        yeet = 0;
    } else {
        iconSelector.classList = "notliked fas fa-star";
        yeet = 1;
    }
}

iconSelector.addEventListener("click", classChanger);



/*      VERRAS ME KNOP      */

var verrasMe = document.getElementById("verrasMe");

function verrasMeFunc(){
        window.location='ericLucassenv2.html';
    }

verrasMe.addEventListener("click", verrasMeFunc);
