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
  // My initial plan:
  // 1) separate unique & non-unique elements into their own arrays
  // 2) compare elements of one to elements of the other
  // 3) if the elements match, assign a counter to each matching occurance
  // 4) collect counts into array
  // 5) return 1st instance of highest even number
  const uniques = arr.sort();
    // for (let i = 0; i < uniques.length; i++) {
    //   return uniques[i] === uniques[i + 1] ? false : true
    // }
  return uniques;
};

console.log(evenOccurence([1,2,3,4]));
console.log(evenOccurence([1,2,3,3,1,12,18,6,12]));
