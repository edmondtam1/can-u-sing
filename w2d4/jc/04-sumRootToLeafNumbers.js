/*
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.
An example is the root-to-leaf path 1->2->3 which represents the number 123.
Find the total sum of all root-to-leaf numbers.
Note: A leaf is a node with no children.
*/

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
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0;

  const helper = (root, num) => {
    if (root === null) return;

    // Keep track of the node values appended to each other as we go down the tree
    num = num * 10 + root.val;

    // If we reach the end, add the running appended # to the total sum and return
    if (root.left === null && root.right === null) {
      sum += num;
      return;
    }
    // Recurse down the left
    helper(root.left, num);
    // Recurse down the right
    helper(root.right, num);
  };
  helper(root, 0);
  return sum;
};

/**
 *     4
 *   3  2
 * 5  7
 3   2
 * - Keep a total sum, initially at 0
 * - Create a stack to store temporary values
 * - Push the root onto the stack
 * - Iterate while there's items on the stack
 * - Pop off the stack and set to current var
 * - If there's a left child, update its value adding the currentVal * 10
 * - Same for right
 * - If there's no children, add current val to the sum
 */

const sumRootToLeafNumber = root => {
  if (!root) return 0;
  const stack = new Stack();
  let totalSum = 0;
  stack.push(root);

  while (stack.read()) {
    let current = stack.pop();

    if (current.right) {
      current.right.val = current.val * 10 + current.right.val;
      stack.push(current.right);
    }
    if (current.left) {
      current.left.val = current.val * 10 + current.left.val;
      stack.push(current.left);
    }
    if (!current.left && !current.right) {
      totalSum += current.val;
    }
  }
  return sum;
};
