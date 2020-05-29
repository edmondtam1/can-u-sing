const BST = require('../../utils/BST');
const Stack = require('../../utils/Stack');

// const preorderTraversal = (root) => {
//   if (!root) return null;
//   const stack = new Stack();
//   const result = [];
//   return preorderHelper(root, stack, result);
// };

// const preorderHelper = (root, stack, result) => {
//   if (!root) return null;

//   result.push(root);
//   stack.push(root.right);
//   preorderHelper(root.left, stack, result);
//   preorderHelper(stack.pop(), stack, result);

//   return result;
// };

const preorderTraversal = root => {
  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);

    if (node.left) {
      if (node.right) stack.push(node.right);
      stack.push(node.left);
      continue;
    }

    if (node.right) stack.push(node.right);
  }

  return result;
};