/**
 * Input: Array, Integer (to remove)
 * Output: Integer (new length)
 *
 * Algorithm
 * - reader = 1, writer = 0
 * - iterate over array, if current el !== value, arr[writer] = arr[reader], move writer
 * - move reader and writer
 * - return writer when reader >= arr.length
 *
 * [2, 2, 2, 3] 3
 *           r
 *        a
 *
 * [0,1,2,2,3,0,4,2] 2
 *      w
 *          r
 *
 */

const removeElement = (nums, val) => {
  let w = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] !== val) {
      nums[w] = nums[r];
      w++;
    }
  }

  return w;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
console.log(removeElement([], 3)); // 0
