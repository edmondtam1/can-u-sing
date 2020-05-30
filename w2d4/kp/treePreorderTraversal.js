/*
----------UNDERSTANDING THE PROBLEM----------
Given a binary tree, return the preorder traversal of its nodes' values.

INPUT: tree node
OUTPUT: array holding tree node values in preorder

-----------EXAMPLES-------------
child2 = new TreeNode(3)
child1 = new TreeNode(2, child2, null)
root = new TreeNode(1, null, child1)

preorderTraversal(root) === [1, 2, 3]

---------DATA STRUCTURE----------
Use a stack

--------ALGORITHM-------------
1. place root into stack
2. WHILE stack is not empty
  a. pop last node from stack
  b. place left child into stack if it exists
  c. place right child into stack if it exists
  d. place node.val into output
3. return Output
*/
                     //Iterative Solution
// var preorderTraversal = function(root) {
//   let stack = [root]
//   let result = [];
//
//   if (!root) return result;
//
//   while (stack.length) {
//     let root = stack.pop();
//     result.push(root.val);
//
//     if (root.right) stack.push(root.right);
//     if (root.left) stack.push(root.left);
//   }
//
//   return result;
// }

var preorderTraversal = function(root, result=[]) {
  if (!root) return result;
  result.push(root.val);

  if (root.left) preorderTraversal(root.left, result);
  if (root.right) preorderTraversal(root.right, result);

  return result;
}

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let child2 = new TreeNode(3)
let child1 = new TreeNode(2, child2, null)
let root = new TreeNode(1, null, child1)

console.log(preorderTraversal(root)) //[1, 2, 3]
