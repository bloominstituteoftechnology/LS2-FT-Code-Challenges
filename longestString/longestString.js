/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

const findLongest = (arr) => {
  return arr
    .sort((a, b) => {
    return a.length - b.length })
    .reverse()[0];
}

console.log(findLongest(['short', 'longer', 'looooongest']));
console.log(findLongest(['one', 'fifty seven', 'three']));
