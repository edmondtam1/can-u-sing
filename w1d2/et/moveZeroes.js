// https://leetcode.com/problems/move-zeroes/description/

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const moveZeroes = nums => {
  let anchor = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[anchor];
      nums[anchor] = nums[i];
      nums[i] = temp;
      anchor++;
    }
  }
  return anchor;
};

// Algo
// Reader writer type of anchor runner pointers

let arr1 = [0, 1, 0, 3, 12];
let arr2 = [];
let arr3 = [1, 3, 5, 0, 3, 5];
console.log(
  moveZeroes(arr1), // 3
  moveZeroes(arr2), // 0
  moveZeroes(arr3), // 5
);

console.log(
  arr1, // [1,3,12, 0, 0]
  arr2, // []
  arr3, // [1, 3, 5, 3, 5, 0]
);