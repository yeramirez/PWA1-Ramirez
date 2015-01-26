/**
 * Duel Fight Game - 100% working
 * Yanely Ramirez
 * January 2015
*/

// self-executing function
(function(){  //FUNCTION!

    console.log("** Fight **"); //Print title to Console.log

    //DEFINE YOUR dom pieces; Multiple ways to define/access HTML tags
    var fighter1_txt = document.querySelector("#ww").querySelector("p"); //You don't need # if using getElementbyID
    var fighter2_txt = document.querySelector("#bw").querySelector("p");
    var round_txt = document.querySelector("H5"); //Pull in text between h4 or h5 tag
    var button = document.getElementById("fight_btn"); //Pull in main button that starts the game

    console.log();

    //SETUP YOUR click event
    button.addEventListener("click", fight, false);
    //Don't use >> button.onclick = fight; Need Event Listener for more flexibility

    //CREATE ARRAY OF OBJECTS FOR 2 FIGHTERS
    var fighters = [
        {
            name:"Elektra", //index0.name or index[0] with object-key "name" = Elektra
            damage:20, //index0.damage
            health: 100 //index0.health
        },
        {
            name: "Black Widow", //index1.name or index[1] with object-key "name" = BlackWidow
            damage:20, //index1.damage
            health:100 //index1.health
        }];
    var round =1;

    //INITIALIZE DOM innerHTML text for top of HTML page
    round_txt.innerHTML = "Click FIGHT BUTTON to Start!";
    fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;

    //REMOVE OLDjs FUNCTION, But need the below f we use addEventListener in line 15 above.
    //function onClick() {
    //  fight();
    // }

    //CREATE "FIGHT" FUNCTION
    function fight(){

        //alert(fighters[0].name +":"+fighters[0].health+"  *START* "+fighters[1].name+":"+fighters[1].health);
        fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;

            //determine dmg
            var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);
            var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);

            //inflict damage
            fighters[0].health -= f1;
            fighters[1].health -= f2;

            console.log(fighters[0].health, fighters[1].health);

            //check for winner
            var result = winnerCheck();
            console.log(result);

            round_txt.innerHTML = "Round #" + round + " Results: ";
            round++;
            if (result === "no winner")
            {
                fighter1_txt.innerHTML = fighters[0].name + ": " + fighters[0].health;
                fighter2_txt.innerHTML = fighters[1].name + ": " + fighters[1].health;
            }else{
                fighter1_txt.innerHTML = result;
                fighter2_txt.innerHTML = "";
        //disable the button
                button.removeEventListener("click", fight, false);
        //button.disabled = true;

        //button.onclick = "return false";
                document.querySelector('.buttonblue').innerHTML = "DONE!!";
            }

    }
    function winnerCheck() {
        var result = "no winner";
        if (fighters[0].health < 1 && fighters[1].health < 1)
        {
            result = "You both die - GAME OVER";
        } else if (fighters[0].health < 1) {
            result = fighters[1].name + "WINS!!!";
        } else if (fighters[1].health < 1) {
            result = fighters[0].name + "WINS!!!";
        }
        return result;
    }
})();