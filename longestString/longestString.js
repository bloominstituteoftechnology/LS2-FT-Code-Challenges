/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */
 const longestString = (arr) => {
   let longest = '';
   for (let i = 0; i < arr.length; i++) {
     if (arr[i].length > longest.length) {
       longest = arr[i];
     }
   }
   return console.log(longest);
 };
longestString(['hi','you','love','','jim','antonio']);
