/**
 * Input: Array of integers (sorted ascending), Integer (target value)
 * Output: Array of integers (start and end of contiguous target)
 *  - if not found, return [-1, -1]
 *
 * Rules
 * - Runtime must be O(log n)
 *
 * Algo
 * - Binary search to find the leftmost element
 * - Binary search to find the rightmost element
 *
 * [5,7,7,7,7,8,9], 7
 * [5,7,7] 7 [7,8,9]
 *
 *
 *
 */

const searchRange = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let firstIndex = -1;
  let lastIndex = -1;

  // Find the first index of target value
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      // Set the first index but keep going
      firstIndex = mid;
      right = mid - 1;
    }
  }

  // Reset pointers
  left = firstIndex;
  right = nums.length - 1;

  // Find the last index of target value
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      // Set the first index but keep going
      lastIndex = mid;
      left = mid + 1;
    }
  }

  return [firstIndex, lastIndex];
};

console.log(searchRange([5, 7, 7, 8, 8, 8, 8, 10], 8)); // [3,6]
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1,-1]
