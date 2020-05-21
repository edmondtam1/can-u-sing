/**
 * Input: Array (sorted), Integers (target value)
 * Output: Integer (index of target or index where it would be if inserted in order)
 *
 * Rules
 * - Assume no duplicates
 *
 * [1, 3, 5, 6], 2
 * [1] return idx++
 *
 * [1, 3, 5, 6, 8], 7
 * [6,8]
 * [8] return idx--
 *
 * Algo
 * - O(N)
 *   - Iterate over array, if el === target, return index, if el > target, return index - 1
 *
 * - O(log N)
 *   - Binary search
 *   - when length === 1, return index or index-- or index++
 */

const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  if (target === 0) return 0;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return target > nums[mid] ? mid + 1 : mid;
};

// [1,3] mid = 0, left = 1, right = 1

console.log(searchInsert([1, 3], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
