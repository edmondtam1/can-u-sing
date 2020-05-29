// https://leetcode.com/problems/binary-tree-maximum-path-sum/

// Given a non-empty binary tree, find the maximum path sum.

// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

// Example: input: [1, 2, 3]; output: 6
// Example: input: [-10,9,20,null,null,15,7]; output: 42

// naive - retrieve all possible sums
// start at node, and push itself
// return a max of max(parent) + itself, itself & max(children) + itself (this is not doable)

// recursive
// do a postorder DFS: reason is that it calculates from the child nodes up
// initialize a "max sum" to -Infinity
// base case: root is null, return 0
// get the max of helper(root.left) and 0 => leftMax
// get the max of helper(root.right) and 0 => rightMax
// calculate sum = root.val + leftMax + rightMax
// set maxSum to be max of maxSum & sum
// return root.val + max of leftMax and rightMax

const { BST } = require('../../utils/index');

const maxPathSum = root => {
  let maxSum = -Infinity;

  const helper = root => {
    if (!root) return 0;

    const leftMax = Math.max(helper(root.left), 0);
    const rightMax = Math.max(helper(root.right), 0);

    const sum = root.val + leftMax + rightMax;
    maxSum = Math.max(maxSum, sum);

    return root.val + Math.max(leftMax, rightMax);
  };

  helper(root);
  return maxSum;
};

console.log(
  maxPathSum(new BST([1, 2, 3])), // 6
  maxPathSum(new BST([-10, 9, 20, null, null, 15, 7])), // 42
);