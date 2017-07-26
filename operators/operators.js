/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 *
 */
const multiply = (x, y) => {
  let product = 0;
  for (let i = y; i > 0; i--) {
    product += x;
  }
  return product;
};

console.log(multiply(3,4));
console.log(multiply(10,10));
console.log(multiply(5,6));

const divide = (w, z) => {
  quotient = 0;
  for (let i = w; i >= z; i -= z) {
    quotient++;
  }
  return quotient;
};

console.log(divide(21,10));
console.log(divide(77,11));
console.log(divide(56,8));



const modulo = (v, u) => {
  for (let i = v; i > 0; i -= u) {
    if (i < u) return i;
    if (i === u) return 0;
  }
};

console.log(modulo(99,9));
console.log(modulo(42,4));
console.log(modulo(100,8));
