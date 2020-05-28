const Stack = require('Stack');
/**
 * A Queue implemented as 2 stacks
 * https://leetcode.com/problems/implement-queue-using-stacks/#/description
 *
 * - "Inbox" Stack used for enqueue operations
 * - "Outbox" Stack used for dequeue operations
 *
 * Enqueue
 * - Push to Inbox stack
 *
 * Dequeue
 * - IF Outbox Stack empty, pop EVERY element in the Inbox stack and push to the Outbox stack
 * - pop one from the Outbox Stack
 */

class InboxOutbox {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  inToOut() {
    if (!this.outbox.read()) {
      while (this.inbox.read()) {
        this.outbox.push(this.inbox.pop());
      }
    }
  }

  dequeue() {
    this.intToOut();
    this.outbox.pop();
  }

  enqueue(item) {
    this.inbox.push(item);
  }

  peek() {
    this.inToOut();
    this.outbox.read();
  }
}
