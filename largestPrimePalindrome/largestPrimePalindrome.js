
/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

const isPrimeAndLessThanOneThousand = (num) => {
  if (num < 2 || num > 1000) { return 'Please pick a number between 2 and 1000.' };
  for (let i = 2; i < num; i++) {
    // console.log(`Here is ${num} and here is ${i}`);
    if (num % i === 0){
      return false;
    } return true;
  }
  // return num;
}

const isPalindrome = (num) => {
//   function checkPalindrom(str) {
//     return str == str.split('').reverse().join('');
// }
  const arr = num.toString().reverse();
  let arrCopy = arr;
  const reversed = arrCopy.reverse();
  console.log(arr);
  console.log(arr, reversed, arrCopy);
  return arr === reversed ? true : false;
}


const longestPrimePalindromeLessThanOneThousand = () => {
  const primePalindromes = [];
  for (let i = 2; i < 1000; i++) {
    if (isPalindrome(i) && isPrimeAndLessThanOneThousand(i)) {
      console.log(isPalindrome(i));
      primePalindromes.push(i);
    }
  }
  return primePalindromes;
};

console.log(isPrimeAndLessThanOneThousand(929));
console.log(isPalindrome(623));
// console.log(longestPrimePalindromeLessThanOneThousand()); // => true
