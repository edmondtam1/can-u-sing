/*
-----------PROBLEM---------------
Given the root node of a binary search tree (BST) and a value to be inserted into
the tree, insert the value into the BST. Return the root node of the BST after
the insertion. It is guaranteed that the new value does not exist in the original BST.
Note that there may exist multiple valid ways for the insertion, as long as the
tree remains a BST after insertion. You can return any of them.

INPUT: root node
OUTPUT: root node

RULES:
1. The number of nodes in the given tree will be between 0 and 10^4.
2. Each node will have a unique integer value from 0 to -10^8, inclusive.
3. -10^8 <= val <= 10^8
4. It's guaranteed that val does not exist in the original BST.

----------ALGORITHM----------------
1. implement search function for BST
2. insert node as child of node leaf

*/

var insertIntoBST = function(root, val) {
    if (!root) {
      return new TreeNode(val);
    }

    if (val < root.val) {
      root.left = insertIntoBST(root.left, val);
    } else {
      root.right = insertIntoBST(root.right, val);
    }

    return root;
};
