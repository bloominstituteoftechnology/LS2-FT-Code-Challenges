
/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

const largestPrimePalindrome = () => {
  for (let i = 1000; i > 1; i--) {
    const backwards = i.toString().split('').reverse().join('');
    const forwards = i.toString(); 
    if (forwards === backwards) {
      for (x = 2; x < i; x++) {
        if (i % x === 0) {
          return false;
        } else if (forwards === backwards) {
            for (x = 2; x < i; x++) {
              if (i % x !== 0) {
               console.log(`${i} is the winner!`);
            }
          }
        }
      }
    };
  }
};

largestPrimePalindrome();