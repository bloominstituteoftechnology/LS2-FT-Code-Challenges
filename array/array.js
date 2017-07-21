/* Make a class called Array. OK
 * It should have the methods push, pop, get(index), and delete(index). OK OK OK OK
 * get and delete should accept an index and get or remove the item at that index. OK
 * Make sure to shift the array items after deleting an item. OK 
 * In your implementation use a JS object to build the array. OK
 * Do NOT use an array as the underlying data structure, that's cheating :) OK
 * How do these operations compare to that of a linked list? 
 * How does the time complexity of insertion and deletion compare to that of a linked list?
 */

// Here we are going directly over a single level object. I Use index to easy reference inside of the object, simulating a real array. the linked list has a head and its tails.
// Basically linked list run throug element by element, checking the next level, while array runs through a index and calls the index directly. 
// Well, to compare the time complexity we can just check the loop structures a linked list cares with itself, while array just go to EXACTLY point you say to.
// for insertion and deletion, array delete exactly the point you want to LINKED list redirect the nodes. Same situation to insertion, you add to exactly point you want to
// while linked list needs you to go through list and add.

// should have class Array and create an object based on it's constructor
class Array {
  constructor() {
   this.data = {};
  }
  // should push to array setting one index to that value to fast iterate later.
  push(value, index = 0) {
    // if there is already a value inside of index 0 we should put it to the last value.
    if (this.data[index]) index = this.length;
    this.data[index] = value;
    return this.data[index] === value;
  }
  // should retrieve the length of the array with a getter.
  get length() {
    return Object.keys(this.data).length;
  }
  // should pop ( remove the last element ) the array
  pop() {
    delete this.data[this.length -1];
  }
  // should return the value in the index or undefined  if not find.
  get (index) {
    return this.data[index];
  }
  // should delete and shift the element;
  delete(index) {
    const delelement = this.data[index];
    delete this.data[index];
    for(let i = index+1; i < this.length ; i++)
    {
       this.data[i -1] = this.data[i]
    }
    return delelement;
  }
}

const arr = new Array();
arr.push('abd');
arr.push('abde');
arr.push('abdef');
arr.push('abdefg');
arr.push('abdefgh');
arr.push('abdefghi');
arr.push('abdefghij');
arr.push('abde');
// popping
arr.pop();
// getting with .get
console.log('SHOULD BE EQUALS ABDEFGH', arr.get(arr.length -1));
//should be adefgh

//should be deleted on position 1 and reordered, receive return of 'abde' and array should not have 'abde'
const deleted = arr.delete(1);
// expect delete = abde
console.log(deleted);
// expect lenght of six and don't have elements abde
console.log(arr.data);