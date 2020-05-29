// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

// Example 1:

// For example:
// Given binary tree [3,9,20,null,null,15,7],
// return [3, 14.5, 11]

const { BST, Queue } = require('../../utils/index');

// const averageOfLevels = root => {
//   if (!root) return [];
//   const result = [];
//   let queue = new Queue();
//   queue.enqueue(root);

//   let subQueue = new Queue();
//   let temp = [];
//   while (!queue.isEmpty()) {
//     const node = queue.dequeue();
//     temp.push(node.val);
//     if (node.left) subQueue.enqueue(node.left);
//     if (node.right) subQueue.enqueue(node.right);

//     if (queue.isEmpty() && !subQueue.isEmpty()) {
//       queue = subQueue;
//       subQueue = new Queue();
//       result.push(average(temp));
//       temp = [];
//     }
//   }
//   result.push(average(temp));
//   return result;
// };

const averageOfLevels = root => {
  if (!root) return [];

  const result = [];
  let queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const length = queue.length;
    let temp = [];

    for (let i = 0; i < length; i++) {
      const node = queue.dequeue();
      temp.push(node.val);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }

    const average = temp.reduce((sum, val) => sum + val, 0) / temp.length;
    result.push(average);
  }
  return result;
};

console.log(
  averageOfLevels(new BST([3, 9, 20, null, null, 15, 7])), // as above
)