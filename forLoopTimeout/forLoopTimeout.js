// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

// The easy es6 solution is simply changing var to let.

for (let i = 0; i <= 10; i++) {
	setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(i);
	}, 0);
}


// I was only able to get the es6 fix.  I'm thinking the reason it is having
// this problem is because the loop will run itself a bunch of times before it starts going through the function
// and then it will start printing itself. 