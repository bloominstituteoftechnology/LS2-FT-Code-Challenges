/* 
 * Implement an algorithm to determine if a string has all unique characters.
 * Extra Credit - Answer this question - What if you cannot use additional data structures?
 */
// create new variable 'splitString' that will hold string.split()
// split the string
// iterate through stringSplit array
// if strSplit[i] === indivi

const isUnique = (str) => {
  let count = 0;
  const splitString = str.split('');
  for (let i = 0; i < splitString.length; i++) {
    for (let j = 0; j < splitString.length; j++) {
  	  if(splitString[i] === splitString[j]) {
        count++;
      }
  	}
  	if (count > 1) {
      return false;
    } return true;
  }
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false

