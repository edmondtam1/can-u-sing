/**
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.
 *
 * Input: Integer (positive)
 * Output: Boolean
 *
 * 1 <= num <= 2^31 - 1
 *
 * Algo
 * - List is all integers from 1 to num
 * - Binary search for an integer, which * itself === num, return true
 * - Otherwise, return false
 */

/**
 * Group discussion
 * - Is this actually constant time since there's an upper bound of perfect squares we're looking for (46340)?
 *   - Technically, O(log N) for N <= 46340, then O(1)
 *   - But, technically there's always an upper bound (something short of infinity)
 *   - so, here its still O(log N)
 */

const validPerfectSquare = num => {
  let start = 1;
  let end = num;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    const currentSquare = mid * mid;

    if (currentSquare === num) {
      return true;
    } else if (currentSquare < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
};

console.log(validPerfectSquare(16)); // true
console.log(validPerfectSquare(14)); // false
