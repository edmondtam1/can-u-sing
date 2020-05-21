/**
 * Input: Array (integers, non-sorted)
 *   - nums[i] !== nums[i+1] (no contiguous numbers)
 * Output: Index of any "peak" (integer greater than both neighbours)
 *
 * Discussion
 * - Since arr[i] !== arr[i+1], think of the array as slopes, rising and falling, always having to go up or down
 *
 * Algo
 * - O(N)
 *   - Iterate, if nums[i+1] < nums[i] return i
 *      -dont need to check i-1 because we start from beginning and arr[i] can't == arr[i+1]
 *
 * - O(log N)
 *   - if the midpoint is in a descending sequence (arr[mid] < arr[mid-1]), peak must lie to the left
 *   - if the midpoint is in an ascending sequence (arr[mid] > arr[mid-1]), peak must lie to the left
 *   - there are no other conditions since arr[i] can't === arr[i-1]
 *
 *    [1, 2, 1, 3, 5, 6, 4]
 *    [1, 2, 1] 3 [5, 6, 4] arr[mid] > arr[mid-1]
 */

const findPeakElements = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // If descending
    if (nums[mid] > nums[mid + 1]) {
      // Check left
      right = mid;
      // If ascending
    } else {
      // Check right
      left = mid + 1;
    }
  }
  return left;
};

console.log(findPeakElements([1, 2, 3, 1])); // 2 (number=3)
console.log(findPeakElements([1, 2, 1, 3, 5, 6, 4])); // 1 or 5
