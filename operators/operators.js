/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 *
 */

const multiply = (a, b) => {
    let result = 0;
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
}

console.log(multiply(3,5) === 15); // true
console.log(multiply(5,30) === 150); // true



const divide = (a, b) => {
    let count = 1;

    while (a > b) {
        a -= b;
        count++;
    }
    return count;
}



console.log(divide(10, 2) === 5); // true
console.log(divide(12, 6) === 2); // true


// const modulo = (a, b) => {
//     return 2;
// }
//
//
//
// console.log(modulo(10, 4) === 5); // true
