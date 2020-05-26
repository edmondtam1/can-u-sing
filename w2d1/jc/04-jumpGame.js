/**
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 */

const canJumpFromPosition = (position, nums, memo) => {
  //  If we've already evaluated whether we can reach the end from this position, return true if so
  if (memo[position]) {
    return memo[position] === true ? true : false;
  }

  // Get the furthest we can jump from our current index
  let furthestJump = Math.min(position + nums[position], nums.length - 1);

  // Check all the positions and set the memo && return true if we can make it from any position
  for (
    let nextPosition = position + 1;
    nextPosition <= furthestJump;
    nextPosition++
  ) {
    if (canJumpFromPosition(nextPosition, nums, memo)) {
      memo[position] = true;
      return true;
    }
  }

  // Otherwise, set the memo to && return false
  memo[position] = false;
  return false;
};

const canJump = nums => {
  // keys: index of nums
  // values: true if can reach last index from this index
  const memo = {};

  // we know we can reach the last index from the last index ^_^
  memo[nums.length - 1] = true;

  // can we get there from index 0???
  return canJumpFromPosition(0, nums, memo);
};

// console.log(canJump([2, 3, 1, 1, 4])); // true
// console.log(canJump([3, 2, 1, 0, 4])); // false

/**
 * Bottom Up Implementation
 */
const canJumpBU = nums => {
  // Keep track of indexes that can reach the last index
  // keys: index of nums
  // values: true if can reach last index from this index
  const memo = {};

  // we know we can reach the last index from the last index
  memo[nums.length - 1] = true;

  // Start from one before the last index and iterate to the beginning
  for (let i = nums.length - 2; i >= 0; i--) {
    // Get the furthest index from the current index you can go
    let furthestJump = Math.min(i + nums[i], nums.length - 1);

    // Iterate through all the possible jumps you can make from the current index
    for (let j = i + 1; j <= furthestJump; j++) {
      if (memo[j] === true) {
        memo[i] = true;
        break;
      }
    }
  }
  return memo[0] === true;
};

console.log(canJumpBU([2, 3, 1, 1, 4])); // true
console.log(canJumpBU([3, 2, 1, 0, 4])); // false
