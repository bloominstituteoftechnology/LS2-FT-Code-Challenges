/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 const caseChanger = (str) => {
     let transformer = "";
     for (let i = 0; i < str.length; i++) {
         if (str[i] === str[i].toUpperCase())
            transformer = transformer + str[i].toLowerCase();
         else if (str[i] === str[i].toLowerCase())
            transformer = transformer + str[i].toUpperCase();
     }

     return transformer;
 }

 console.log(caseChanger('naNa OWUsU NyaMekYe'));
 console.log(caseChanger('Hello World'));
