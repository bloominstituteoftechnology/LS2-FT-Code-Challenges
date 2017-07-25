/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use the + and - operators to implement these functions.
 *
 */

  const modulo = (number,divisor) =>  { 
    const times = divide(number,divisor);
    let result = 0;
    if (times === 0) return 0;
    for(let i = 0; i<times; i++){
      result += divisor;
    }
    return number - result;
  };

  const divide = (number,divisor) => {
    let guess = 1;
    let total = 0;
    let counter = 0;
    let realnumber = number;
    const tryout = (module = false) => {
      if (total === number) return guess;
      // module check
      if (guess > divisor) {
        number--;
        guess = 1;
        total = 0;
        return tryout(true);
      } 
      counter = 0;
      guess++;
      total = 0;
      while(divisor > counter) {
        counter++;
        total = total + guess;
      };
      return tryout();
    };
    return tryout();
  };
  const multiply = (number, multiplyier) => {
    let counter = 0;
    let result = 0;
    let times = multiplyier < 0 ? 0 - multiplyier : multiplyier;
    while(times > counter) {
      result = multiplyier < 0 ? result - number : result + number;
      counter++;
    };
    return result;
  };
