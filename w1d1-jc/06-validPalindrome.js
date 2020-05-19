/**
 * Given a string, determine if it is a palindrome
 * - consider only alphanumeric, and ignore case
 * - empty string is a valid palindrome
 *
 * Input: String
 * Output: Boolean
 *
 * Algo
 * - Use regex to clean non-alphanumeric
 * - Create pointers at start and end
 * - Iterate while start <= end, compare each char, if !==, return false
 * - return true
 */

const cleanStr = str => str.replace(/\W/g, '');

const validPalindrome = str => {
  const cleanedStr = cleanStr(str);
  let start = 0;
  let end = cleanedStr.length - 1;

  while (start <= end) {
    if (cleanedStr[start].toLowerCase() !== cleanedStr[end].toLowerCase()) {
      return false;
    }
    start++;
    end--;
  }

  return true;
};

console.log(validPalindrome('A man, a plan, a canal: Panama')); // true
console.log(validPalindrome('A man, a plan, a canal: Paanama')); // false
console.log(validPalindrome('')); // true
console.log(validPalindrome('aa')); // true
console.log(validPalindrome('aba')); // true
