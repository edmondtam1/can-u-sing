// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// algo
// implement a binary search with an iterator after search => need to implement a good break condition
// eg, in array [1, 1, 1, 2, 3], target = 1, cannot guarantee we'll land on index 0 where we can simply increment
//   if we land on index 1, we have to increment and decrement
//   one approach would use two pointers that move left and right from the number we land on
//   in the worst case, this is O(A + logB), where A is number of correct answers and B is length of array 
//     (eg [1, 1, 1, 1, 1], target = 1)

// that means we're looking for the first and last position independently
// we could look for the largest value before the target value, and the smallest value after the target value
// what we can do is to keep a "before" and "after" object that contains:
//   {'before': {-Infinity: -1}, 'after': {Infinity: -1}}
//   if nums[median] === target
//    

// algo v2
// implement two binary searches, one for the start index and one for the end index

const getStart = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target && arr[mid - 1] !== target) {
      return mid;
    } else if (arr[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

const getEnd = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target && arr[mid + 1] !== target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

const searchRange = (arr, target) => {
  let start = getStart(arr, target);
  let end = getEnd(arr, target);

  return [start, end];
};

console.log(
  searchRange([], 1), // [-1, -1]
  searchRange([2, 2], 2), // [0, 1]
  searchRange([2, 2, 3], 3), // [2, 2]
  searchRange([1, 1, 1, 1, 1, 1, 1, 1], 1), //[0, 7]
  searchRange([5, 7, 7, 8, 10], 8), // [3, 3] ?
  searchRange([5, 7, 7, 8, 8, 10], 8), // [3, 4]
  searchRange([5, 7, 7, 8, 8, 8, 10], 8), // [3, 5]
  searchRange([5, 7, 7, 8, 8, 8, 8, 8, 8, 10], 8), // [3, 8]
  searchRange([5, 7, 7, 8, 8, 8, 8, 8, 8, 8], 8), // [3, 9]
  searchRange([5, 7, 7, 8, 8, 10], 6), // [-1, -1]
);