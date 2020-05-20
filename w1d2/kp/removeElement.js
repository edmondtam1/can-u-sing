/*
PROBLEM:
Given an array nums and a value val, remove all instances of that value in-place
and return the new length.

INPUT: array of integers as nums and integer as val
OUTPUT: integer representing length of array

TEST CASES:
removeElement([3,2,2,3], 3) ==> 2
removeElement([0,1,2,2,3,0,4,2], 2) ==> 5

ALGORITHM:
1. Initialize read to 0
2. Initialize write to 0
3. WHILE read < array.length
  i. if array[read] !== array[write], array[write] = array[read]
     else if array[read] === val, increment read
     esle increment read & write
*/

var removeElement = function(nums, val) {
    let runner = 0;
    let anchor = 0;

    while (runner < nums.length) {
      if (nums[runner] !== nums[anchor]) {
        nums[anchor] = nums[runner];
      } else if (nums[runner] === val) {
        runner += 1;
      } else {
        runner += 1;
        anchor += 1;
      }
    }

    return anchor;
};

console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));
