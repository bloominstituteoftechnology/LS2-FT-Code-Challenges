/*  For today's coding challenge your job is to write functions
 *  so that each function call works.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  const greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
 */
// to test this file cd into the directory where its found it in the command line and run node callBackPractice.js
// or you can copy and paste your functions into the Chrome console or JSBin for testing.
// console.log will be your best friend here!

// Write a function called firstItem that passes the first item of the given array to the callback function

const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];
// could improve with first item inside array, only 1 hour, but make that way after. Array.prototype.firstItem = (cb) => { console.log(this); cb(this[0]) }; 
const firstItem = (arr, cb) => cb(arr[0]);
// write code here
//console.log(firstItem(foods,(arg) => arg))


// Write a function called getLength that passes the length of the array into the callback
// write code here
const getLength = (arr, cb) => cb(arr.length);
//console.log(getLength(foods,(arg) => arg));

// Write a function called last which passes the last item of the array into the callback
// write code here
const getLast = (arr, cb) => cb(arr[getLength(foods, (arg) => (arg)) - 1]);
//console.log(getLast(foods, (arg) => arg))
// Write a function called sumNums that adds two numbers and passes the result to the callback
function sumNums(x,y,cb = '') {
	return cb === '' ? x+y : cb(x+y);
}

// write code here
sumNums(5, 10, (sum) => {
  //console.log(`The sum is ${sum}.`);
});

// Write a function called multiplyNums that multiply two numbers and passes the result to the callback
// write code here
const multiplyNums = (n1, n2 , cb = '') => cb === '' ? n1*n2 : cb(n1+n2);


const check = (arr, index, item) => {

}
//console.log(multiplyNums(8,8))
// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
const contains = (arr, item, cb, index = 0) => {
	if ( index === arr.length )   return false;
	if (arr[index] === item) return true;
	index++;
	return cb(contains(arr, item, cb, index));
}
// write code here
//console.log(contains(foods, 'aaa', (arg) => arg));

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

const each = (arr, cb) => {
  for(let i = 0; i < arr.length; i++)
  {
    cb(arr[i],i);
  }
  return 0;
};

each(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});

const removeDuplicates = (arr, cb) => {
  const newArray = [];
  each(foods, (item) =>{
    each(foods, (checkitem) => {
      if(item === checkitem) console.log(item);
    })

    newArray.push(item);
  })
  return cb(newArray);
};

removeDuplicates(foods, (uniqueFoods) => {
console.log(uniqueFoods)
});

// Write a function called each that iterates over the provided array and passes the value and index into the callback.

