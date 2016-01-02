'use strict';

module.exports = function (encodedStr) {
	encodedStr = encodedStr.toUpperCase();
	var codeArr = encodedStr.split("");  // String to Array
  	var len = codeArr.length;
  	var decodedArr = []; // Your Result goes here
	// Only change code below this line
	for(var i = 0; i < len; i++) {
    	var val = encodedStr.charCodeAt(i);
    
    	if(val >= 65 && val <= 90) {
      		var rot = val + 13;
      
	      if(rot > 90) 
	        decodedArr[i] = String.fromCharCode(64 + (rot - 90));
	      else
	        decodedArr[i] = String.fromCharCode(rot);
	     } 
	    else{
	       decodedArr[i] = String.fromCharCode(val);
	    }
 	}

  // Only change code above this line
  return decodedArr.join(""); // Array to String
};

