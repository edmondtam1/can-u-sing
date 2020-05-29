// https://leetcode.com/problems/validate-binary-search-tree/

// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

//     The left subtree of a node contains only nodes with keys less than the node's key.
//     The right subtree of a node contains only nodes with keys greater than the node's key.
//     Both the left and right subtrees must also be binary search trees.

// BST is valid if root.left is a valid BST and root.right is a valid BST
// root.left.left and root.left.right have to be smaller than root
// root.right.left and root.right.right have to be greater than root
// therefore implement a max and min to track the appropriate range for the tree

const BST = require('../../utils/BST');

const isValidBST = (root) => {
  return validBSThelper(root);
};

const validBSThelper = (root, min = -Infinity, max = Infinity) => {
  if (!root) return true;
  if (root.val >= max || root.val <= min) return false;

  const leftResult = validBSThelper(root.left, min, root.val);
  const rightResult = validBSThelper(root.right, root.val, max);

  return leftResult && rightResult;
}

console.log(
  isValidBST(new BST([2, 1, 3])), // true
  isValidBST(new BST([5, 1, 4, null, null, 3, 6])), // false
);