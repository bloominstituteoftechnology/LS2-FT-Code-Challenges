/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

const longestStringInArray = myArray => {
    let lenth = 0;
    let longestString;

    for (var i = 0; i < myArray.length; i++) {
        if (arr[i].length > lenth) {
            let lenth = myArray[i].length;
            longestString = myArray[i];
        }
    }

    return longestString;
}


