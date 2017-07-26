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

//create an object ot hold the numbers as keys and their counts as values
//iterate over the input array
//add item to object if key does not exist
//if key exists increment count value
//iterate over arr
//check if number has an even count value on the object
//return first even value
const evenNumbers = (numbers) => {
  const numCounts = {};
  numbers.forEach((num) => {
  	if (numCounts[num]) {
  		return numCounts[num] +=1;
  	} else {
  		numCounts[num] = 1;
    }
 });

for (let i = 0; i < numbers.length; i++) {
  	let count = numCounts[numbers[i]];
	if (count % 2 === 0) {
		return numbers[i];
   	}
  }
};
const numbers =[1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1];
console.log(evenNumbers(numbers));
