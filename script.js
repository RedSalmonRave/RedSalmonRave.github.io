var myFavouriteNumber = 78
var myName = "Enda"
var isThisTrue = true;

var likes = 0;
var comment = "";


function greenBackground(){
    document.getElementById("text").style.backgroundColor = "red";

}

function like(){
    likes++
    console.log(likes);
    document.getElementById("numberoflikes").innerHTML = likes;
}

function changeFont(){
    document.getElementById("numberoflikes").style.fontFamily = "Impact";
}

function addComment(){
    comment += document.getElementById("commentBox").nodeValue;
    document.getElementById("comments").innerHTML = comment
}