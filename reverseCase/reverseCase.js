const reverseCase = (str) => {
  rtrStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) rtrStr += str[i].toLowerCase();
    else if (str[i] === str[i].toLowerCase()) rtrStr += str[i].toUpperCase();
    else rtrStr.concat(str[i]);
}
return rtrStr;
};

console.log(reverseCase('Hello World'));
/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */