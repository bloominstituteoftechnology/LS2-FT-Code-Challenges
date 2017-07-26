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
	let mid = Math.floor(nums.length / 2);

    if(nums[mid] === target) {
    	console.log('Match! you searched  '+nums[mid]+"and the number is "+target)
    	return nums[mid];
    } else if (nums[mid] < target && nums.length > 1) {
    	binarySearch(nums.splice(mid, Number.MAX_VALUE), target);
    } else if (nums[mid] > target && nums.length > 1) {
    	binarySearch(nums.splice(0, mid), target);
    }

};

const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2); 
console.log(index); // 1