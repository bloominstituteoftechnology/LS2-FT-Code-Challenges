const longestString = (strings) => {
	let longest = '';
	strings.forEach((str) => {
		if (str.length > longest.length) longest = str;
	});
	return longest;
};

console.log(longestString(['abc', 'def', 'gasdfasf', 'asdf', 'e', 'agwoaiengpoing']));
