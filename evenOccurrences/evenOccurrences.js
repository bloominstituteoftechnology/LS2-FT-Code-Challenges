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
  const obj = {};
  for (var i = 0; i < arr.length; i++) {
  	obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }
  Object.keys(obj).forEach((prop) => {
  	if (obj[prop] % 2 === 0) {
  		console.log(prop);
  		return prop;
  	}
  });
};

evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
  // Your code here.
