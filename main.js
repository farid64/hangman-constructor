var Word = require("./wordConstructor.js");
var words = require("./words.js");
var Randomizer = require("./randomizer.js");
var inquirer = require("inquirer");


console.log(words);
var rndWord = new Randomizer(words);
var thisWord = new Word(rndWord.giveWord());
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

				

				var event = thisWord.letterCheck(response.letter);

				console.log(thisWord.print());

				if(event === false){
					guesses --;
					console.log("Wrong guess: \n you have " + guesses + " left.")
				}

				if(thisWord.isDone()){

					playAgain();

				}else if(guesses>0){

					inquirerFn();

				}else{

					playAgain();

				}
		});

	
	

}

inquirerFn();

function playAgain(){

	console.log("The Game is Over" + "\n");

	inquirer.
		prompt([
		{
			type: "confirm",
			message: "Do you want to play again?",
			name: "confirm",
			default: true
		}

		]).then( function(response){
			if(response.confirm){

				if(!rndWord.isMore()){
					rndWord = new Randomizer(words);
				}

				thisWord = new Word(rndWord.giveWord());
				guesses = 5;

				inquirerFn();
			}
		});
}




