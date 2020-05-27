/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

// If there's no root, return create one with the val and return it
// If the root < val, val goes to the right
// - call the fn recursively with root.right
// If the root > val, val goes to the left
// - call the fn recursively with root.left
// Return the root

var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }

  return root;
};
