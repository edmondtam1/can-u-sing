/*
PROBLEM:
Write a function that reverses a string.

INPUT: array of chars
OUTPUT: reversed array of chars

RULES:
Do not allocate extra space for another array, you must do this by modifying the
input array in-place with O(1) extra memory.

TEST CASES:
reverseString(["h","e","l","l","o"]) ==> ["o","l","l","e","h"]
reverseString(["H","a","n","n","a","h"]) ==> ["h","a","n","n","a","H"]


ALGORITHM:
1. initialize a start pointer to 0
2. Initialzie an end pointer to array.length - 1
3. WHILE start < end
  i. swap array[start] with array[end]
  ii. increment start & end variables
4. RETURN array
*/

var reverseString = function(s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start += 1;
    end -= 1;
  }

  return s;
};

console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","n","n","a","h"]));
