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
  let count;
  let even;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count % 2 === 0) {
      even = arr[i];
      return even;
    } count = 0;
  }
};


 const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
 console.log(onlyEven); //  4


 // const firstEven = (numbers) => {
 //     const numCounts = {};
 //     numbers.forEach((num) => {
 //         if (numCounts[num]) {
 //             return numCounts[num] += 1;
 //         } else {
 //             numCounts[num] = 1;
 //         }
 //     });
 //
 //     for (let i = 0; i < numbers.length; i++) {
 //         let count = numCounts[numbers[i]];
 //         if (count % 2 === 0) {
 //             return numbers[i];
 //         }
 //     }
 // };
