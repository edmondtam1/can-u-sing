/*
--------------PROBLEM-----------------
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around
its center).

INPUT: binary tree
OUTPUT: boolean

-------------EXAMPLES---------------
console.log(isSymmetric([1,2,2,3,4,4,3]) === true);
console.log(isSymmetric([1,2,2,null,3,null,3]) === false);
*/



var isSymmetric = function(root) {
  if (!root) return true;
  return symmetricHelper(root.left, root.right);
};

let symmetricHelper = function(leftTree, rightTree) {
    if (leftTree === null && rightTree === null) {
      return true;
    }  else if (leftTree === null || rightTree === null) {
      return false;
    } else if (leftTree.val !== rightTree.val) {
      return false;
    }

    return symmetricHelper(leftTree.left, rightTree.right) && symmetricHelper(leftTree.right, rightTree.left);
};
