/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
 const reverceCase = (str) => {
   const arr = str.split('');
   const newArr = [];
   arr.forEach((element) => {
     if (element === element.toUpperCase()) {
       newArr.push(element.toLowerCase());
     } else {
       newArr.push(element.toUpperCase());
     }
   }); return newArr.join('');
 };


 const reversedStr = reverceCase('Hello World!');
 console.log(reversedStr);
