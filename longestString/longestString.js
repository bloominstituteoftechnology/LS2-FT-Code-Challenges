/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

 
 const acceptsArray = (arr) => {
 let longest = '';
 for (let i = 0; i < arr.length; i++) {
  if (longest.length < arr[i].length) {
    longest = arr[i];
    }
  } return longest;
};

let myArray = ['111','12','1', '123123','12112'];

console.log(acceptsArray(myArray));

