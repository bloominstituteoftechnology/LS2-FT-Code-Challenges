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

const arr = [1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1];

// ATTEMPT # 2 

const evenOccurence = (arr) => {
	let newArr	= arr.sort();
	let previousItem;
	//console.log(prevItem);
	newArr.forEach((item) => {
		//console.log(prevItem);
		if (item === previousItem && item % 2 === 0) {
			//console.log(prevItem);
			console.log(previousItem);
		}
	});
	};

console.log(evenOccurence(arr));


// ATTEMPT # 1 got stuck
// const evenOccurence = (arr) => {
//   // Your code here.
//   let newArr = [];
//   arr.forEach((item) => {
//   	//console.log(item);
//   	let count = 0;
//   	if (!newArr.includes(item) && ) {
//   	    newArr.push(item);
//   		//console.log(newArr);
//   	}
// 	});
// };

