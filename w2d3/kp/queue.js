// Queue using linked lists

class Queue() {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    let node = new Node(data);

    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
    }

    return 'Data added to stack'
  }

  dequeue() {
    let firstNode = this.head;

    if (!firstNode) return 'Stack is empty';
    if (this.head ==== this.tail) this.tail = null;
    this.head = firstNode.next;

    return firstNode.val;
  }

  peek() {
    if (!this.head) return 'Stack is empty';
    return this.head.val;
  }
}

class Node() {
  constructor(data, next = null) {
    this.val = data;
    this.next = next;
  }
}


// Queue implementation using an array

class Queue() {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data)
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }
}
