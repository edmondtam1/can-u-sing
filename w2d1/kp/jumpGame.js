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
1. initialize memo to {}
2. at each index set memo[index] to true if the value allows a jump to the last index
3. define a helper function jumpHelper that can determine if a position is a good index
*/

var canJump = function(nums) {
  let memo = {};
  memo[nums.length - 1] = true;
  return jumpHelper(nums, 0, memo);
}

function jumpHelper(nums, curr, memo) {
  if (memo[curr]) return !!memo[curr];

  let maxJump = Math.min(curr + nums[curr], nums.length - 1);
  for (let next = curr + 1; next <= maxJump; next++) {
    if (jumpHelper(nums, next, memo)) {
      memo[curr] = true;
      return true;
    }
  }

  memo[curr] = false;
  return memo[curr];
}


console.log(canJump([2,3,1,1,4]) === true)
console.log(canJump([3,2,1,0,4]) === false)
