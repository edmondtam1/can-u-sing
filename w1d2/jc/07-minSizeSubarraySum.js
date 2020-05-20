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

/**
 * Additional notes from Tannr
 *
 * Start with most intuitive solution
 * - runner resets every time (quadratic)
 *
 * Optimize it
 * - Can we do O(n log n)
 *   - One of 2 conditions is usually true
 *   - 1. Sort
 *   - 2. Iterate and perform binary search each time
 *
 * - We can't sort because order matters, so iterate and use binary search
 *
 * Optimize it more
 * - We need O(N)
 * - typically linear solutions involving lists are solved w/ pointer based models
 * - What I know:
 *   - Need a pointer based model (window based model)
 *   - K-window slide? ...but this is for contant-sized subcollections
 *   - Variation of K window slide: "Running Slide"
 * - Try to solve by hand first
 *   - what is the intial state of the window?
 *   - under what conditions do i expand the window?
 *   - under what conditions to I contract the window?
 *   - what are my success and fail cases?
 *
 *  [2,3,1,2,4,3] length=4
 *   l
 *         r
 *  [2,3,1,2,4,3] no good
 *     l
 *         r
 *  [2,3,1,2,4,3] length=3
 *         l
 *             r
 *  [2,3,1,2,4,3] length=2 ***
 *           l
 *             r
 *  [2,3,1,2,4,3] no good
 *             l
 *             r
 *
 * So, based on above,
 * - intial size = 1
 * - expand window until sum >= target
 * - contract windows until sum < target
 * - Stopping condition: right side is out of bounds
 *
 * Optimize to logarithmic?
 * - Not possible, we can't do binary search without O(N log N)
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
