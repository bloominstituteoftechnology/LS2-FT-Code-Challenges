/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */
const longestString = (strArr) => {
 	let longest = '';
 	for (let i = 0; i < strArr.length; i++) {
 		if (strArr[i].length > longest.length) longest = strArr[i];
 	}
 	return longest;
};