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
const firstItem = (foods, cb) => {
	cb(foods[1]);
}
firstItem(foods, (foods[1])) => {
	console.log(foods[1])
};
console.log(firstItem(foods));
// Write a function called getLength that passes the length of the array into the callback
// write code here
const getLength = (foods, cb) => {
	cb(foods.getLength);
}
// Write a function called last which passes the last item of the array into the callback
// write code here
const last = (foods, cb) => {
	cb(foods[foods.getLength-1]);
}
// Write a function called sumNums that adds two numbers and passes the result to the callback
// write code here
const sumNums = (num1, num2, cb) => {
	let result = num1 + num2
	cb(result);
}
sumNums(5, 10, (sum) => {
  console.log(`The sum is ${sum}.`);
});

// Write a function called multiplyNums that adds two numbers and passes the result to the callback
// write code here
const multiplyNums = (num1, num2, cb) => {
	let result = num1 * num2;
	cb(result);
}
multiplyNums(5, 10, (product) => {
	console.log(`The product is ${product}.`);
});
// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
const contains = (foods, cb) => {

}
// write code here


// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

const removeDuplicates = (arr, cb) => {

};

removeDuplicates(foods, (uniqueFoods) => {

});

// Write a function called each that iterates over the provided array and passes the value and index into the callback.

const each = (arr, cb) => {
	for(i = 0; i < arr.length; i++) {
		cb(arr[i], i);
	};
};

each(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});