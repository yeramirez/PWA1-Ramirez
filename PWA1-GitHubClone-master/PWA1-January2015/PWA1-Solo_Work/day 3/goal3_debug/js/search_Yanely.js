// 14 total errors

//Name: Yanely Ramirez
//Date: 01/10/2015
(function(){

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),   //Added a semi-colon
		searchInput = document.forms[0].search,           //Added a semi-colon
		currentSearch = ''
		;                          //Moved semi-colon

	// Validates search query
	var validqte = function(query){                        //make validate a variable

		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){                    //Added an = sign to make it three
			query = query.substring(1, query.length);      //Array
		}
		while(query.charAt(query.length-1) === "") {        //checking for length
			query = query.substring(0, query.length - 1);    //function that takes a substring off?
		}

		// Check search length, must have 3 characters
		if(query.length < 3){                              //boolean
			alert("Your search query is too small, try again.");      //Added a quotation mark

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();                                                  //Using the .focus function
			return;                                                               //Returning the function
		}

		search(query);                                                            //search query
	};

	// Finds search matches
	var search = function(query){                                                 //Making search a function

		// split the user's search query string into an array
		var queryArray = query.split(" ");                                         //Make a variable queryArray

		// array to store matched results from database.js
		var results = [];                                                         //making a results array

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) {                                     //Make a for loop

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');                                  //Finding the index of
			var dbItem = db[i].toLowerCase().substring(0, dbTitleEnd);            //Fixing to lowercase

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {             //Making a for loop
				var qItem = queryArray[ii].toLowerCase();                         //Fixing to lowercase

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);                             //Find the index of
				if (compare !== -1) {                                            //Find if it passes or not.
					results.push(db[i]);                                         //Push the results
				};
			};
		};
		results.sort();                                                          //Call the results

		// Check that matches were found, and run output functions
		if(results.length === 0){                                                  //Make an if-statement
			noMatch();                                                           //Call if no-match
		}else{                                                                   //Make an else statement
			showMatches(results);                                                //Shows the results
		};
	};

	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){                                                    //Makes a function
		var html = ''+                                                           //Add quote to the html
				'<p>No Results found.</p>'+                                          //Paragraph of No results
				'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>' //Html source
			;
		resultsDIV.innerHTML = html;                                             //Find results of html
	};

	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){                                         //Function of results

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',                                             //Paragraph of Results
			title,                                                               //title var
			url                                                                  //url var
			;

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){                                //For loop

			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');                                 //Find index of
			title = results[i].substring(0, titleEnd);                          //Finding substring

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);  //Pull the video url after the title

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';             //Html formatting for a video link
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};

	// The on submit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onSubmit = function() {                                   //Formulate of on submit
		var query = searchInput.value;                                          //Place the search of search query
		validqte(query);                     									//validate the query

		// return false is needed for most events - this will be reviewed in upcoming course material
		// THE LINE DIRECTLY BELOW IS CORRECT
		return false;                                                           //return the value
	};

})();