/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

const longestStringInArray = myArray => {
    let lenth = 0;
    let longestString;

    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].length > lenth) {
            longestString = myArray[i];
        }
    }

    return longestString;
}


