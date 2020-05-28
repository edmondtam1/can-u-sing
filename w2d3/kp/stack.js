//Stack implemented with linked list

class Stack() {
  constructor() {
    this.head = null;
  }

  push(data) {
    let node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  pop() {
    if (!this.head) return null;
    let node = this.head;
    this.head = node.next;

    return node.val;
  }

  peek() {
    if (this.head) {
      return this.head.val;
    } else {
      return 'Stack is empty'
    }
  }
}

class Node() {
  constructor(data, next = null) {
    this.val = data;
    this.next = next
  }
}

//Stack implemented with array

class Stack() {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop(data) {
    if (this.stack.length) {
      return this.stack.pop();
    } else {
      return 'Stack is empty'
    }
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}
