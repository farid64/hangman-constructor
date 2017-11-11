

var Letter = function(lt, index){
	this.letter = lt;
	this.index = index;
	this.isHidden = true;
	this.isMatched = function(ltr){
		if(ltr === this.letter){
			return true;
		}else{
			return false;
		}
	}

}

module.exports = Letter;