/*
PROBLEM:
Given an array nums of n integers, are there elements a, b, c in nums such that
a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

INPUT: array of nums of n integers
OUTPUT: Array of unique triplets

RULE:
Solution must not contain duplicate triplets

TEST CASES:
threeSum([-1, 0, 1, 2, -1, -4]) => [[-1, 0, 1], [-1, -1, 2]]

ALGORITHM:
1. sort the array in ascending order

2. Run an outer loop from the index 0 to n - 3
  a. initialize TARGET variable to result of 0 - array[i]
  b. initialize variable j to i + 1
  c. initialize variable k to the last index in the array
  d. WHILE j < k
    i. if array[j] + array[k] === TARGET push array[i, j, k] to result and break
      ELSE IF array[j] + array[k] > TARGET decrement k
      ELSE IF array[j] + array[k] < TARGET increment j
3. RETURN result
*/

var threeSum = function(nums) {
  const result = [];
  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i <= sorted.length - 3; i+=1) {
    let j = i + 1;
    let k = sorted.length - 1
    let target = 0 - sorted[i];
    
    while (j < k) {
      if (sorted[j] + sorted[k] === target) {
        result.push([sorted[i], sorted[j], sorted[k]]);
        break;
      } else if (sorted[j] + sorted[k] > target) {
          k -= 1;
      } else {
        j += 1;
      }
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
