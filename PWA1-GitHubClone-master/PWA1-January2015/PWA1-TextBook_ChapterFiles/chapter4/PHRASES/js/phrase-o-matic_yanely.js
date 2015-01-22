/*Yanely Ramirez
  Jan 2015
  PWA-2
*/ 

    function makePhrases() {
      var words1 = {key1: "24/7", key2: "multi-tier", key3: "30,000 foot", key4: "B-to-B", key5: "win-win"};
      var words2 = {key1:"empowered", key2:"value-added", key3:"oriented", key4: "focused", key5: "aligned"};
      var words3 = {key1:"process", key2:"solution", key3:"tipping-point", key4:"strategy", key5:"vision"};

      var rand1 = Math.floor(Math.random() * Object.keys(words1).length+1);
      var rand2 = Math.floor(Math.random() * Object.keys(words2).length+1);
      var rand3 = Math.floor(Math.random() * Object.keys(words3).length+1);

      var randomKey1 = "key" + rand1;
      var randomKey2 = "key" + rand2;
      var randomKey3 = "key" + rand3;

      var phrase = "Your random phrase is: " + words1[randomKey1] + " " + words2[randomKey2] + " " + words3[randomKey3];
      //var phrase = words1.rand1 + " " + words2.rand2 + " " + words3.rand3;
      console.log(randomKey1 + " of Words1 is: " + words1[randomKey1]);
      document.write("<br>" + randomKey1 + " of Words1 is: " + words1[randomKey1]);
      console.log(randomKey2 + " of Words2 is: " + words2[randomKey2]);
      document.write("<br>" + randomKey2 + " of Words2 is: " + words2[randomKey2]);
      console.log(randomKey3 + " of Words3 is: " + words3[randomKey3]);
      document.write("<br>" + randomKey3 + " of Words3 is: " + words3[randomKey3]);
      alert(phrase);
    }
    makePhrases();