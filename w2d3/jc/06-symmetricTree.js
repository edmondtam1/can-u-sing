/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * 
  // node's left branch === node's right branch
  // so, look down the left and right branches, and at each level compare values
  // - if values aren't the same, return false
  // - recursivly call w/ outer elements
  // - recursivly call w/ inner elements
  // Base cases:
  // if we reach the end (null) on both sides, return true
  // if we reach the end on only one side, return false
 */

/**
 * Recursive definition
 * - A tree is symetric if the left and right children match and the subtrees are symetric (mirror images) - REALLY??? Not sure about this def
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isSymmetric = function (root) {
  const helper = (left, right) => {
    if (!left && !right) return true;
    if (!left && right) return false;
    if (left && !right) return false;

    const currentIsEqual = left.val === right.val;
    const leftIsEqual = helper(left.left, right.right);
    const rightIsEqual = helper(left.right, right.left);

    return currentIsEqual && leftIsEqual && rightIsEqual;
  };
  return helper(root, root);
};
