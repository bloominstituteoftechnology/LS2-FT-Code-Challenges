/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
const reverse = (str) => {
	let temp = '';
	for (let i = 0; i < str.length; i++) {
		str[i] === str[i].toUpperCase() ? temp += str[i].toLowerCase() : temp += str[i].toUpperCase();
	}
	return temp;
};