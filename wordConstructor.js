var Letter = require("./Letter.js");

var Word = function(word){
	this.wordArr = [];
	this.length = word.length;
	this.remainingGuesses = 9;
	for(var i=0;i<this.length;i++){
		this.wordArr.push(new Letter(word.charAt(i), i));
	}
	this.print = function(){
		console.log(this.wordArr);
		console.log(this.wordArr[0]);
	}
	this.letterCheck = function(ltr){
		this.wordArr.forEach( function(item){

			var isMatch = item.isMatched(ltr);

			if(isMatch){
				item.isHidden = false;
			}else{
				console.log("Wrong guess");
			}
		})
	}
}

module.exports = Word;