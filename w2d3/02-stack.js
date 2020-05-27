class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  first = {};

  push(node) {
    if (!this.first) {
      this.first = node;
    } else {
      const temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    return node;
  }
  pop() {
    if (!this.first) return null;
    const popped = this.first;
    this.first = this.first.next;
    return popped;
  }
  read() {
    return this.first.val || null;
  }
}

const myStack = new Stack();
const firstNode = new ListNode('blah');
const secondNode = new ListNode('blah again!');
myStack.push(firstNode);
myStack.push(secondNode);
console.log(myStack);
myStack.pop();
console.log(myStack);
