const Stack = require('./Stack');

// https://leetcode.com/problems/valid-parentheses/

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

// Note that an empty string is also considered valid.

const isValid = s => {
  const parenMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  }
  const stack = new Stack();

  for (let char of s) {
    if (/[{}()[\]]/gi.test(char)) {
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      } else {
        const paren = stack.pop();
        if (parenMap[char] !== paren) return false;
      }
    }
  }
  return !stack.pop();
};

console.log(
  isValid("()"), // true
  isValid("()[]{}"), // true
  isValid("(]"), // false
)