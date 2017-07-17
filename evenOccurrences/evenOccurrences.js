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
   let numCheck = arr[0];
   for (let i = 0; i < arr.length; i++) {
     let count = 0;
     numCheck = arr[i];
     for (let j = 0; j < arr.length; j++) {
       if (numCheck === arr[j]) {
         count++;
       }
     }
     if (count != 0 && count % 2 === 0){
           return numCheck;
     }
   }
   return null;
 };
 const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
 console.log(onlyEven);
