/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/



/*      VERRAS ME KNOP      */

var verrasMe = document.getElementById("verrasMe");

function verrasMeFunc() {
    window.location = 'ericLucassenv2.html';
}

verrasMe.addEventListener("click", verrasMeFunc);


/*      RAITING MICROINTERACTIE     */


var filtersBtn = document.getElementById("filtersShowBtn");
var filters = document.getElementById("filters");
var boool = 1;

function showFilters() {

    if (boool ===1){

        boool = 0;
        filters.classList.remove("hide");
        filters.classList.add("show");

    }
    else{
        boool = 1;
        filters.classList.remove("show");
        filters.classList.add("hide");
    }


}

filtersBtn.addEventListener("click", showFilters);



