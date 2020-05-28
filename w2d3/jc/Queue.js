const ListNode = require('./ListNode');

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
  }

  dequeue() {
    if (!this.front) return null;
    const toDequeue = this.front;
    this.front = this.front.next;
    return toDequeue.val;
  }
}
