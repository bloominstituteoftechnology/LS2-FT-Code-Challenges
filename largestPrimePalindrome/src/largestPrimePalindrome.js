
/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */ 
 // NOTES: See Sieve of Eratosthenes;
 // I have an array of 1000.
 // create array that will hold my palindromes;
 // create array that will hold my prime numbers;
 // iterate through the array of numbers.
 // if element === element.reverse(), place it in palindromes array.
 // Now, iterate through palindromes array
 // (let i = 2; i < array[i]; i++)
 // a number is prime if it is only divisible by itself and 1.
 // if (element % i !== 0), number is prime.
 // add element to prime numbers array.
 // sort the prime numbers array.
 
const largestPrimePalindrome = () => {
 
 const palindromesArray = [];
 const primeArray = [];

 for (let i = 0; i < 1000; i++) {
 	let str = i.toString();

 	if (str === str.reverse()) palindromesArray.push(i);
 }
 for (let i = 0; i < palindromesArray.length; i++) {
 	for (let i = 2; i < palindromesArray[i]; i++) {
 	if (palindromesArray[i] % i !== 0) primeArray.push(palindromesArray[i]);
 	primeArray.sort();
   }
  console.log(primeArray);
 }
};
