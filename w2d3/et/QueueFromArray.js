class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue = (data) => {
    this.queue.push(data);
  }

  dequeue = () => {
    return this.queue.shift();
  }

  peek = () => {
    return this.queue[0];
  }
}

module.exports = Queue;