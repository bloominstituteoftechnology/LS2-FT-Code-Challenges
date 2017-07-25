/* 
 * Implement an algorithm to determine if a string has all unique characters.
 * Extra Credit - Answer this question - What if you cannot use additional data structures?
 */

const isUnique = (str) => {
	while (str) {
		let temp = str[0];
		str = str.slice(1, str.length);
		if (str.indexOf(temp) >= 0) return false;
	}
	return true;
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false