/**
 * Created by yxnely on 1/27/15.
 */

(function(){
i = 0; //define your first global variable
var button = document.querySelector(".buttonred"); //define your second global variable

    //create array of students for your loop
        var students = [ //set array to hold all the information in which includes the name, address (complete), GPA, and date (complete)
            {
                name: "Wesley Luttrell", //this is my actual friends' name :)
                address: {street: "114 Harlem Avenue", city: "Orlando", state: "Florida"}, //give Wesley a fake address
                gpa: [2.5, 3.5, 4.0], //give Wesley a fake GPA
                date: new Date () //set the date for Wesley
            },
            {
                name: "Joe Erickson", //this is my actual friends' name
                address: {street: "1800 Shell Lane", city: "Orlando", state: "Florida"}, //give joe a fake address
                gpa: [1.5, 4.0, 4.0], //give joe a fake GPA since he dropped out
                date: new Date () //set the date for Joe
            },
            {
                name: "Francesca Hall", //this is my friends name, she is a member of the girls with boys' name club
                address: {street: "1800 Shell Lane", city: "Orlando", state: "Florida"}, //give frankie a fake address
                gpa: [4.5, 4.0, 4.0], //give Frankie an insanely good GPA
                date: new Date () //set the date for Frankie
            }
        ];

var max = students.length; //length of the students

//Create function to console.log out all the student objects info
        var consoleData = function(){ //name these the months of the year.


            for(var i = 0; i<students.length; i++){ //for loop to put data of student. the global variable comes into play
                console.log("Name: "+ students[i].name); //console the name of the student
                console.log("Address: "+students[i].address.street+", " //console the address of the student
                +students[i].address.city+", " //console the city
                +students[i].address.state); //console the state
                console.log("GPA: "+ students[i].gpa); //console the gpa avg
                console.log("Date: " + [students[i].date.getMonth()] + "/" + students[i].date.getDate() + "/" + students[i].date.getFullYear); //console the date with all elements
            }
            return false;
        };

    // CREATE FUNCTION TO DYNAMICALLY ADD A * NEW * STUDENT TO ORIGINAL ARRAY OF OBJECTS
        var addData= function(newName,newStreet,newCity,newState,newGPA,newDate){ //function to get the new information of the students
            var newStudent= students.push({ //push the information of the new student
                name: newName,
                address: {street:newStreet, city:newCity, state:newState},
                gpa: newGPA,
                date: newDate
            });
            return newStudent; //return the function information
        };


//Create function to read through array of GPA's and calculate 'GPA AVERAGE; of all gpas
    var myGPA = function(array){ //this is to calculate the gpa averages
        sum = 0;
        for(var i = 0; i<array.length; i++){
            sum+=array[i];
        }
        avgGPA = sum/array.length;
        return avgGPA;
    };

//Create function to display html of all student info
var displayData = function(){ //all of these innerHTML's get the information that is held within
    //define DOM elements for HTML page/display
    var innerName = document.getElementById("name");
    var innerAddress = document.getElementById("address");
    var innerGPA = document.getElementById("gpa");
    var innerDate = document.getElementById("date");
    var innerAvgGPA = document.getElementById("gpaavg");


    //if the # of student objects left over is not = to the max+1, display another student
    if ( i !== max+1){ //setting up to display student after student. the global variable comes into play

        innerName.innerHTML = "Name: "+ students[i].name, //like i said, these get all the information within
        innerAddress.innerHTML= "Address: " +students[i].address.street+", " +students[i].address.city+", " +students[i].address.state;
        innerGPA.innerHTML = "GPA: " + students[i].gpa;
        innerDate.innerHTML = "Date: " + [students[i].date.getMonth()] + "/" + students[i].date.getDate() + "/" + students[i].date.getFullYear();

        //console.log(student[i].gap
        var avg = myGPA(students[i].gpa); //making the average to only show two numbers using .toFixed
        innerAvgGPA.innerHTML= "Average GPA:  " + avgGPA.toFixed(2);

        //Else change the button text to Done
    }else{
        button.onclick = "return false";
        document.querySelector(".buttonred").innerHtml = "Done!!!";

    }
    i++; //increment number of items after each student object is processed
    return false;
};

//Create a button for click event
button.onclick = displayData; // when the next button is clicked then the data will be displayed

//Print titles to console.log showing original objects + Newly added objects
console.log('****** Below shows the original objects ******');
consoleData(); // Invoke function that console.logs all the data
addData('Jeremiah Hernandez', '305 Orange Dr', 'Orlando', 'Florida', [3.2, 4.0, 2.2], new Date());
console.log(' ');
console.log('********* Below shows the new object added to the original object **************');
consoleData();  // Invoke Function that Console Logs out all the data a 2nd time
displayData();  // Invoke Function that prints Student Info to HTML page
})();
