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
// write code here
const firstItem = (arr, cb) => {
	cb(arr[0]);
};

// Write a function called getLength that passes the length of the array into the callback
// write code here
const getLength = (arr, cb) => {
  cb(arr.length);
};
// Write a function called last which passes the last item of the array into the callback
// write code here
const last = (arr, cb) => {
	cb(arr[arr.length - 1]);
};
// Write a function called sumNums that adds two numbers and passes the result to the callback
const sumNums = (x, y, cb) => {
	cb(x + y);
};
// write code here

sumNums(5, 10, (sum) => {
  console.log(`The sum is ${sum}.`);
});

// Write a function called multiplyNums that adds two numbers and passes the result to the callback
// write code here
const multiplyNums = (x, y, cb) => {
	cb(x * y);
};

multiplyNums(5, 10, (sum) => {
  console.log(`The multiply sum is ${sum}.`);
});
// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
const contains = (arr, item, cb) => {
  arr.forEach((key, index) => {
  	if(key === item) cb(true);
  });
  cb(false);
};
// write code here


// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

const removeDuplicates = (arr, cb) => {
	const checkArr = [];
  arr.forEach((value, index) => {
  	if (checkArr.indexOf(value) < 0) checkArr.push(value);
  });
  cb(checkArr);
};

removeDuplicates(foods, (uniqueFoods) => {
  console.log(foods);
});

// Write a function called each that iterates over the provided array and passes the value and index into the callback.

const each = (arr, cb) => {
	arr.forEach((value, index) => {
		cb(value, index);
	});
};

each(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});
