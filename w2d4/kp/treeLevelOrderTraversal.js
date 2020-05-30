/*
----------UNDERSTANDING THE PROBLEM-----------------
Given a binary tree, return the level order traversal of its nodes' values.
(ie, from left to right, level by level).

INPUT: tree node
OUTPUT: array where each inner array represent a tree level

----------EXAMPLES--------------
let node3 = new TreeNode(15)
let node4 = new TreeNode(7)
let node2 = new TreeNode(20, node3, node4)
let node1 = new TreeNode(9)
let root = new TreeNode(3, node1, node2)

levelOrder(root) ==> [[3], [9, 20], [15, 7]];

--------DATA STRUCTURES----------
Use queue to keep track of nodes
*/

var levelOrder = function(root) {
  let result = [];
  let queue = [root];

  if (!root) return result;

  while (queue.length) {
    let lengthQueue = queue.length;
    let currLevel = [];

    for (let i = 0; i < lengthQueue; i += 1) {
      let node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      currLevel.push(node.val);
    }

    result.push(currLevel);
  }

  return result;
}
