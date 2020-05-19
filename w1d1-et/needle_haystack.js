// https://leetcode.com/problems/implement-strstr/description/

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

const strStr = (haystack, needle) => {
  // return haystack.indexOf(needle);
  if (needle.length === 0) return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (j = 1; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) break;
      }
      return i;
    }
  }
  return -1;
};

// Examples

console.log(
  strStr('hello', 'll') === 2,
  strStr('hello', '') === 0,
  strStr('hello', 'e') === 1,
  strStr('hello', 'ello') === 1,
  strStr('aaaaa', 'bba') === -1,
);