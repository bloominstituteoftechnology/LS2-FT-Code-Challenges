const isUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
};

// --------------------------

const isUnique = (str) => {
	const strSet = new Set();
	for (let i = 0; i < str.length; i++) {
		if (strSet.has(str[i])) return false;
		strSet.add(str[i]);
	}
	return true;
};

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false
