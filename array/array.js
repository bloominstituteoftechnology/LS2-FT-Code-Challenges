/* Make a class called Array.
 * It should have the methods push, pop, get(index), and delete(index).
 * get and delete should accept an index and get or remove the item at that index.
 * Make sure to shift the array items after deleting an item.
 * In your implementation use a JS object to build the array.
 * Do NOT use an array as the underlying data structure, that's cheating :)
 * How do these operations compare to that of a linked list?
 * How does the time complexity of insertion and deletion compare to that of a linked list?
 */
class Array {
  constructor() {
    this.array = {};
  }
  push(value) {
    let i = 0;
    Object.keys(this.array).forEach((prop) => {
      i++;
    });
    this.array[i] = value;
  }
  pop() {
    let i = -1;
    if (Object.keys(this.array).length < 1) return;
    Object.keys(this.array).forEach((prop) => {
      i++;
    });
    delete this.array[i];
  }
  get(index) {
    return this.array[index];
  }
  delete(index) {
    delete this.array[index];
    Object.keys(this.array).forEach((prop) => {
      if (parseInt(prop) >= index) {
        const temp = parseInt(prop - 1);
        this.array[temp] = this.array[prop];
        delete this.array[prop];
      }
    });
  }
}
