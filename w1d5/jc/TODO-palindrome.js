/**
 * TODO: Use pointer per screenshot
 */

/**
 * Input: String
 * Output: Boolean
 *
 * return false;
 *
 * Base case:
 *  * - 'a'
 * - if str.length === 0, return true (???)
 *   if str.length ===  1, return true
 *
 * Recursive case:
 * 'aba'
 * - Check the first and last chars, if they're the same, call recursively with the rest of the str
 * - if (str[0] === str[str.length -1]), call fn w/ str.slice(1, str.length - 1)
 *
 * - Time complexity
 *   - # of fn calls: n/2 ~ O(N)
 *
 * - Space complexity
 *   - depth: O(N)
 */

/**
 * Discussion
 * - pass pointers down to limit space complexity
 *
 * 1. Define solution in terms of smaller versions of solution
 *  "S is a palindrome if first & last are equal && rest of string is a palindrome"
 */

const isPalindrome = str => {
  // if (str.length === 0) return false;
  if (str.length === 1 || str.length === 0) return true;

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }
  return false;
};

console.log(isPalindrome(''));
console.log(isPalindrome('aba'));
console.log(isPalindrome('abaa'));
