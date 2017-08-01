/**
 * Insertion sort is a basic sorting algorithm. Insertion sort
 * iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 * https://en.wikipedia.org/wiki/Insertion_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms#insertion-sort
 **/

// Example usage:
// insertionSort([2, 1, 3, 7, 4, 2, 9, 3, 8]); // yields [1, 2, 2, 3, 3, 4, 7, 8, 9]

const insertionSort = (array, insert) => {
  const checkRight = () => {
    if (array[tempi] > array[tempi+1]) {
      cache = array[tempi+1];
      array[tempi+1] = array[tempi];
      array[tempi] = cache;
      tempi++;
      checkRight();
    }
  };
  const checkLeft  = () => {
    if (array[i] < array[i-1]) {
      cache = array[i];
      array[i] = array[i-1];
      array[i-1] = cache;
      tempi = i;
      checkRight();
    }
  };
  let cache;
  let i;
  let tempi;

  if (insert) {
    if (!Array.isArray(insert)) array.push(insert);
    else insert.forEach((item) => {array.push(item)});
  }
  for(i = array.length -1; i >= 0; i--){
    checkLeft();
  };
  return array;
};


let array = insertionSort([2, 1, 3,5,4,8,9,3,7, 4, 2, 9, 3, 8]);
insertionSort(array, [1,2,3])
insertionSort(array, 10);
insertionSort(array,150)
console.log(array);
