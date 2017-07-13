/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 //
let str = "sTEVIE";
// let newString = '';

const reverseCase = function() {

} 




//ATTEMPT #2
 const reverseCase = str.split('').map((element) => {
      return element === element.toUpperCase() ?
        element.toLowerCase() : element.toUpperCase();
 	});

 
console.log(reverseCase(str));

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