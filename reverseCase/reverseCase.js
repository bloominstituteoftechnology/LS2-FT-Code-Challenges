/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const reverseCase = (str) => {
  const arr = str.split('');
  return arr.map((letter) => {
    let resultStr = '';
    if (letter === letter.toUpperCase()) {
      return resultStr += letter.toLowerCase();
    }
    // console.log(letter.toUpperCase());
    return resultStr += letter.toUpperCase();
  }).join('');
  // return resultStr;
  // return arr.join('');
};


console.log(reverseCase('Hello World')); // 'hELLO wORLD'
console.log(reverseCase('How Are You Today')); // 'hOW aRE yOU tODAY'
