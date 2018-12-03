/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

document.getElementById("filters").style.display = "none";

function showFilters() {
    var idSelector = document.getElementById("filters");
    if (idSelector.style.display === "block") {
        idSelector.style.display = "none";
    } else {
        idSelector.style.display = "block";
    }
}
document.getElementById("filtersShowBtn").addEventListener("click", showFilters);

