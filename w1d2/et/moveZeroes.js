// https://leetcode.com/problems/move-zeroes/description/

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const moveZeroes = nums => {

};

// Algo
// Reader writer type of anchor runner pointers

console.log(
  moveZeroes([0, 1, 0, 3, 12]), // [1,3,12,0,0]
  moveZeroes([]), // []
  moveZeroes([1, 3, 5, 0, 3, 5]), // [1, 3, 5, 3, 5, 0]
)