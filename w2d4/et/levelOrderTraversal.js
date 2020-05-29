// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
// return [
//   [15,7],
//   [9,20],
//   [3]
// ]

const { BST, Queue } = require('../../utils/index');

const levelOrderBottom = root => {
  const result = [];
  let queue = new Queue();
  queue.enqueue(root);

  let subQueue = new Queue();
  let temp = [];
  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    temp.push(node.val);
    if (node.left) subQueue.enqueue(node.left);
    if (node.right) subQueue.enqueue(node.right);

    if (queue.isEmpty() && !subQueue.isEmpty()) {
      queue = subQueue;
      subQueue = new Queue();
      result.unshift(temp);
      temp = [];
    }

  }
  result.unshift(temp);
  return result;
};

console.log(
  levelOrderBottom(new BST([3, 9, 20, null, null, 15, 7])), // as above
)