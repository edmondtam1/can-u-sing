/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


*/
var isValidBST = function(root) {
  return isValidHelper(root, -Infinity, Infinity);
}

function isValidHelper(root, min, max) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;

  return isValidHelper(root.right, root.val, max) && isValidHelper(root.left, min, root.val);
}

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(3);
const root = new TreeNode(2, node1, node2);

console.log(isValidBST(root));
