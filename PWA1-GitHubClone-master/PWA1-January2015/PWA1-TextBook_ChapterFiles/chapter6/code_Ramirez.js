//Made by: Yanely Ramirez

/*
var access = document.getElementById("code9"); //creating variable to get access - code9 is a paragraph element
var code = access.innerHTML; //creating variable to use innerHTML to get the content
code = code + " midnight"; //take whatever text is inside the code element and add the word "midnight"
alert(code); //alert the code element to display it
*/
function init() {
    var myGreenText = document.getElementById("mygreentext"); //creating variable to get access to myGreenText
    myGreenText.innerHTML = "Green Alert: set by phaser alert"; //getting the content
    myGreenText.setAttribute("class", "greentext");

    var myRedText = document.getElementById("myredtext"); //creating variable to get access to myGreenText
    myRedText.innerHTML = "Red Alert: set by phaser alert"; //getting the content
    myRedText.setAttribute("class", "redtext");


    var myBlueText = document.getElementById("mybluetext"); //creating variable to get access to myGreenText
    myBlueText.innerHTML = "Blue Alert: set by phaser alert";//getting the content
    myBlueText.setAttribute("class", "bluetext");
}

window.onload = init; //telling it to load the page first and then do the javascript

