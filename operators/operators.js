/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 *
 */

const multiply = (a, b) => {
    let result = 0;
    for (let i = 0; i < b; i++) {
        // console.log(result)
        result += a;
    }
    return result;
}

console.log(multiply(3,5));
console.log(multiply(5,30));
