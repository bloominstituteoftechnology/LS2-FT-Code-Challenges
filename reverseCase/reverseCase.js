/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 //ATTEMPT #3
let str = "sTEvIe";

const reverseCase = (str) => {

str = str.split('');
for (let i = 0; i < str.length; i++) {
	if (str[i] === str[i].toUpperCase) {
		str.push(str[i].toLowerCase);
	} else if (str[i] === str[i].toLowerCase) {
		str.push(str[i].toUpperCase);
	} return str;
};

console.log(reverseCase(str));

 // ATTEMPT #2
 // const reverseCase = str.map((element) => {
 //      return element === element.toUpperCase() ?
 //        element.toLowerCase() : element.toUpperCase();
 // 	});



 // ATTEMPT #1 
 // let newString = '';
  
 // const reverseCase = (str) => {
 // 	let stringArray = str.split('');
 // 	str.forEach((element) => {
 //      if element === element.toUpperCase() 
 //      	return newString += element.toLowerCase();
 //      else if element === element.toLowerCase() 
 //      	return newString += element.toUpperCase();
 // 	});
 // 	return newString;
 // }