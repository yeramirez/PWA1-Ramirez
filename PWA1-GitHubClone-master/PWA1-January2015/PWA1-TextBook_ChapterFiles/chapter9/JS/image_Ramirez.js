/**
 * Created by yxnely on 1/21/15.
 */

window.onload = init;  //telling JS to wait until page is fully loaded

function init() {
    var images = document.getElementsByTagName("img"); //gets those of the image tags and makes arrays behind the scenes
    for (var i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
    }
};

function showAnswer(eventObject) { //Declaring function and passing Event Obj from onclick EVENT
                                        //...for showAnswer to use each time onclick happens...
    var image = eventObject.target; //Declaring var to hold target of Element that TRIGGERED Event
    var name = image.id; //using name of target element to grab ID property
    name = "images/" + name + ".jpg"; //attaching file extension to end of image name
    image.src = name; //changing source of image to name
    setTimeout(reblur, 2000, image);
}

function reblur (image) {
    //var image = image.target;
    var name = image.id;
    console.log("You click on image: "+ name);
    name = "images/" + name + "blur.jpg";
    image.src = name;

}


//setting up event handler for window.onload event
/*var image = document.getElementsByTagName("zero"); //declaring variable to hold Image Element ID
 image.onclick = showAnswer; //telling JS to call "showAnswer" event handle
 //...when user clicks on image
 }

 function showAnswer() { //Declaring function for showing answer to user
 var image = document.getElementsByTagName("zero"); //Getting access to Image Element ID again
 image.src = "images/zero.jpg"; //Changing source of Image Element on HTML page
 }*/