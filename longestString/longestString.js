
const lgstStr = (usrStr) => {
  let svdStr = '';
  for (let i = 0; i < usrStr.length; i++) {
  	if (usrStr[i].length > svdStr.length) {
  		svdStr = usrStr[i];
  	}
  }
  console.log(`The longest string is ${svdStr}`);
  return svdStr;
}
lgstStr(['longerthanfunction', 'this', 'will', 'test', 'if', 'the', 'function', 'works!!',])
/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

 
