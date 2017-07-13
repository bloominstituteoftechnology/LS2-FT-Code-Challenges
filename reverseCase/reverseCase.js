/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 const caseChanger = (str) => {
     let transformed = "";
     for (let i = 0; i < str.length; i++) {
         if (str[i] === str[i].toUpperCase())
            transformed = transformed + str[i].toLowerCase();
         else if (str[i] === str[i].toLowerCase())
            transformed = transformed + str[i].toUpperCase();
     }

     return transformed;
 }

 console.log(caseChanger('naNa OWUsU NyaMekYe'));
 console.log(caseChanger('Hello World'));
