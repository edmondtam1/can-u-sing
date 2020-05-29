// https://leetcode.com/problems/insert-into-a-binary-search-tree/

// Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

// Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

// For example, 

// input: insertIntoBST(BST([4, 2, 7, 1, 3, null, null]), 5)
// output: [4, 2, 7, 1, 3, 5, null]

// const TreeNode = require('./TreeNode');
const { BST, TreeNode } = require('../../utils/BST');

const insertIntoBST = (root, val) => {
  if (!root) return new TreeNode(val);
  insertHelper(root, val);
  return root;
};

const insertHelper = (root, val) => {
  if (!root) root = new TreeNode(val);
  if (root.val > val) root.left = insertHelper(root.left, val);
  if (root.val < val) root.right = insertHelper(root.right, val);
  return root;
}

console.log(
  insertIntoBST(new BST([4, 2, 7, 1, 3, null, null]), 5),
);