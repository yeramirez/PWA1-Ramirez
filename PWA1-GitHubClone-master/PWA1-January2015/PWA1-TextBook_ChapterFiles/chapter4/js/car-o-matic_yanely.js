/*Yanely Ramirez
  Jan 2015
  PWA-2
*/ 

    function makePhrases() {
      var words1 = {key1: "24/7", key2: "multi-tier", key3: "30,000 foot", key4: "B-to-B", key5: "win-win"};
      var words2 = {key1:"empowered", key2:"value-added", key3:"oriented", key4: "focused", key5: "aligned"};
      var words3 = {key1:"process", key2:"solution", key3:"tipping-point", key4:"strategy", key5:"vision"};

      var rand1 = Math.floor(Math.random() * words1.length);
      var rand2 = Math.floor(Math.random() * words2.length);
      var rand3 = Math.floor(Math.random() * words3.length);

      var phrase = words1.rand1 + " " + words2.rand2 + " " + words3.rand3;
      alert(phrase);
    }
    makePhrases();