var words = require("./words.js");

var Randomizer = function(wordsArray){
	this.random = Math.floor(Math.random()*wordsArray.length);

}