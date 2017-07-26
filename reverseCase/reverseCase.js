/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 const letterChanger = () => {
  let hello = 'Hello World';
  let newString = '';
  for (let i = 0; i < hello.length; i++) {
    let hi = hello.charAt([i]);
    if (hi === hi.toUpperCase()) {
      hi = hi.toLowerCase();
    } else {
    hi = hi.toUpperCase();
  }
    newString += hi;
  }
  return newString;
 }