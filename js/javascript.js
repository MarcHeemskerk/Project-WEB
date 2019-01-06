/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (w<950){
document.getElementById("filters").style.display = "none";
}

function showFilters() {
     var x = document.getElementById("filters");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    }
document.getElementById("filtersShowBtn").addEventListener("click", showFilters);



