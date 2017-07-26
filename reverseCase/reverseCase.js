/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

// ATTEMPT #3
// let str = "LOWERCASE & uppercase";
// const reverseCase = (str) => {
// str = str.split('');
// let reverseArray = [];
// for (let i = 0; i < str.length; i++) {
// 	if (str[i] === str[i].toUpperCase()) {
// 		reverseArray.push(str[i].toLowerCase());
// 	} else if (str[i] === str[i].toLowerCase()) {
// 		reverseArray.push(str[i].toUpperCase());
// 	} 
//   } return reverseArray.join('');
// };
// console.log(reverseCase(str));

 // ATTEMPT #2
 // let str = "LOWERCASE & uppercase";
 // const reverseCase = (str) => {
 // 	const revStr = str.map((element) => {
 //      element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase();
 // 	});
 // 	return revStr;
 // };
 // console.log(reverseCase(str));

 // ATTEMPT #1
 let str = "LOWERCASE & uppercase"; 

 const reverseCase = (str) => {
 	let stringArray = str.split('');
 	str.forEach((element) => {
      if (element === element.toUpperCase()) 
      	newString += element.toLowerCase();
      else if (element === element.toLowerCase()) 
      	newString += element.toUpperCase();
 	});
 	return newString;
 };

 console.log(reverseCase(str));