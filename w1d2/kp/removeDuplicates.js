/*
PROBLEM:
Given a sorted array nums, remove the duplicates in-place such that each element
appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the
input array in-place with O(1) extra memory.

INPUT: sorted array of numbers
OUTPUT: length of unique numbers

RULES:
Do not create extra space

TEST CASES:
removeDuplicates([1,1,2]) ==> 2
removeDuplicates([0,0,1,1,1,2,2,3,3,4]) ==> 5

ALGORITHM:
1. If array length === 0 RETURN 0;
2. Initialize anchor to 0;
3. Initialize runner to 0;
3. Loop through the array with stopping condition runner < array.length
  a. IF array[anchor] !== array[runner] increment anchor & write array[anchor] = array[runner]
4. return anchor + 1
*/

var removeDuplicates = function(nums) {
  let anchor = 0;
  let runner = 0;
  for (runner; runner < nums.length; runner+=1) {
      if (nums[anchor] !== nums[runner]) {
          anchor += 1
          nums[anchor] = nums[runner];
      }
  }
  return anchor+1;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
