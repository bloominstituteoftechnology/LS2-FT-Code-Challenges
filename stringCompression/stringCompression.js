// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).
// should loop over string, get the last index of the current iteration, add to newarray guided by index - index
// looping over the array
const compress = (str) =>  {
  //should create a new array to store values
  let newstring = '';
  let counter = 0;
  // should iterate over the array and loop overarray while the next element is equal this one.
  const iteration = (index) => {
    if (index > str.length) return newstring;
    if (str[index] === str[index -1] || index == 0) {
      index++;
      counter++;
      return iteration(index);
    }
    newstring += str[index -1] +''+ counter;
    counter = 1;
    index++;
    return iteration(index);
  };
  return iteration(0);
}
console.log(compress('aabcccccaaa'));