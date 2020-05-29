// https://leetcode.com/problems/symmetric-tree/

// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

// But the following [1,2,2,null,3,null,3] is not:

// tree is symmetric if root.left && root.right at the same depth are both symmetric
// recurse down the tree and check if root === root.swap
// at each depth, check if node.left at depth 

const BST = require('../../utils/BST');

const isSymmetric = root => {
  return symmetricHelper(root, root);
};

const symmetricHelper = (left, right) => {
  if (!left && !right) return true;
  if (!left && right || left && !right) return false;

  const areEqual = (left.val === right.val);
  const equalOuters = symmetricHelper(left.left, right.right);
  const equalInners = symmetricHelper(left.right, right.left);

  return areEqual && equalOuters && equalInners;
};

console.log(
  isSymmetric(new BST([1, 2, 2, 3, 4, 4, 3])), // true
  isSymmetric(new BST([1, 2, 2, null, 3, null, 3])), // false
);