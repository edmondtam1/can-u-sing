/**
 * You are given a one dimensional array that may contain both positive and negative integers,
 * find the sum of contiguous subarray of numbers which has the largest sum.
 *
 * [-2, -5, 6, -2, -3, 1, 5, -6]
 *
 * Methodology
 * - Divide array in 2 halves
 * - Return max of:
 *    1. max subarray sum of left half (recursive)
 *    2. max subarray sum of right half (recursive)
 *    3. Max subarray sum such that subarray crosses midpoint
 *
 * [1, -3, 4, 5]
 * [1, -3] [4, 5]
 * [1] [-3] [4] [5]
 *
 * Algorithm
 * - Base: return arr if arr.size === 1
 * - Divide
 */

// [1, -3, 4, 5]
// maxCrossingSum([1, -3, 4, 5], 0, 1, 4)
//

// Find the max sum in an arr such that arr[m] is part of it
const maxCrossingSum = (arr, l, m, h) => {
  let sum = 0;
  let leftSum = -Infinity;

  // Include elements on left of mid
  for (let i = m; i >= l; i--) {
    sum = sum + arr[i];
    if (sum > leftSum) {
      leftSum = sum;
    }
  }

  // Include elements on right side
  sum = 0;
  let rightSum = -Infinity;
  for (let i = m + 1; i <= h; i++) {
    sum = sum + arr[i];
    if (sum > rightSum) {
      rightSum = sum;
    }
  }
  return Math.max(leftSum + rightSum, Math.max(leftSum, rightSum));
};

const maxSubArraySum = (arr, l = 0, h = arr.length - 1) => {
  // If only 1 element, return it
  if (l === h) {
    return arr[l];
  }

  // Find the middle
  let m = Math.floor((l + h) / 2);

  // Return max of:
  // 1. Max of left half
  const maxLeft = maxSubArraySum(arr, l, m);
  // 2. Max of right half
  const maxRight = maxSubArraySum(arr, m + 1, h);
  // 3. Max when subarray crosses midpoint
  const maxCrossing = maxCrossingSum(arr, l, m, h);

  return Math.max(maxLeft, maxRight, maxCrossing);

  // [1, -3, 4]
  // [1] [-3, 4]
  //     [-3], [4]
};

console.log(maxSubArraySum([1, -3, 4, 5]));
