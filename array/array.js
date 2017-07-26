/* Make a class called Array.
 * It should have the methods push, pop, get(index), and delete(index).
 * get and delete should accept an index and get or remove the item at that index.
 * Make sure to shift the array items after deleting an item.
 * In your implementation use a JS object to build the array.
 * Do NOT use an array as the underlying data structure, that's cheating :)
 * How do these operations compare to that of a linked list?
 * How does the time complexity of insertion and deletion compare to that of a linked list?
 */
Class Array {
  constructor(index) {
    this.arr = {};
    this.index = 0;
  }
  push(value) {
    this.arr[this.index] = value;
    this.index++;
  }
  pop() {
    delete this.arr[Object.keys(this.arr).length - 1];
  }
  get(index) {
    return this.arr[index];
  }
  delete(index) {
    const deletedItem = this.arr[index]; // save deleted item
    delete this.arr[index]; // delete the item from the array / object
    for (let i = index + 1; i < Object.keys(this.arr).length; i++) {
      this.arr[i - 1] = this.arr[i]; // repositions all the elements in the array.
      }
    }
    return deletedItem;
  }
}
