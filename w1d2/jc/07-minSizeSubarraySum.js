/**
 * Given an array of n positive integers and a positive integer s,
 * find the minimal length of a contiguous subarray of which the sum ≥ s.
 * If there isn't one, return 0 instead.
 *
 * Input: Positive Integer s, Array of n positive integers
 * Output: Integer: Min length of subarray of which sum > s
 *
 * Algo
 * [2,3,1,2,4,3]
 * [       ] 0,3
 *   [     ] no
 *    [      ] same length
 *      [    ] 2,4
 *        [  ] no
 *        [    ] same length
 *          [  ] [4,5]
 */

const minSizeSubarraySum = (s, nums) => {
  let start = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= s) {
      let end = i + 1;

      minLength = Math.min(minLength, end - start);
      sum -= nums[start];
      start++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

console.log(minSizeSubarraySum(7, [2, 3, 1, 2, 4, 3])); // 2
