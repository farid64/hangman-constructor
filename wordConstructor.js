var Letter = require("./Letter.js");

var Word = function(word){
	this.word = word;
	this.wordArr = [];
	this.length = word.length;
	this.remainingGuesses = 9;
	for(var i=0;i<this.length;i++){
		this.wordArr.push(new Letter(word.charAt(i), i));
	}
	
	this.print = function(){

		var array = [];

			this.wordArr.forEach( function(item){

				if(item.isHidden){
					array.push("_ ");
				}else{
					array.push(item.letter);
				}

			});

		return array.join("");
	}

	this.letterCheck = function(ltr){

		var someMatches = false;

		this.wordArr.forEach( function(item){

			var isMatch = item.isMatched(ltr);

			if(isMatch){
				item.isHidden = false;
				someMatches = true;
			}
		})

		if(someMatches){

			var array = [];

			this.wordArr.forEach( function(item){
				if(item.isHidden){
					array.push("_");
				}else{
					array.push(item.letter);
				}
			});

			return array.join("");

		}else{
			return false;
		}
	};

	this.isDone = function(){

		var bool = true;

		this.wordArr.forEach( function(item){
			if(item.isHidden){
				// console.log(item.isHidden);
				bool = false;
			}
		})
		return bool;
	}
}

module.exports = Word;