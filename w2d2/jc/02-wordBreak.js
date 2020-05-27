/**
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
 * determine if s can be segmented into a space-separated sequence of one or more dictionary words.
 *
 * The same word in the dictionary may be reused multiple times in the segmentation.
 * You may assume the dictionary does not contain duplicate words.
 *
 * Approach #1
 * - start pointers "a" and "r" at s[0]
 * - while r < s.length
 * - check if s.slice(a,r+1) is in dict
 *   - if so, move a to r, a++, r++
 *   - if not, r++
 * -if a === r, return true
 * - else, return false
 *
 * s = "applepenapple", wordDict = ["apple", "pen"]
 * applepenapple
 *              a
 *              r
 *
 * Approach #2
 * - base case ''
 *
 * recursive
 * -
 *
 */

/**
 * POINTERS
 */
const wordBreak = (s, wordDict) => {
  let a = 0;
  let r;

  for (r = 0; r < s.length; r++) {
    if (wordDict.includes(s.slice(a, r + 1))) {
      a = r;
      a++;
    }
  }

  console.log(a, r);
  return a === r ? true : false;
};
// console.log(wordBreak('applepenapple', ['apple', 'pen']));
// console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));

/**
 * DP
 */
const wordBreakDP = (s, wordDict) => {
  // dp[i] represents if s[0..i] can be segmented into words from the dict
  const dp = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      const sub = s.substring(j, i + 1);

      if (wordDict.includes(sub) && (j == 0 || dp[j - 1])) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length - 1] || false;
};

console.log(wordBreakDP('applepenapple', ['apple', 'pen']));
console.log(wordBreakDP('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
