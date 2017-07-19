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
	let max_index = nums.length -1; 
	let min_index = 0;
  let guess = Math.round((max_index+min_index)/2);

  const test = () => {
    //check for equal control
    if (min_index > nums.length) return false;
    if (nums[guess] === target)  return guess;
    if (nums[max_index] === target) return max_index; 
    if (nums[min_index] === target) return min_index;
    max_index--;
    min_index++
    //guess controller
    if (nums[guess] > target) guess = guess -1;
    else guess = guess +1;
    return test(nums);
  };
  return test();
};


const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
  console.log(index); // 1