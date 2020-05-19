/**
 * Input: String (haystack), String (needle)
 * Output: Integer (index of first occurrence of needle in haystack), or -1
 *
 * Rules
 * - If needle === '', return 0
 *
 * Algo:
 * - if (needle === '') return 0;
 * - iterate over haystack w/ i
 * - on each iteration, iterate over needle w/ j, comparing each char in haystack to needle
 *   - if iteration completes with each char ===, return i
 *   - if any char !==, break and i++
 * - if we reach end of haystack, return -1
 */

const strStr = (haystack, needle) => {
  if (needle === '') return 0;

  let charsEqual = true;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    charsEqual = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i] !== needle[j]) {
        charsEqual = false;
        break;
      }
    }
    if (charsEqual) return i;
  }

  return -1;
};

// Test cases
console.log(strStr('abcde', '')); // 0
console.log(strStr('hello', 'll')); // 2
console.log(strStr('aaaaa', 'bba')); // -1
console.log(strStr('aaaaa', 'ba')); // -1
