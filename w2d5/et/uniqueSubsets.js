// https://leetcode.com/problems/subsets-ii/#/description

// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// can either build up iteratively from previous answer
// or build up recursively 

const subsetsWithDup = nums => {
  const result = [];
  helper(nums, result, [], 0, {});
  return result;
};

const helper = (nums, result, candidate, index, memo) => {
  const key = [...candidate].sort((a, b) => b - a).join('|');
  if (!memo[key]) {
    const val = [...candidate];
    memo[key] = val;
    result.push(val);
  }

  for (let i = index; i < nums.length; i++) {
    candidate.push(nums[i]);
    helper(nums, result, candidate, i + 1, memo);
    candidate.pop();
  }
};

console.log(
  subsetsWithDup([1, 1, 2]),
  subsetsWithDup([1, 2, 2]),
)