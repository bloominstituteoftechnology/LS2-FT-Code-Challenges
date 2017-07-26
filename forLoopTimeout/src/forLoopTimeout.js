
// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

for (var i = 0; i <= 10; i++) {
	let current = i;
	setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(current);
	}, 0);
}


/* I honestly don't know exactly why it prints (11) ten times. I had a hunch
   it had something to do with the scope of i, that while inside the setTimeout 
   function, was not capturing each iteration caused by the for loop. i still
   don't understand why it would print (11) though..*/
