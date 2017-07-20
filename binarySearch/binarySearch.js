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
  let biggguess = Math.round((max_index+min_index)/2);
  let lessguess = Math.round((max_index+min_index)/2);
  let randguess = Math.round(Math.random((max_index+min_index)/2));
  let randguess2 = Math.round(max_index);
  let no_search = [];
  let x = 0;

  console.log(x)
  console.log(randguess)
  const test = () => {
    // limiterc
    if (min_index > nums.length) return false;
    // randguess check
    if (randguess === target) return randguess;
    if (ranguess2 === target) return randguess2;
    // is the lessguess or the less the right target?
    if (nums[biggguess] === target)  return biggguess;
    if (nums[lessguess] === target)  return lessguess;
    // should go up-front if its already checked by the guesser
    if (no_search.includes(min_index)) min_index++;
    if (no_search.includes(max_index)) max_index--;
    // should check first and last current unchecked position
    if (nums[max_index] === target) return max_index; 
    if (nums[min_index] === target) return min_index;
    // adding values to first and last item
    max_index--;
    min_index++
    x++;
    // no_search controller
    no_search.push(randguess);
    no_search.push(biggguess);
    no_search.push(lessguess);
    // hand_gues reasign rand value
    randguess = Math.random((max_index+min_index)/2);
    biggguess--;
    lessguess++;
    return test(nums);
  };
  return test();
};

let arr = [];
  for(i=1; i<5000; i++){
    arr.push(i);
  }

const index = binarySearch(arr,3398);
  console.log(index); // 1