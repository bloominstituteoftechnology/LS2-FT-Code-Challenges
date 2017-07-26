/*
 * Implement an algorithm to determine if a string has all unique characters.
 * Extra Credit - Answer this question - What if you cannot use additional data structures?
 */

const isUnique = (str) => {
  let arrStr = str.split('');
  let trueOrFalse = true;
  for (let i = 0; i < arrStr.length; i++) {
    let x = arrStr[i];
    for (let j = i + 1; j < arrStr.length; j++) {
      if (arrStr[j] === x) trueOrFalse = false;
    }
  }
  return trueOrFalse;
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false
