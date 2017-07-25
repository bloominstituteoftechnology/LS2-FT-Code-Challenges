/*
 *  * Find the first item that occurs an even number of times in an array.
 *   * Remember to handle multiple even-occurance items and return the first one.
 *    * Return null if there are no even-occurance items.
 *    */

/*
 *  * example usage:
 *   * const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
 *    * console.log(onlyEven); //  4
 *    */

 const evenOccurence = (arr) => {
   // Your code here.
   const occur = [];
   arr.forEach((value, index) => {
     occur.push([value, 0]);
   });
   for (let i = 0; i < occur.length; i++) for (let j = 0; j < arr.length; j++) if (occur[i][0] === arr[j]) occur[i][1] += 1;
   for (let i = 0; i < occur.length; i++) if (occur[i][1] % 2 === 0) return occur[i][0];
   return null;
 };

const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
console.log(onlyEven);
