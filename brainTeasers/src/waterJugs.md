You have a five-quart jug, a three-quart jug, and an unlimited supply of water (but no measuring cups).
How would you come up with exactly four quarts of water?
Note that the jugs are oddly shaped, such that filling up exactly "half" of the jug would be impossible.

5 + 3 = 8

fill 5. pour into 3.
5 % 3 = remainder 2

empty 3 and pour remainder of 2 into 3. 3 has additional capacity of 1.

fill 5 and pour into 3.
5 - 1 = 4


let jug5 = 0;
let jug3 = 0;

jug5 + 5 = 5
jug5 - 2 = Jug3 // jug3 contains 3 & jug5 contains 2
jug3 = 0
jug3 = jug5 // jug3 contains the 2 that jug5 contained
jug5 = 5
jug5 - 1 = 4 // jug5 filled remaining 1 unit into jug3, resulting in 4 left over in jug 5.