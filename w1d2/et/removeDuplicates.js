// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

const removeDuplicates = nums => {
  if (nums.length === 0) return 0;
  let anchor = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[anchor] === nums[i]) continue;
    anchor++;
    nums[anchor] = nums[i];
  }

  return anchor + 1;
};

let arr1 = [1, 1, 2];
let arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let arr3 = [];

console.log(
  removeDuplicates(arr1), // 2
  removeDuplicates(arr2), // 5
  removeDuplicates(arr3), // 0
);

console.log(
  arr1, // [1, 2, *]
  arr2, // [0, 1, 2, 3, 4, *]
  arr3, // []
);