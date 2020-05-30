// https://leetcode.com/problems/combination-sum/

// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

//     All numbers (including target) will be positive integers.
//     The solution set must not contain duplicate combinations.

// Examples:
// input: [2, 3, 6, 7], 7
// output: [[7], [2, 2, 3]]

// input: [2, 3, 5], 8
// output: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

// algo
// initialize result array
// recursively loop through input[0] to input[last] ()

// naive approach - checks all possibilities
// const sumArray = arr => arr.reduce((sum, prev) => sum + prev, 0);

// const ascending = (a, b) => a - b;

// const combinationSum = (candidates, target) => {
//   const result = [];

//   const helper = (candidates, target, candidate) => {
//     const sum = sumArray(candidate);
//     if (sum > target) {
//       return;
//     } else if (sum === target) {
//       if (unique(candidate)) {
//         result.push([...candidate]);
//       }
//       return true;
//     }

//     for (let val of candidates) {
//       candidate.push(val);
//       helper(candidates, target, [...candidate]);
//       candidate.pop();
//     }
//   };

//   const unique = arr => {
//     return result.filter(res => {
//       return res.sort(ascending).join('|') === arr.sort(ascending).join('|');
//     }).length === 0;
//   };

//   helper(candidates, target, [], 0);
//   return result;
// };

// decrement target
const combinationSum = (candidates, target) => {
  const result = [];
  helper(candidates, result, [], target, 0);
  return result;
};

let count = 0;

const helper = (candidates, result, candidate, target, index) => {
  if (target === 0) result.push([...candidate]);
  if (target < 0) return;

  for (let i = index; i < candidates.length; i++) {
    candidate.push(candidates[i]);
    helper(candidates, result, candidate, target - candidates[i], i);
    candidate.pop();
  }
};

console.log(
  combinationSum([2, 3, 6, 7], 7), // [[7], [2, 2, 3]]
  combinationSum([2, 3, 5], 8), // [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
  combinationSum([1, 2], 4), // [[1,1,1,1],[1,1,2],[2,2]]
);