/*
 * Write a function that accepts a tree data structure and a value to search for.
 * Search for the value using a breadth-first search algorithm.
 * Example:
 * const tree = {
 *	x: 1,
 *	y: 1,
 *	z: {
 *		x: 1,
 *		y: 1,
 *		z: 1,
 *		},
 *	a: 2,
 * };
 * breadthFirstSearch(tree, 2);// will return true before it recursively searches `z`
 */
const breadthFirstSearch = (tree, searchValue) => {
  let queue = Object.values(tree);
  const search = () => {
    if (queue.length === 0) return false;
    const item = queue.shift();
    if (typeof item === 'object' && item !== null && !Array.isArray(item)) queue.concat(item);
    if (item === searchValue) {
      return true;
    }
    return search();
  };
  return search();
};
