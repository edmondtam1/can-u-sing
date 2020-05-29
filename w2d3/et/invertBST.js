// https://leetcode.com/problems/invert-binary-tree/description/

// Invert a binary tree.

// swap root.left with root.right until root === null

const BST = require('../../utils/BST');

const invertTree = root => {
  if (!root) return root;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);
  return root;
};

console.log(
  invertTree(new BST([4, 2, 7, 1, 3, 6, 9])), // [4, 7, 2, 9, 6, 3, 1]
);