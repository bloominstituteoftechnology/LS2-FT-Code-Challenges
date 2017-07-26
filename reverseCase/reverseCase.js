/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
 const reverseCase = (str) => {
   let tempChar = '';
   for (let i = 0; i < str.length; i++) {
     if (str[i] === str[i].toUpperCase()) {
       tempChar += str[i].toLowerCase();
     } else if (str[i] === str[i].toLowerCase()) {
       tempChar += str[i].toUpperCase();
     }
   }
   return tempChar;
 }
 reverseCase('Hello World');
