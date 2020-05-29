// https://leetcode.com/problems/sum-root-to-leaf-numbers/description/

// Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

// An example is the root-to-leaf path 1->2->3 which represents the number 123.

// Find the total sum of all root-to-leaf numbers.

// Note: A leaf is a node with no children.

const Queue = require('../../utils/Queue');
const BST = require('../../utils/BST');

// const sumNumbers = node => {
//   if (!node) return 0;
//   return helper(node, 0, 0);
// };

// const helper = (root, num, sum) => {
//   num = num * 10 + root.val;

//   if (!root.left && !root.right) return sum += num;

//   if (!root.left) helper(root.left, num, sum);
//   if (!root.right) helper(root.right, num, sum);

//   return sum;
// };

const sumNumbers = root => {
  if (!root) return 0;
  let sum = 0;
  let stack = [{ node: root, val: 0 }];

  while (stack.length > 0) {
    let { node, val } = stack.pop();
    val = val * 10 + node.val;

    if (node.left) {
      stack.push({ node: node.left, val: val });
      if (node.right) stack.push({ node: node.right, val: val });
      continue;
    }

    if (node.right) {
      stack.push({ node: node.right, val: val });
    }

    if (!node.left && !node.right) sum += val;
  }
  return sum;
};

console.log(sumNumbers(new BST([4, 9, 0, 5, 1])))