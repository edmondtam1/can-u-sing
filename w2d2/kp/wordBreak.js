/*
--------PROBLEM--------------
Given a non-empty string s and a dictionary wordDict containing a list of non-empty
words, determine if s can be segmented into a space-separated sequence of one or
more dictionary words.

RULES:
The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

INPUT: non empty string && array of words
OUTPUT: boolean

------------EXAMPLES-------------
console.log(wordBreak("leetcode", ["leet", "code"]) === true)
console.log(wordBreak("applepenapple", ["apple", "pen"]) === true)
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]) === false)

----------DATA STRUCTURES---------
Use object/hash to store values of computed substrings

--------------ALGORITHM()------------------
1. For each substring in s check if it exists in the dictionary
*/

var wordBreak =  function(s, wordDict) {
  let memo = [];

  function wordBreakHelper (str, wordDict, i, memo){
      if(i === str.length) return true;
      if(memo[i]) return memo[i];

      for(let j = i+1; j <= str.length; j++){
          let substr = str.substring(i, j);
          if(wordDict.includes(substr) && wordBreakHelper(str, wordDict, j, memo)){
              memo[i] = true;
              return memo[i];
          }
      }
      memo[i] = false;
      return memo[i];
  }

  return wordBreakHelper(s, wordDict, 0, memo);
};





console.log(wordBreak("leetcode", ["leet", "code"]) === true)
console.log(wordBreak("applepenapple", ["apple", "pen"]) === true)
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]) === false)
