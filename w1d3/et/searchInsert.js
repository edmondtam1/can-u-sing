// https://leetcode.com/problems/search-insert-position/description/

// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// algo
// set a low and high
// while low + 1 < high
//   set median (low + Math.floor(high - low / 2))
//   if nums[median] is target, return median
//   if nums[median] < target, set low to median
//   if nums[median] > target, set high to median

// outside while loop, this means nums[median] was never target
// three situations:
//   - target is nums[low]
//   - target is nums[high]
//   - target is not in array, which means we need to find index of where to insert it
//     - if target > nums[high] then return high + 1
//     - if target < nums[low] then return low
//     - if nums[low] < target < nums[high] then return low + 1

// [1, 3, 5, 6], 7
// low:  0  1  2
// high: 3  3  3
// med:  1  2  break

// binary search
// const searchInsert = (nums, target) => {
//   if (!nums.length) return 0;
//   let low = 0;
//   let high = nums.length - 1;

//   while (low + 1 < high) {

//     let median = Math.floor(low + (high - low) / 2);

//     if (nums[median] === target) {
//       return median;
//     } else if (nums[median] > target) {
//       high = median;
//     } else {
//       low = median;
//     }
//   }

//   if (nums[low] === target) {
//     return low;
//   } else if (nums[high] === target) {
//     return high;
//   } else {
//     if (nums[high] < target) return high + 1;
//     return nums[low] > target ? low : low + 1;
//   }
// };

// [1, 3, 5, 6, 9, 10, 12], 3
//  l        m          h
//  l  m  h

// [1, 3, 5, 6, 9, 10, 12], 4
//  l        m          h
//  l  m  h
//       l/h => result = 2

//  [1, 3, 5, 6, 9, 10, 12], 2
//   l        m          h
//   l  m  h
// l/m/h => result = 0 + 1
// 

// binary search - inspired from submissions
const searchInsert = (nums, target) => {
  if (!nums.length) return 0;
  let low = 0;
  let high = nums.length - 1;
  let result = -1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    console.log(mid);
    let midVal = nums[mid];

    if (midVal === target) {
      return mid;
    } else if (midVal > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
      result = mid;
    }
  }
  return result + 1;
};

console.log(
  // searchInsert([1, 3, 5, 6], 5), // 2
  // searchInsert([1, 3, 5, 6], 2), // 1
  // searchInsert([1, 3, 5, 6], 7), // 4
  // searchInsert([1, 3, 5, 6], 0), // 0
  searchInsert([1, 3, 5, 6, 9, 10, 12], 2), // 1
);