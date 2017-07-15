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
  return cb(arr[0]);
}
firstItem(foods,(first) => {
  return first;
});
// Write a function called getLength that passes the length of the array into the callback
// write code here
const getLength = (arr, cb) => {
  return cb(arr.length);
}
getLength(foods, (length) => {
  return length;
});

// Write a function called last which passes the last item of the array into the callback
// write code here
const last = (arr, cb) => {
  return cb(arr[arr.length - 1]);
}
last(foods, (lastItem) => {
  return lastItem;
});

// Write a function called sumNums that adds two numbers and passes the result to the callback
sumNums = (num1, num2, cb) => {
  const sumOfNums = num1 + num2;
  return cb(sumOfNums);
}
// write code here
sumNums(5, 10, (sum) => {
  console.log(`The sum is ${sum}.`);
});

// Write a function called multiplyNums that adds two numbers and passes the result to the callback
// write code here
multiplyNums = (num1, num2, cb) => {
  const prodOfNums = num1 * num2;
  return cb(prodOfNums);
}
multiplyNums(5, 10, (prod) => {
  console.log(`The product is ${prod}.`);
});
// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
contains = (arr, arrItem, cb) => {
  arr.forEach((arrItem) => {
    cb(true);
  });
  cb(false);
}
// write code here
contains([1,2,3,4], 4, (result) => {
  return result;
});

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

const removeDuplicates = (arr, cb) => {
  const mySet = new Set();
   const newArr = arr.filter(item => {
       var k = key(item);
       return mySet.has(k) ? false : mySet.add(k);
   });
   cb(newArr);
};

removeDuplicates(foods, (uniqueFoods) => {
  return foods;
});

// Write a function called each that iterates over the provided array and passes the value and index into the callback.

const each = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
};

each(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});
