/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const isLowerCase = char => char.toLowerCase() === char;
const swapCase = char => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();
let alternateCase = string => {
  return [...string].map(swapCase).join('');
};
console.log(alternateCase("hElLo"));

