const ListNode = require('./ListNode');

class Stack {
  constructor() {
    this.first = {};
  }

  push(nodeVal) {
    if (!this.first) {
      this.first = new ListNode(nodeVal);
    } else {
      const temp = this.first;
      this.first = new ListNode(nodeVal);
      this.first.next = temp;
    }
    return nodeVal;
  }
  pop() {
    if (!this.first) return null;
    const popped = this.first;
    this.first = this.first.next;
    return popped.val;
  }
  read() {
    return this.first.val || null;
  }
  isEmpty() {
    if (this.read()) return false;
    return true;
  }
}

module.exports = Stack;
