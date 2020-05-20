/**
 * Input: Array (integers, non-sorted)
 *   - nums[i] !== nums[i+1] (no contiguous numbers)
 * Output: Index of any "peak" (integer greater than both neighbours)
 *
 * [1,2,3,1]
 * [3, 1]
 * [3] returns idx 2
 *
 * [1,2,1,3,5,6,4]
 * [1,2,1,3,5,6,4] mp=idx3
 *
 *
 * Algo
 * - O(N)
 *   - Iterate, if nums[i-1] and nums[i+1] < nums[i] return i
 *
 * - O(log N)
 *   - find midpoint, check if prev index & next index are <
 *     - if so, return index
 *     - if nums[i-1] < nums[i], recursively call on nums[i...]
 */

const findPeakElements = nums => {
  //
};

console.log(findPeakElements([1, 2, 3, 1])); // 2 (number=3)
console.log(findPeakElements([1, 2, 1, 3, 5, 6, 4])); // 1 or 5
