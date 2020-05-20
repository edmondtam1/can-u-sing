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

const searchInsert = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);

    if (arr[mid] === num) {
      return mid;
    } else if (num < arr[mid]) {
      right = mid - 1;
      // right = mid;
    } else {
      left = mid + 1;
      // left = mid;
    }
  }

  return mid > num ? mid - 1 : mid + 1;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
