/**
 * Input: Array of integers (sorted ascending), Integer (target value)
 * Output: Array of integers (start and end of contiguous target)
 *  - if not found, return [-1, -1]
 *
 * Rules
 * - Runtime must be O(log n)
 *
 * Algo
 * - Binary search to find the element
 *   - If it doesn't exist, return [-1, -1]
 *   - If it does, binary search the left side to find the leftmost idx and right side to find the rightmost idx
 */

const searchRange = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);

    // When we find the target
    if (nums[mid] === target) {
      // Search the left for the first instance of the target and the right for the last
      return [
        searchLeft(nums, 0, mid, target),
        searchRight(nums, mid, nums.length, target),
      ];
    } else if (target <= nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // If target doesn't exist in nums
  return [-1, -1];
};

const searchLeft = (nums, left, right, target) => {
  while (left < right) {
    mid = Math.floor((right + left) / 2);

    // If number to left is not the same, we found the left boundary
    if (nums[mid - 1] < target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

const searchRight = (nums, left, right, target) => {
  while (left < right) {
    mid = Math.floor((right + left) / 2);

    // If number to right is not the same, we found the right boundary
    if (nums[mid + 1] > target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1,-1]
