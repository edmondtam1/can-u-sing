/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 *
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

var maxDepth = function (root) {
  return maxDepthHelper(root, 0);
};

const maxDepthHelper = (root, depth) => {
  // Base, no children, return depth
  if (!root.left && !root.right) return depth;
  if (!root) return depth;

  // Go left
  const leftSide = maxDepthHelper(root.left, depth + 1);
  // Go right
  const rightSide = maxDepthHelper(root.right, depth + 1);

  return Math.max(leftSide, rightSide);
};
