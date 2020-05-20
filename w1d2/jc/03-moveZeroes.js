/**
 * Input: Array of integers
 * Output: Array of integers with all 0's moved to end
 *
 * Algorithm
 * - writer = 0, reader = 1
 * - while reader < arr.length
 *   - if array[reader] !== 0, arr[writer] = arr[reader], w++
 *   - r++
 * while writer < arr.length, arr[writer] = 0, writer++
 *
 * [0,1,0,3,12]
 * [1,1,0,3,12]
 * [1,1,3,3,12]
 * [1,1,3,0,12]
 * [1,1,3,0,0]
 *            w
 *            r
 */

const moveZeroes = nums => {
  let w = 0;
  let r = 1;

  while (r < nums.length) {
    console.log(w, r);
    if (nums[r] !== 0) {
      nums[w] = nums[r];
      w++;
    }
    r++;
  }

  while (w < nums.length) {
    nums[w] = 0;
    w++;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
