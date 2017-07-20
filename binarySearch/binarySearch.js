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

<<<<<<< HEAD

// I wrote this with a while loop then realized that I needed
// a for loop to give me the index of the elemnts but ran out of time
// I think it goes through the sorting in the proper method, but just doesn't
// return the index, which I guess is fail because that is the whole point of
// the function. [O.O]

const binarySearch = (nums, target) => {
  let minGuess = nums[0];
  let maxGuess = nums[nums.length - 1];
  let myGuess = null;
  while (myGuess !== target) {
  	let myGuess = Math.floor((minGuess + maxGuess) / 2);
    if (myGuess === target) return target;
    if (myGuess < target) minGuess = myGuess + 1;
    if (myGuess > target) maxGuess = myGuess - 1;
};
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
=======
const binarySearch = (nums, target) => {

};
>>>>>>> ec5956fd2344c05aa2895c2b186d485bd626c7b7
