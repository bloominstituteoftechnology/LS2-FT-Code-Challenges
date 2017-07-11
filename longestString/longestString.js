/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

 const findLongestArray = array => {
  let length = 0; 
  let longestArr;
  for ( let i = 0; i < array.length; i++ ) {
    if ( array[i].length > length ) {
      length = array[i].length;
      longestArr = array[i];
    }
  }
  return longestArr; 
 }

 findLongestArray(['John', 'Paul', 'George', 'Ringo'])