/* 
 * Implement an algorithm to determine if a string has all unique characters.
 * Extra Credit - Answer this question - What if you cannot use additional data structures?
 */

const isUnique = (str) => {
	var arr = {};
	for (var i=0; i< str.length; i++){
	var ch = str[i];
	if(arr[ch]) return false; else arr[ch] = true;
	}
	return true;
}

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false

