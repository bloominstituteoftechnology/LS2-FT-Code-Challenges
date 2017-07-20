/*
 * Given a sorted array, find the index of the specified element
 * using binary search.
 * https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
 * https://en.wikipedia.org/wiki/Binary_search_algorithm
 * */

/**
 *  * const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
 *	* console.log(index); // 1
**/

const binarySearch = (nums, target) => {

	let highIndex = nums.indexOf(nums[nums.length - 1]);
	let lowIndex = 0;


	while (lowIndex <= highIndex) {
		let middleIndex = Math.floor((highIndex + lowIndex) / 2);
		if (nums[middleIndex] < target) {
			lowIndex = middleIndex
		} else if (nums[middleIndex] > target) {
			highIndex = middleIndex;
		} else if (nums[middleIndex] === target) {
			return middleIndex;
		}

	}
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
