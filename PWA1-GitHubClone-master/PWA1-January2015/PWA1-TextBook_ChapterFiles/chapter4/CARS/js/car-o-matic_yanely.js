/*Yanely Ramirez
  Jan 2015
  PWA-2
*/

var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
var years = ["1955", "1957","1948", "1954", "1961"];
var colors = ["red", "blue", "tan", "yellow", "white"];
var convertible = [true, false];

    function makeCar() {


      var rand1 = Math.floor(Math.random() * Object.keys(makes).length) + 1;
      var rand2 = Math.floor(Math.random() * Object.keys(models).length + 1);
      var rand3 = Math.floor(Math.random() * Object.keys(years).length + 1);
      var rand4 = Math.floor(Math.random() * Object.keys(colors).length + 1);
      var rand5 = Math.floor(Math.random() * 5) + 1;
      var rand6 = Math.floor(Math.random() * 2);


      function makeCar() {

        var makes = {key1: "Chevy", key2: "GM", key3: "Fiat", key4: "Webville Motors", key5: "Tucker"};
        var models = {key1: "Cadillac", key2: "500", key3: "Bel-Air", key4: "Taxi", key5: "Torpedo"};
        var years = {key1: "1955", key2: "1957", key3: "1948", key4: "1954", key5: "1961"};
        var colors = {key1: "red", key2: "blue", key3: "tan", key4: "yellow", key5: "white"};
        var convertible = {key1: true, key2: false};

        var rand1 = Math.floor(Math.random() * makes.length);
        var rand2 = Math.floor(Math.random() * models.length);
        var rand3 = Math.floor(Math.random() * years.length);
        var rand4 = Math.floor(Math.random() * colors.length);
        var rand5 = Math.floor(Math.random() * 5) + 1;
        var rand6 = Math.floor(Math.random() * 2);

        var randomKey1 = key + rand1;
        var randomKey2 = key + rand2;
        var randomKey3 = key + rand3;
        var randomKey4 = key + rand4;
        var randomKey5 = key + rand5;
        var randomKey6 = key + rand6;


      };

      //return car;
    }
      function displayCar(car){
        console.log("MAKES has this many keys: " + Object.keys(makes).length);
          document.write("<br>" + "MAKES has this many keys: " + Object.keys(makes).length);
        console.log("MODELS has this many keys: " + Object.keys(models).length);
          document.write("<br>" + "MODELS has this many keys: " + Object.keys(models).length);
        console.log("YEARS has this many keys: " + Object.keys(years).length);
          document.write("<br>" + "YEARS has this many keys: " + Object.keys(years).length);
        console.log("COLORS has this many keys: " + Object.keys(colors).length);
          document.write("<br>" + "COLORS has this many keys: " + Object.keys(colors).length);
          console.log("CONVERTIBLE has this many keys: " + Object.keys(convertible).length);
          document.write("<br>" + "CONVERTIBLE has this many keys: " + Object.keys(convertible).length);
    }

     /* var car = {
        make: makes [rand1],
        model: models[rand2],
        year: years [rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6],
        mileage: 0
      };
     /* return car;

    }
      /*function displayCar(car){
        alert("Congratulations! Your new car is a " + car.year + " " + car.make + " " + car.model);
        document.write("<br>" + "Congratulations! Your new car is a " + car.year + " " + car.make + " " + car.model);
        console.log("Congratulations! Your new car is a " + car.year + " " + car.make + " " + car.model);

        console.log(car.make + " came from this Array of choices: " + makes);
        document.write("<br>" + car.make + " came from this Array of choices: " + makes);
        console.log(car.model + " came from this Array of choices: " + models);
        document.write("<br>" + car.model + " came from this Array of choices: " + models);
        console.log(car.year + " came from this Array of choices: " + years);
        console.log(car.year + " came from this Array of choices: " + years);
        document.write("<br>"+ car.color + " came from this Array of choices: " + colors);
        console.log(car.convertible + " came from this Array of choices: " + convertible);
        document.write("<br>" + car.convertible + " came from this Array of choices: " + convertible);

      }*/

      var carToSell = makeCar();
    displayCar(carToSell);