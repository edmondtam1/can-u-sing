// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// max depth of the root is the max of the depth of the left tree and depth of the right tree

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const maxDepth = (root) => {
  return helper(root, 0);
};

const helper = (root, depth) => {
  if (!root) return depth;

  const leftResult = helper(root.left, depth + 1);
  const rightResult = helper(root.right, depth + 1);

  return Math.max(leftResult, rightResult);
}

// const helper = (root, depth) => {
//   if (!root) return 0;

//   const left = helper(root.left, depth);
//   const right = helper(root.right, depth);
//   return 1 + Math.max(left, right);
// }

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxDepth(root));

const root2 = new TreeNode(3);

console.log(maxDepth(root2));