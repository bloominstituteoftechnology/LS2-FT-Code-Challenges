// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const strComp = (str) => {
  let strTemp = '';
  let temp = str[0];
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] !== temp) {
      strTemp += temp;
      strTemp += count;
      count = 1;
      temp = str[i];
    }
    else count++;
  }
  if (strTemp.length >= str.length) return str;
  return strTemp;
};
