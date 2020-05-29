// https://leetcode.com/problems/subsets/#/description

// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example input: [1, 2, 3]
// output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

// array lengths of 0 to i
// naive:
// backtracking fn:
// base case: push candidate to results if not in results array
// loop through from 0 to i (index)
// for each index add nums[index] to a candidate array
// call backtrack

// optimised
// backtrack(nums, candidate, results, index)
// base case: push candidate to results (no checks here)
// loop through from index to nums.length (index)
//   call backtrack(index + 1)

const subsets = nums => {
  const results = [];
  backtrack(nums, [], results, 0);
  return results;
};

const backtrack = (nums, candidate, results, index) => {
  results.push([...candidate]);

  for (let i = index; i < nums.length; i++) {
    candidate.push(nums[i]);
    backtrack(nums, candidate, results, i + 1);
    candidate.pop();
  }
};

console.log(subsets([1, 2, 3]));