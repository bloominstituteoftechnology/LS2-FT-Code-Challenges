/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 *
 */

const multiply = (x, y) => {
  let result;
  for (let i = 0; i < y; i++) result += x;
  return result;
};

const divide = (x, y) => {
  let result = 0;
  while (x >= y) {
    x -= y;
    result++;
  }
  return result;
};

const modulo = (x, y) => {
	while (x >= y) x -= y;
  return x;
};
