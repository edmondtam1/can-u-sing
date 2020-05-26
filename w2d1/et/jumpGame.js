// https://leetcode.com/problems/jump-game/description/

// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// algo
// two pointers T: O(N), S: O(1)
// anchor runner, starting from the end
// find if idx + nums[idx] >= anchor
// if so, then anchor = idx;
// if anchor === 0 then return true, else false

// moving from left to right with cache
// base case is index === nums.length - 1
// check if cache already stores cache[idx]

// recursive
// const canJump = nums => {
//   return canJumpHelper(nums, 0, {});
// };

// const canJumpHelper = (nums, idx, cache) => {
//   if (idx === nums.length - 1) cache[nums.length - 1] = true;

//   for (let i = 1; i <= nums[idx]; i++) {
//     const newPosition = idx + i;
//     if (cache[newPosition]) return cache[newPosition];
//     cache[newPosition] = canJumpHelper(nums, newPosition, cache);
//   }

//   return !!cache[nums.length - 1];
// };

// two pointers
const canJump = nums => {
  if (nums.length === 1) return true;
  let anchor = nums.length - 1;
  let runner = nums.length - 2;
  while (runner >= 0) {
    if (nums[runner] + runner >= anchor) {
      anchor = runner;
    }
    runner--;
  }
  return anchor === 0;
};

// jump game 2
// using dynamic programming
// start at 0
// store the "min" number of 

//   0  1  1  1  2  2  3  3
// [ 3, 2, 3, 2, 1, 2, 1, 2]
//                  i

// const jump = nums => {
//   return jumpHelper(nums, 0, { 0: 0 });
// };

// const jumpHelper = (nums, idx, cache) => {
//   if (idx === nums.length - 1) return cache[idx];

//   for (let i = 1; i <= nums[idx]; i++) {
//     const newPosition = idx + i;
//     if (!cache[newPosition] || (cache[newPosition] && cache[newPosition] > cache[idx] + 1)) {
//       cache[newPosition] = cache[idx] + 1;
//     }
//   }
//   return jumpHelper(nums, idx + 1, cache);
// };

// 2 pointers T: O(N^2), S: O(1)
// const jump = nums => {
//   if (nums.length === 1) return 0;
//   let anchor = nums.length - 2;

//   while (anchor > 0) {
//     for (let i = 0; i < anchor; i++) {
//       if (nums[i] + i >= anchor) {
//         anchor = i;
//         count++;
//         break;
//       }
//     }
//   }
//   return count;
// };

// DP T: O(N^2), S: O(N)
// start with an empty array to contain the count of jumps, with jumps[nums.length - 1] = 0
// iterate from index 0 to index r and save number of steps needed to get there
//  0
// [3, 2, 5, 1, 2]
//  r

// One pointer, one jump counter and one maxJump position
// Increment pointer each iteration
// At each iteration, set a new maxJump to be the max(maxJump, nums[i] + i)
//   - This is how far we can go on the next jump, and is set to the number of steps remaining when we have finished the steps from previous max
// Once the number of steps is more than nums.length, we return it

// [3, 2, 5, 1, 2]
//  i        m
//        i     m   

const jump = nums => {
  if (nums.length <= 1) return 0;

  let maxJump = nums[0];
  let steps = nums[0];
  let jumps = 1;

  for (let i = 1; i < nums.length; i++) {
    if (steps + i > nums.length - 1) return jumps++;

    steps--;
    maxJump = Math.max(maxJump, nums[i] + i);

    if (steps === 0) {
      if (maxJump - i >= nums.length - 1) return jumps++;
      steps = maxJump - i;
      jumps++;
    }
  }
  return -1;
};

console.log(
  // canJump([2, 3, 1, 1, 4]), // true
  // canJump([3, 2, 1, 0, 4]), // false
  // canJump([1, 2, 3, 4, 0]), // true
  jump([2, 3, 1, 1, 4]), // 2
);