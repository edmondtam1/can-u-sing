const Stack = require('../../shared/jc/Stack');
const TreeNode = require('../../shared/jc/TreeNode');
//
// - If !root, return null
// - Visit root, push val to result
// - If root.right, push to stack
// - Recursively call fn on left
// - Unwind the stack to the result
//  - Recursively call helper w/ stack.pop()

// Recursive
// const dfsTraversal = root => {
//   const result = [];
//   const temp = new Stack();

//   const helper = root => {
//     console.log(root);
//     if (!root) return null;
//     result.push(root.val);
//     if (root.right) {
//       temp.push(root.right.val);
//     }
//     if (root.left) {
//       helper(root.left);
//     }
//     if (temp.read()) {
//       helper(temp.pop());
//     }
//   };
//   helper(root);
//   return result;
// };

// Iterative
/**
 * Example
 *    8
 *  2   10
 * 1 4    20
 *  3 5
 * => [8,2,1,4,10,20]
 */
const preOrderTraversal = (root) => {
  const results = [];
  const stack = new Stack();
  stack.push(root);

  // add root to stack
  // while stack.read
  // set current to stack.pop
  // add current.val to results
  // if right, add right to stack, if left, add left to stack
  while (stack.read()) {
    let current = stack.pop();
    results.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return results;
};

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
node1.right = node2;
node2.left = node3;

console.log(preOrderTraversal(node1));
