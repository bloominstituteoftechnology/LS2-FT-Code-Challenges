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
  let max = nums.length - 1;
  let min = 0;
  while (max >= min) {
    let mid = Math.floor((max + min)/2);
    if (nums[mid] === target) {
      return target;
    }
    if (nums[mid] >= target) {
      max = mid - 1;
    }
    else {
      min = mid + 1;
    }
  }
  return null;
};
const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
console.log(index);
