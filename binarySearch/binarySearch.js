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
// i've made two push to repo lack of knowledge. I've creat a temp handler to tag where the array is not supposed go to and put a random extra  guesser trying to find by random
// can you guyes iterate over it with me and shows me? :)
const binarySearch = (nums, target) => {
	let max_index = nums.length -1; 
	let min_index = 0;
  let guess = Math.round((max_index+min_index)/2);

  const test = () => {
    // limiterc
    if (min_index > max_index) return false;
    // randguess check
    if (nums[guess] === target) return guess;
    // should check first and last current unchecked position
    if (nums[max_index] === target) return max_index; 
    if (nums[min_index] === target) return min_index;
    // adding values to first and last item
    max_index--;
    min_index++
    return test();
  };
  return test();
};

let arr = [];
  for(i=1; i<5000; i++){
    arr.push(i);
  }

const index = binarySearch(arr,3398);
  console.log(index); // 1