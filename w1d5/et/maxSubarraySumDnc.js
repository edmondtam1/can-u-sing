// https://leetcode.com/problems/maximum-subarray/

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// algo
// data structure to hold "largest sum"
// [1, -3, 4, 2, 7, -3, -5] => 13
// [1, -3, 4, 2], [7, -3, -5]
// [1, -3], [4, 2], [7, -3], [-5]
// [1], [-3], [4], [2], [7], [-3], [-5]

// combine left & right
// take note of largest half (maxLeft, or maxRight) or (maxLeft that touches mid + maxRight that touches mid)

const maxSubArray = (nums, start = 0, end = nums.length - 1) => {
  // # base cases; very different for every problem
  if (start === end) return nums[0];

  let mid = Math.floor(start + (end - start) / 2);
  // recursive functions are O(log N)
  let maxLeft = maxSubArray(nums, start, mid);
  let maxRight = maxSubArray(nums, mid + 1, end);

  // iterates across entire array O(N)
  let maxCrossing = maxCrossingArray(nums, start, mid, end);

  return Math.max(
    maxLeft,
    maxRight,
    maxCrossing,
  );
};

const maxCrossingArray = (nums, start, mid, end) => {
  let left = -Infinity;
  let right = -Infinity;

  let temp = 0;
  for (let i = mid; i >= start; i--) {
    temp += nums[i];
    if (temp > left) left = temp;
  }

  temp = 0;
  for (let i = mid + 1; i <= end; i++) {
    temp += nums[i];
    if (temp > right) right = temp;
  }

  return left + right;
};

console.log(maxCrossingArray([1, -3, 4, 2, 7, -3, -5], 0, 3, 6)); // 13
console.log(maxCrossingArray([1, 5, 4, -1, -3, -3, -5], 0, 3, 6)); // 10 (returns 6 because it doesn't go through mid)
console.log(maxSubArray([1, -3, 4, 2, 7, -3, -5]));
console.log(maxSubArray([-1, -3, -4, -2, -7, -3, -5]));