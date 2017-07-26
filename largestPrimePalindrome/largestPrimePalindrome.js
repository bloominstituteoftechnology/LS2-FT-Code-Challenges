
/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */
 const palindromePrimeCheck = (num) => {
   let revNum = '';
   const numCopy = num.toString();
   for (let i = numCopy.length; i >= 0; i--) {
     revNum += numCopy.charAt(i);
   }
   if(revNum === numCopy) {
     if (num > 1) {
       for (let j = 2; j < num; j++) {
         if (num % j === 0) return false;
       }
       return true;
     }
   }
 };
 console.log(palindromePrimeCheck('121'));
 console.log(palindromePrimeCheck(313));
