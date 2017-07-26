
/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

 const returnLargestPalindrome = () => {

    for (l = 0; l < 1000; l++) {
        if (checkPrime(number) === true && checkPalindrome(n) === true); return l;
    }
    //  Create function to check Prime
     const checkPrime = (number) => {
     for (let i = 2; i < number; i++) if (number % i === 0) return false;
     return true;

     if (number < 2) return false;
   };
    // Create function to check if number is Palindrome
   checkPalindrome = (n) => {
   for (let x = n; x >= 0; x--) {
     if (String(x) === String(x).split('').reverse('').join('')) {
       return true;
     }
   return false;
   }
 }

 for (l = 0; l < 1000; l++) {
        if (checkPrime(number) === true && checkPalindrome(n) === true); return l;
    }
 }