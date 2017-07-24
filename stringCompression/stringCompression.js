// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).


const stringComression = (string) => {
    const arr = string.split('');
    arr.forEach((e, i) => {
        const matches = []
        if (e === (arr[i + 1])) {
            matches.push(e, arr[i + 1])
            console.log(matches);
        }
        return matches
    });
}

stringComression('aabbbbbcc');
