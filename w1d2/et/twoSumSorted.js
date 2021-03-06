// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/#/description

// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// Note:

//     Your returned answers (both index1 and index2) are not zero-based.
//     You may assume that each input would have exactly one solution and you may not use the same element twice.

const twoSum = (numbers, target) => {
  let start = 0;
  let end = numbers.length - 1;
  while (start < end) {
    const sum = numbers[start] + numbers[end];
    if (sum === target) {
      return [start + 1, end + 1];
    } else if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
  return [];
};

console.log(
  twoSum([2, 7, 11, 15], 9), // [1, 2]
  twoSum([], 1), // []
  twoSum([-5, 3, 5, 7], 0), // [1, 3]
);