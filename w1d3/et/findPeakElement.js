// https://leetcode.com/problems/find-peak-element/#/description

// A peak element is an element that is greater than its neighbors.

// Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

// You may imagine that nums[-1] = nums[n] = -∞.

// naive
// const findPeakElement = nums => {
//   for (let i = 1; i < nums.length - 1; i++) {
//     if (nums[i - 1] < nums[i] && nums[i + 1] < nums[i]) return i;
//   }
//   return -1;
// };

// algo
// need a method to choose whether to go left or right
// 

// binary search
const isPeak = (nums, i) => {
  if (i === 0) {
    return nums[i + 1] < nums[i];
  } else if (i === nums.length - 1) {
    return nums[i - 1] < nums[i];
  } else {
    return nums[i - 1] < nums[i] && nums[i + 1] < nums[i];
  }
};

const findPeakElement = nums => {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return 0;
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (isPeak(nums, mid)) {
      return mid;
    } else if (nums[mid - 1] > nums[mid]) {
      right = mid;
    } else {
      left = mid;
    }
  }
  if (isPeak(nums, left)) {
    return left;
  } else if (isPeak(nums, right)) {
    return right;
  } else {
    return -1;
  }
};


console.log(
  findPeakElement([1]), // 0
  findPeakElement([1, 2, 2, 1]), // -1 --> this is not even a valid test
  findPeakElement([1, 2, 1, 1]), // 1 --> this is not even a valid test
  findPeakElement([1, 0, 0, 0]), // 0 --> this is not even a valid test
  findPeakElement([0, 0, 0, 0]), // -1 --> this is not even a valid test
  findPeakElement([0, 0, 0, 0]), // -1 --> this is not even a valid test
  findPeakElement([5, 4, 0, 5]), // 0 or 3
  findPeakElement([5, 4, 0, 2, 4, 5]), // 0 or 5
  findPeakElement([1, 2, 3, 4, 5, 6]), // 5
  findPeakElement([6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6]), // 0 or 10

  findPeakElement([1, 2, 3, 1]), // 2
  findPeakElement([1, 2, 1, 3, 5, 6, 4]), // 1 or 5
)