/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/



/*      ALWAYS SHOW FILTERS DESKTOP      */



var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);



if (sPage == "index.php") {

    if (w < 950) {
        document.getElementById("filters").style.display = "none";
    } else {


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
    }

}


/*      MICRO INTERACTIE COMMENTS      */

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

function verrasMeFunc() {
    window.location = 'ericLucassenv2.html';
}

verrasMe.addEventListener("click", verrasMeFunc);


/*      RAITING MICROINTERACTIE     */

var star1 = document.getElementById("star1");
var star2 = document.getElementById("star2");
var star3 = document.getElementById("star3");
var star4 = document.getElementById("star4");
var star5 = document.getElementById("star5");
var imgSource = document.getElementById("animatie");
var yote = 1;
var interval;


/*   HIDE FEEDBACK  */
function hideFeedback() {

    imgSource.src = "images/10-desktop.svg";
    imgSource.style.display = "none";
    clearInterval(interval);
}

/*   SHOW FEEDBACK  */
function showFeedback() {


    imgSource.src = "images/ezgif.com-gif-maker.gif";
    imgSource.style.display = "block";
    console.log("yeet");


    if (yote == 1) {

        star1.classList = "fa fa-star starliked";
        star2.classList = "fa fa-star starliked";
        star3.classList = "fa fa-star starliked";

        yote = 0;

    } else {

        star1.classList = "fa fa-star star";
        star2.classList = "fa fa-star star";X
        star3.classList = "fa fa-star star";

        yote = 1;
    }
    interval = setInterval(hideFeedback, 1700);
}

/*   HIDE ERROR  */
function hideError() {

    imgSource.src = "images/10-desktop.svg";
    imgSource.style.display = "none";
    clearInterval(interval);
}

/*   SHOW ERROR  */
function showError() {

    imgSource.src = "images/ERROR.gif";
    imgSource.style.display = "block";

    console.log("yeet");

    star1.classList = "fa fa-star star";
    star2.classList = "fa fa-star star";
    star3.classList = "fa fa-star star";

    interval = setInterval(hideError, 1700);
}

star1.addEventListener("click", showFeedback);
star2.addEventListener("click", showFeedback);
star3.addEventListener("click", showFeedback);
star4.addEventListener("click", showError);
star5.addEventListener("click", showError);
