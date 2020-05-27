/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 
 Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

  // Base, i reach the end of a branch, return true
  // Go down left and right recursively
  // Keep track of the max # for left, min for right, which is the root to start
  // Keep track of the prev value
  // On left, if val > prev val || > max, return false
  // On right, if val < prev val || < min, return false
  // Check left && right
  
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const TreeNode = require('./TreeNode');

var isValidBST = function (root) {
  return isValidBSTHelper(root);
};

const isValidBSTHelper = (node, min = -Infinity, max = Infinity) => {
  if (!node) return true;
  if (node.val <= min || node.val >= max) return false;

  const leftSide = isValidBSTHelper(node.left, min, node.val);
  const rightSide = isValidBSTHelper(node.right, node.val, max);

  return leftSide && rightSide;
};

const node1 = new TreeNode(5);
const node2 = new TreeNode(1);
const node3 = new TreeNode(4);
const node4 = new TreeNode(3);
const node5 = new TreeNode(6);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

console.log(isValidBST(node1));
