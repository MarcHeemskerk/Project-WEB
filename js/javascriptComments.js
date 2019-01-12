/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


var yote;
var findClass;
var getStarsForChangeClass = document.querySelectorAll(".yeet");

var imageFolder = "../images/";

var imgSource = document.querySelector(".ratingsComments div:last-of-type img");

var interval;

var getStars1;
var getSpan1 = document.querySelectorAll(".yeet");
var getStars2;
var getSpan2 = document.querySelectorAll(".yote");
var tapTo = document.getElementById("tapTo");


/*          SCROLLBAR           */

/*          BRON:               */
/*  https://codepen.io/         */
/*  AllThingsSmitty/pen/gvpNWL  */

function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};



/*          CLASSCHANGER        */

function classChangerStars() {
    if (yote === 1) {

        tapTo.innerHTML="verwijder rate"
        tapTo.classList.remove("rate");
        tapTo.classList.add("verwijder");
        yote = 0;
        getStarsForChangeClass.forEach(findClass => {
            findClass.classList.remove("star");
            findClass.classList.add("starliked");
        });
    } else if (yote === 0) {

        tapTo.innerHTML="tap to rate:";
        tapTo.classList.remove("verwijder");
        tapTo.classList.add("rate");
        yote = 1;
        getStarsForChangeClass.forEach(findClass => {
            findClass.classList.remove("starliked");
            findClass.classList.add("star");
        });
    }
}


tapTo.addEventListener("click",classChangerStars);

/*          FEEDBACK RATING     */

function hideFeedback() {
    imgSource.src = imageFolder + "10-desktop.svg";
    imgSource.style.display = "none";

    clearInterval(interval);
}

function showFeedback() {

    imgSource.src = imageFolder + "ezgif.com-gif-maker.gif";
    imgSource.style.display = "block";
    yote = 1;
    classChangerStars();

    interval = setInterval(hideFeedback, 1700);
}



getSpan1.forEach(getStars1 => {

    getStars1.addEventListener("click", showFeedback);
});


/*          FOR.EACH LOOP       */
/*  https://medium.com/@jsdevray/5-ways-to-loop-over-dom-elements-from-queryselectorall-in-javascript-55bd66ca4128  */

function hideError() {

    imgSource.src = imageFolder + "10-desktop.svg";
    imgSource.style.display = "none";
    clearInterval(interval);
}

function showError() {

    imgSource.src = imageFolder + "ERROR.gif";
    imgSource.style.display = "block";
    yote = 0;
    classChangerStars();

    interval = setInterval(hideError, 1700);
}

getSpan2.forEach(getStars2 => {

    getStars2.addEventListener("click", showError);
});



/*          Text Counter          */
/*          https://stackoverflow.com/questions/12742595/show-how-many-characters-remaining-in-a-html-text-box-using-javascript/12742721
 */

function textCounter(field, field2, maxlimit) {
    var countfield = document.getElementById(field2);
    if (field.value.length > maxlimit) {
        field.value = field.value.substring(0, maxlimit);
        return false;
    } else {
        countfield.value = maxlimit - field.value.length;
    }
}




/*          REVIEWS          */

var article = document.querySelector(".ratingsComments section article:first-of-type");




/*          REVIEW PLAATSEN          */

var plaatsReviewButton = document.querySelector(".ratingsComments section button");


function hideReviewFeedback() {

    imgSource.src = imageFolder + "10-desktop.svg";
    imgSource.style.display = "none";
    document.getElementById("message").value = "";
    document.getElementById("counter").value = "135";
    article.classList.remove("hide");
    article.classList.add("show");

    clearInterval(interval);
}

function classChangerShowArticle() {

    imgSource.src = imageFolder + "reviewFeedback.gif";
    imgSource.style.display = "block";

    interval = setInterval(hideReviewFeedback, 3500);
}

plaatsReviewButton.addEventListener("click", classChangerShowArticle);


/*          REVIEW VERWIJDEREN          */

var verwijderButton = document.querySelector(".ratingsComments section article h6");

function classChangerHideArticle() {

    article.classList.remove("show");
    article.classList.add("hide");

}

verwijderButton.addEventListener("click", classChangerHideArticle);










