
/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

// should check if is palindrome


const isPalindrome = num => num  === Number(num.toString().split("").reverse().join("")) *1;

const isPrime = (num, memo = num) => {
  num = num -1;
  result = memo % num === 0 ? false : isPrime(num,memo);
  if ( num == 1 ) {
    result = true;
  }
  return result; 
} 

const get = (num) => {
  biggest = false;
  for(let i = num; i>1; i--){
    if( isPalindrome(i) == true ) if( isPrime(i) === true ) return biggest = i;
    }
  }
  return biggest;
}

console.log(get(1000));

