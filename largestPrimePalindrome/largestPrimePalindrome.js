
/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

 const checkPalindrome = (str) => {
    var i = str.length - 1;
    var k = 0;

    while (i > k) {
      var h = str.char(k++);
      var j = str.charAt(i--);
      if (str.charAt(k++) !== str.charAt(i--)) return false;
    }
    return true;
  
    	

    	for (let i = 2; i < num; i++) {
    		if (num % i === 0) {
      			return false;
    		}
  		}
  		return num > 1;
	

};
 

 checkPalindrome('929');


