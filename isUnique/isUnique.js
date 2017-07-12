/*
 * Implement an algorithm to determine if a string has all unique characters.
 * Extra Credit - Answer this question - What if you cannot use additional data structures?
 */

const isUnique = (str) => {
  const strArr = str.split('').sort();
  for (let i = 0; i < strArr.length; i++) {
  return strArr[i] === strArr[i + 1] ? false : true
  }
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false
