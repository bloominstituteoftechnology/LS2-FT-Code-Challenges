// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

// ES6 - just change var to let
for (let i = 1; i <= 10; i++) {
	// (function() {
		setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(i);
		}, 0);
	};



//ES5 - create an IIFE (Immediately Invoked Function Expression, which forces the loop to pass the value to i in each setTimeout call)
// for(var i = 1; i <= 10; i++) {
//   // console.log('Im in counter ' + i);
//   (function(index) {
//     setTimeout(function() {
//         console.log(index);
//     },0);
//   })(i);
// };
