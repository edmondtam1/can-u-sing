const ListNode = require('./ListNode');

// Implement a stack with linked lists
class Stack {
  constructor() {
    this.head = null;
  }

  push = (data) => {
    if (!this.head) {
      this.head = new ListNode(data);
    } else {
      const newNode = new ListNode(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  pop = () => {
    if (!this.head) return null;
    const node = this.head;
    this.head = node.next;
    return node.val;
  }

  peek = () => {
    if (!this.head) return null;
    return this.head.val;
  }
}

module.exports = Stack;