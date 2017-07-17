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
//should iterate over array and check if it already exists with set
const evenOccurence = (arr) => {
	const set = new Set();
  // go around set and remove current position of the array 
  const tail = (arr, index) => {
    let newarray = [];
    const getelement = (arr, index, pos2 = arr.length) => {
      if (index === pos2) return newarray 
      newarray.push(arr[index])
      index++;
      return getelement(arr, index);
    } 
    return getelement(arr, index);
  }
	const iteration = (arr, index = 0) => {
    if (index === arr.length ) return null;
    if (new Set(tail(arr,index+1)).has(arr[index])) return arr[index];
    index++;
    return iteration(arr, index);
	}
  return iteration(arr);
};
const onlyEven = evenOccurence([1,7,1, 2,7,3, 4, 5, 6, 8, 9]);