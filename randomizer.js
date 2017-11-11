

var Randomizer = function(wordsArray){

	this.wordsArr = [];
	for(var i=0;i<wordsArray.length;i++){
		this.wordsArr.push(wordsArray[i]);
	}
	
	this.giveWord = function(){

		// if(this.wordsArr.length === 0){
		// 	for(var i=0;i<wordsArray.length;i++){
		// 		this.wordsArr.push(wordsArray[i]);
		// 	}
		// }
		var randomIndex = Math.floor(Math.random()*this.wordsArr.length);
		var randomWord = this.wordsArr[randomIndex];
		this.wordsArr.splice(randomIndex, 1);
		return randomWord;
	}

	this.isMore = function(){
		 if(this.wordsArr.length === 0){
		 	return false;
		 }else{
		 	return true;
		 }
		
	}

}

module.exports = Randomizer;