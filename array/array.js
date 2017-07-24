/* Make a class called Array.
 * It should have the methods push, pop, get(index), and delete(index).
 * get and delete should accept an index and get or remove the item at that index.
 * Make sure to shift the array items after deleting an item.
 * In your implementation use a JS object to build the array.
 * Do NOT use an array as the underlying data structure, that's cheating :)
 * How do these operations compare to that of a linked list?
 * How does the time complexity of insertion and deletion compare to that of a linked list?
 */
<<<<<<< HEAD

class Array {
  constructor() {
  this.stark = [];
  }
  push(val) {
    this.stark.push(val);
  }
  pop() {
    this.stark.pop();
  }
  get index(idx) {
    return this.stark[idx];
  } 
  delete(idx) {
    return this.splice(idx, 1);
  }

};

// This is the only way I knew how to do it...
=======
>>>>>>> b87f849a2b05bddf433abc70beae6a0c87102968
