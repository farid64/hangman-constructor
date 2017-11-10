var Word = require("./wordConstructor.js");
var words = require("./words.js");
var inquirer = require("inquirer");


var thisWord = new Word("country");
var guesses = 5

function inquirerFn(){

		inquirer.
			prompt([
			{
				type: "input",
				name: "letter",
				message: "Please enter your guessed letter: "
			},




			]).then( function(response){

				thisWord.letterCheck(response.letter);

				if(thisWord.)
				guesses --;

				if(guesses>0){

				inquirerFn();

				}else{

					console.log("finished");

				}
		});

	
	

}

inquirerFn();






// var letter = process.argv[2];

// thisWord.letterCheck(letter);

