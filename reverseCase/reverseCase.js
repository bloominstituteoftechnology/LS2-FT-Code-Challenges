/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
<<<<<<< HEAD
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
=======
>>>>>>> d6761f07099014006ea2c6d47c86e81233e68b3a
