
/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

const primePalindrome = (max) => {
  let primed;
  for (let i = max; i >= 0; i--) {
    primed = true;
    for (let j = 2; j < Math.sqrt(i); j++) {
      if (i % j === 0) {
        primed = false;
        break;
      }
    }
    if (primed) {
      if (i.toString() === i.toString().split('').reverse().join('')) return i;
    }
  }
};

console.log(primePalindrome(1000));
Add Comment Collapse
 

 checkPalindrome('929');


