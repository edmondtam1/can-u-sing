class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(item) {
    const newNode = new ListNode(item);
    if (!this.rear) {
      this.front = newNode;
      this.rear = newNode;
      return;
    }
    this.rear.next = newNode;
    this.rear = newNode;
    return newNode;
  }

  dequeue() {
    if (!this.front) return null;

    const toDequeue = this.front;
    this.front = toDequeue.next;
    if (!this.front) {
      this.rear = null;
    }
    return toDequeue.val;
  }

  read() {
    return this.front;
  }

  size() {
    if (!this.front) return 0;
    let size = 1;
    let current = this.front;
    while (current !== this.rear) {
      size++;
      current = current.next;
    }
    return size;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (current) {
      // Handle trying to insert duplicate
      if (value === current.value) return undefined;
      // New value is > current node, go right
      if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
        // New value is < current node, go left
      } else if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
    return this;
  }

  search(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      }
    }
    return false;
  }

  breadthFirstSearch() {
    if (!this.root) return false;

    const queue = new Queue();
    const result = [];
    let current = this.root;

    queue.enqueue(current);

    while (queue.read()) {
      current = queue.dequeue();
      result.push(current.value);
      if (current.left) queue.enqueue(current.left);
      if (current.right) queue.enqueue(current.right);
    }
    return result;
  }

  breadthFirstSearchByLevel() {
    if (!this.root) return false;

    const queue = new Queue();
    const result = [];
    let current = this.root;

    queue.enqueue(current);

    // Keep track of the level # by the queue size
    // Create a subarray for values at each level
    // Iterate level# times, adding left and right to queue if they exist, popping and adding val to subarray
    // After iteration add sublist to main result array
    while (queue.read()) {
      const n = queue.size();
      const levelResults = [];

      for (let i = 0; i < n; i++) {
        current = queue.dequeue();
        levelResults.push(current.value);
        if (current.left) queue.enqueue(current.left);
        if (current.right) queue.enqueue(current.right);
      }
      result.push(levelResults);
    }
    return result;
  }
  averageByLevel() {
    if (!this.root) return [];

    const queue = new Queue();
    const result = [];
    let current = this.root;

    queue.enqueue(current);

    while (queue.read()) {
      const n = queue.size();
      let sum = 0;

      for (let i = 0; i < n; i++) {
        current = queue.dequeue();
        sum += current.value;
        if (current.left) queue.enqueue(current.left);
        if (current.right) queue.enqueue(current.right);
      }

      result.push(Math.round(sum / n));
    }
    return result;
  }

  preOrderSearch() {
    const results = [];
    const traverse = node => {
      results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }
  postOrderSearch() {
    const results = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }
  inOrderSearch() {
    const results = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }
}

/**
 * Example
 *    8
 *  2   10
 * 1 4    20
 *
 * queue: 10->2
 * result: [8]
 */
const myTree = new BinarySearchTree();
myTree.insert(8);
myTree.insert(2);
myTree.insert(10);
myTree.insert(1);
myTree.insert(4);
myTree.insert(20);

console.log(myTree.search(10));
// true
console.log(myTree.search(100));
// false
console.log(myTree.breadthFirstSearch());
// [ 8, 2, 10, 1, 4, 20 ]
console.log('by level', myTree.breadthFirstSearchByLevel());
// [ [8], [2, 10], [1, 4, 20] ]
console.log('avg by level', myTree.averageByLevel());
//
console.log(myTree.preOrderSearch());
// [ 8, 2, 1, 4, 10, 20 ]
console.log(myTree.postOrderSearch());
// [ 1, 4, 2, 20, 10, 8 ]
console.log(myTree.inOrderSearch());
// [ 1, 2, 4, 8, 10, 20 ]
