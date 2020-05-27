class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// "end" is the head of the LL
// 1=>2=>3
// end   beg
class Queue {
  end;
  beg;

  enqueue(node) {
    if (!this.end) {
      this.end = node;
    } else {
      this.beg.next = node;
    }
  }

  dequeue() {
    const dequeued = this.end;
    this.end = this.end.next;
    return dequeued;
  }

  read() {
    return this.end.val;
  }
}

const myQueue = new Queue();
const firstNode = new ListNode('blah');
myQueue.enqueue(firstNode);
console.log(myQueue);
console.log(myQueue.read());
myQueue.dequeue();
console.log(myQueue);
