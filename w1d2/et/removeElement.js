// https://leetcode.com/problems/remove-element/#/description

// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

const removeElement = (nums, val) => {
  let anchor = 0;
  let runner = 0;

  for (runner; runner < nums.length; runner++) {
    if (nums[runner] === val) {
      continue;
    } else {
      nums[anchor] = nums[runner];
      anchor++;
    }
  }
  return anchor;
};

let test1 = [3, 2, 2, 3];
console.log(
  removeElement(test1, 3), // 2, 
);
console.log(test1.slice(0, 2)); //[2, 2]

let test2 = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(
  removeElement(test2, 2), //5
);
console.log(test2.slice(0, 5)); //[0, 1, 3, 0, 4]