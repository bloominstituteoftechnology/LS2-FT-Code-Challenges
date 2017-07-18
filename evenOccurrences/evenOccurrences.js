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
  const sortedArray = arr.split('').arr.sort().arr.join('');
    for (let i = 0; i < sortedArray.length; i++) {
      if (arr[i] === sortedArray[i]) {
        return arr[i];
      }
      console.log(arr[i]);
    }
};
