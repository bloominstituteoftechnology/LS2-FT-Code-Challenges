const lgtPriPal = (num = 1000) => {
  for (let i = num - 1; i > 1; i--) {
  	rvsd = i.toString().split("").reverse().join("");
  	strg = i.toString();
  	if (strg === rvsd) {
  	  notPrime = false;
  	  for (j = 2; j < i; j++) {
  	  	if (i % j === 0) {
  	  	  notPrime = true;
  	  	  break;
  	  	}
  	  }
  	  if (notPrime = false) {
  	  	console.log(`${i} is the largest prime palindrome less than ${num}.`);
  	  }
  	}
  }
  


};
console.log(lgtPriPal());
/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */