const Queue = require('./Queue');

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

class BST {
  constructor(values = []) {
    return this.populateTree(values);
  }

  populateTree = values => {
    if (values.length === 0) {
      this.root = null;
      return this.root;
    }

    this.root = new TreeNode(values[0]);;
    const queue = new Queue();
    queue.enqueue(this.root);
    let index = 1;
    while (!queue.isEmpty() && index < values.length) {
      const current = queue.dequeue();
      if (current) {
        current.left = values[index] === null ? null : new TreeNode(values[index]);
        queue.enqueue(current.left);
        index++;

        if (index >= values.length) break;

        current.right = values[index] === null ? null : new TreeNode(values[index]);
        queue.enqueue(current.right);
        index++;
      }
    }
    return this.root;
  }
}

module.exports = BST;