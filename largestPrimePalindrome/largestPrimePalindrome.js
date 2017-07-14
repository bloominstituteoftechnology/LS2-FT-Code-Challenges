
/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */
 const largestPrimePal = () => {
 	const isPrime = (num) => {
     if (num < 2) return false;
     for (let i = 2; i < num; i++) if (num % i === 0) return false;
     return true;
   };
 	let largest = 0;
 	for (let i = 0; i < 1000; i++) {
 		let test = i.toString();
 		if (test[0] === test[test.length-1] && isPrime(i)) largest = i;
 	}
 	return largest;
 };

 console.log(largestPrimePal());