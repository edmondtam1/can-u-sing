/*
---------------PROBLEM------------------
Given an array of non-negative integers, you are initially positioned at the first
index of the array. Each element in the array represents your maximum jump length
at that position. Determine if you are able to reach the last index.

INPUT: array of positive integers
OUTPUT: boolean

RULES:
1 <= nums.length <= 3 * 10^4
0 <= nums[i][j] <= 10^5

----------------EXAMPLES-------------------
console.log(canJump([2,3,1,1,4]) === true)
console.log(canJump([3,2,1,0,4]) === false)

--------------ALGORITHM----------------

*/

var canJump = function(nums) {
  if (nums.length <= 1) return true;


}


console.log(canJump([2,3,1,1,4]) === true)
console.log(canJump([3,2,1,0,4]) === false)
