/**
 * Created by VEDANT KASHYAP on 5/19/2017.
 */

var query;

function getRandomArticle() {
    query=document.getElementById("searchBar").value;
    $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&exintro=&explaintext=&titles="+query, function (response) {
        console.log(JSON.stringify(response));
    });
}

function showSearchBar() {
    $("#SearchIcon").fadeOut(700);
    $("#inputGroup").delay(700).fadeIn(700);
    $("#searchBar").delay(700).fadeIn(700);
    $(".glyphicon-remove").delay(700).fadeIn(700);
    $("#submitButton").delay(700).fadeIn(700)
    $("#inputGroup").css("display","inline");
}

function hideSearchBar() {
    $("#searchBar").fadeOut(700);
    $(".glyphicon-remove").fadeOut(700);
    $("#inputGroup").fadeOut(700);
    $("#submitButton").fadeOut(700);
    $("#SearchIcon").delay(700).fadeIn(700);
}