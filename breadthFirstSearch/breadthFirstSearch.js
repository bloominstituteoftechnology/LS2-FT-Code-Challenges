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

const bfs = (tree, value) => {
  let bool = false;
  const queue = [];
  const search = (treeObj) => {
   Object.keys(treeObj).forEach((prop) => {
     queue.push(treeObj[prop]);
     if (treeObj[prop] === value) bool = true;
   });
  };
  search(tree);

  while (queue.length > 0) {
   if (typeof queue[0] === 'object') {
     search(queue[0]);
   }
   queue.shift();
  }
  return bool;
};
