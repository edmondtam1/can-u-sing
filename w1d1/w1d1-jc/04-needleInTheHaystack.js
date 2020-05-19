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
 * - on each iteration, check substring based on needle, if ===, return i
 * - if we reach end of haystack, return -1
 */

const strStr = (haystack, needle) => {
  if (needle === '') return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};

// Test cases
console.log(strStr('abcde', '')); // 0
console.log(strStr('hello', 'll')); // 2
console.log(strStr('hello', 'hello')); // 0
console.log(strStr('aaaaa', 'bba')); // -1
console.log(strStr('aaaaa', 'ba')); // -1
