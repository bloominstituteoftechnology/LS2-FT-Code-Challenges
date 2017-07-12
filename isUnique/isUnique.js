// /* 
//  * Implement an algorithm to determine if a string has all unique characters.
//  * Extra Credit - Answer this question - What if you cannot use additional data structures?
//  */

const isUnique = (str) => {
	const letterObj = {};
	for (let i = 0; i < str.length; i++) {
		let test = str[i];
		if (letterObj[test]) {
			return false;
		} else {
			letterObj[test] = true;
		}
	}
	return true;
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false
console.log(isUnique('bb'));
console.log(isUnique('a'));