const ListNode = require('./ListNode');

// Implement queue with linked list
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  dequeue = () => {
    if (!this.head) return null;
    const node = this.head;
    if (this.head === this.tail) this.tail = null;
    this.head = this.head.next;
    return node.val;
  }

  enqueue = (data) => {
    const newNode = new ListNode(data);
    if (!this.head) this.head = newNode;
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  peek = () => {
    return this.head.val;
  }

  isEmpty = () => {
    return !this.head && !this.tail;
  }
}

module.exports = Queue;