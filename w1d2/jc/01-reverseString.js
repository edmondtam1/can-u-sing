/**
 * Input: Array of chars
 * Output: Array of chars (reversed)
 *
 * Algorithm:
 * - Pointers at start and end
 * - Swap values at pointers
 * - Move towards each other
 * - Return modified input when start >= end
 */

const reverseString = arr => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // ["o","l","l","e","h"]
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])); // ["h","a","n","n","a","H"]
console.log([]); // []
