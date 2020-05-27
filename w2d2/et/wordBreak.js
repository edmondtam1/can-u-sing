// https://leetcode.com/problems/word-break/#/description

// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

//     The same word in the dictionary may be reused multiple times in the segmentation.
//     You may assume the dictionary does not contain duplicate words.

// s = "leetcode", wordDict = ["lee", "ode", "leet", "code"] // returns true
// s = "applepenapple", wordDict = ["apple", "pen"] // returns true
// s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"] // returns false

// brute force T: O(A^2 * B), S: O(1), where A = string.length and B = wordDict.length
// use an anchor runner
// runner moves each iteration to check if a word formed of substring is in wordDict
// if a word is found, move anchor forward (can also splice the string if we can mutate it)

// recursive
// move index all the way to the end
// problematic with some tests on leetcode: different words in wordDict could be used to get answer
// below recursive code doesn't work: need some check that all breadths have been analysed, but here it returns the depth-first answer

// for each word, check if subString is a word && helper(subString) is a word
const wordBreak = (s, wordDict) => {
  return helper(s, wordDict, 0, {});
};

const helper = (s, wordDict, start, memo) => {
  if (start >= s.length) return true;
  for (let end = start + 1; end <= s.length; end++) {
    if (!memo[[start, end]]) {
      const subString = s.slice(start, end);
      if (wordDict.includes(subString) && helper(s, wordDict, end, memo)) {
        memo[[start, end]] = true;
        return true;
      } else {
        memo[[start, end]] = false;
      }
    }
  }
  return false;
};

// bottom up programming with queue - can convert this logic
const wordBreakV2 = (s, wordDict) => {
  let uniques = new Set();
  let startingIndices = [0];
  while (startingIndices.length > 0) {
    const start = startingIndices.shift();
    for (let i = start + 1; i <= s.length; i++) {
      const subString = s.slice(start, i);
      if (wordDict.includes(subString)) {
        if (!uniques.has(i)) {
          uniques.add(i);
          startingIndices.push(i);
        }
        if (i >= s.length) return true;
      }
    }
  }
  return false;
};

console.log(
  wordBreak("leetcode", ["leet", "code"]), // true
  wordBreak("applepenapplen", ["apple", "pen", "n"]), // true
  wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]), // false
  wordBreak("aaaaaaa", ["aaaa", "aa"]), // false
  wordBreak("aaaaaaa", ["aaaa", "aaa"]), // true
  wordBreak("abcd", ["a", "abc", "b", "cd"]), // true
);