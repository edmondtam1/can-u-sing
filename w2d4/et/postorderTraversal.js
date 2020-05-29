// https://leetcode.com/problems/binary-tree-postorder-traversal/

// Given a binary tree, return the postorder traversal of its nodes' values.

// iterative: use a stack to store root.right then root.left
// push root.val to result array
// on next iteration set node to stack.pop()

const { BST } = require('../../utils/index');

const postorderTraversal = root => {
  const result = [];

  const helper = root => {
    if (!root) return root;

    if (root.left) helper(root.left);
    if (root.right) helper(root.right);
    result.push(root.val);

    return root;
  };

  helper(root);
  return result;
};

console.log(
  postorderTraversal(new BST([1, null, 2, 3])), // [3, 2, 1]
);