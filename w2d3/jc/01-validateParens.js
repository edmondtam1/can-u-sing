const Stack = require('./Stack');

/**
 * - iterate over chars
 * - if left type bracket, push
 * - if right type bracket, compare, if matching, pop, if not, return false
 * - at end, if read(), return false, else return true
 */

const isValid = s => {
  const stack = new Stack();
  const sArr = s.split('');
  const charMap = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  for (char of sArr) {
    if (Object.values(charMap).includes(char)) {
      stack.push(char);
    } else {
      if (stack.read() === charMap[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.read()) return false;
  return true;
};
console.log(isValid('{[]}')); // true
console.log(isValid('([)]')); // false
