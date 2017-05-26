/**
 * Created by VEDANT KASHYAP on 5/19/2017.
 */

var query;

function getRandomArticle() {
    query=document.getElementById("searchBar").value;
    $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&prop=extracts&origin=*&exintro=&explaintext=&srsearch="+query, function (response) {
        $("#searchResults").html("");
        $(".linebreak").css("display","none");
        var array1=response.query.search;
        for (var i=0; i<array1.length; i++) {
            url="http://en.wikipedia.org/wiki/"+array1[i].title.split(" ").join("%20");
            $("#searchResults").append("<a target='_blank' href="+url+"><li><p id='title'><h2>"+array1[i].title+"</h2></p><p id='summary'>"+array1[i].snippet+"</p></li>");
        }
        $("#searchResults").css("display","none");
        $("#searchResults").slideDown(2000);
        $(".container").slideDown(2000);
    });
}

function showSearchBar() {
    $("#SearchIcon").fadeOut(500);
    $("#inputGroup").delay(500).fadeIn(500);
    $("#searchBar").delay(500).fadeIn(500);
    $(".glyphicon-remove").delay(500).fadeIn(500);
    $("#submitButton").delay(500).fadeIn(500)
    $("#inputGroup").css("display","inline");
}

function hideSearchBar() {
    $("#searchBar").fadeOut(500);
    $(".glyphicon-remove").fadeOut(500);
    $("#inputGroup").fadeOut(500);
    $("#submitButton").fadeOut(500);
    $("#SearchIcon").delay(500).fadeIn(500);
}