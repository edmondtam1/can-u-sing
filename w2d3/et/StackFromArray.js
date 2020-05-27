class Stack {
  constructor() {
    this.stack = [];
  }

  push = (data) => {
    this.stack.push(data);
  }

  pop = () => {
    return !!this.stack.length ? this.stack.pop() : null;
  }

  peek = () => {
    return this.stack[this.stack.length - 1];
  }
}

module.exports = Stack;