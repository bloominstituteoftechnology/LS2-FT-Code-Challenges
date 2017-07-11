/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */
const giveDatLongWord = (array) => {
	var array = ["Pseudopseudohypoparathyroidism", "Floccinaucinihilipilification", "Antidisestablishmentarianism",
	"supercalifragilisticexpialidocious","Incomprehensibilities"];
	var longestString = array[0];
	for(var i = 0; i < array.length; i++){
		newLongest = array[i];
		if (newLongest.length > longestString.length){
			longestString = newLongest;
		}
	}
	longestString(array);
	return longestString;
}

