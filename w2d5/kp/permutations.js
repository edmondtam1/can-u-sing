// Given a collection of numbers that might contain duplicates, return all possible unique permutations.
//
// Example:
//
// Input: [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]

/*
[0, 1, 2]
[1, 2, 0]
[2, 0, 1]
*/

var permuation = function(nums) {
  let result = [];
  helper(nums, result, []);

  return result;
}

function helper(nums, result, candidate) {
  if (nums.length === candidate.length) {
    if (!result.filter(sub => sub.join('') === candidate.join('')) {
      result.push(candidate);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    candidate.push(num[i]);
    helper(nums, result, candidate, );


  }
}
