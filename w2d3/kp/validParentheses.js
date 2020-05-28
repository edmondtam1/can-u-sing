/*
---------PROBLEM-------------
Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

RULES: A string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

INPUT: string
OUTPUT: boolean

-----------EXAMPLES-------------
console.log(isValid('()') === true)
console.log(isValid('()[]{}') === true)
console.log(isValid('(]') === false)
console.log(isValid("([)]") === false)
console.log(isValid("{[]}") === true)

----------DATA STRUCTURES----------
implement a stack

---------ALGORITHM-------------
1. implement a stack data structure
2. map each closing parenthesis to its opening version
3. split string into array of chars
4. iterate through array
   a. IF opening parenthesis, push to stack
   b. Else if last element in stack is complentary to current parenthesis pop
   c. else return false
5. if stack is empty return true else false

*/

var isValid = function(s) {
  let stack = new Stack();
  let chars = s.split('');
  let map = {
    ')' : '(',
    '}' : '{',
    ']' : '[',
  };


  for (let i = 0; i < chars.length; i++) {
    if (!map[chars[i]]) {
      stack.push(chars[i]);
    } else if (map[chars[i]] === stack.peek()) {
      stack.pop();
    } else {
      return false;
    }
  }

  return (stack.length === 0);
}

class ListNode {
  constructor(data){
    this.val = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.head = null;
  }

   push(data) {
     let node = new ListNode(data)
     node.next = this.head
     this.head = node;
     this.length += 1;

     return 'Added data'
  }

  pop() {
    if (this.length === 0) return 'Stack is empty';
    let currentNode = this.head;
    this.head = currentNode.next;
    this.length -= 1;

    return currentNode.val;
  }

  peek() {
    if (this.head) return this.head.val;
    return 'Stack is empty!';
  }
}

console.log(isValid('()') === true)
console.log(isValid('()[]{}') === true)
console.log(isValid('(]') === false)
console.log(isValid("([)]") === false)
console.log(isValid("{[]}") === true)
console.log(isValid("]") === false)
