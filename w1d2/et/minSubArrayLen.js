// https://leetcode.com/problems/minimum-size-subarray-sum/#/description

// Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

// algo
// [2,3,1,2,4,3], 7
//  [     ]       min=4
//    [   ]       no
//    [     ]     min=4
//      [   ]     min=3
//        [ ]     no
//        [   ]   min=3
//          [ ]   min=2

// naive solution
// const minSubArrayLen = (s, nums) => {
//   let start = 0;
//   let result = Infinity;
//   while (start < nums.length) {
//     let sum = 0;
//     for (let runner = start; runner < nums.length; runner++) {
//       sum += nums[runner];
//       if (sum >= s) {
//         let lengthOfSubArray = runner - start + 1;
//         if (lengthOfSubArray < result) result = lengthOfSubArray;
//         break;
//       }
//     }
//     start++;
//   }
//   return result === Infinity ? 0 : result;
// };

// 2 pointers
const minSubArrayLen = (s, nums) => {
  let start = 0;
  let sum = 0;
  let result = Infinity;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= s) {
      let end = i + 1;

      result = Math.min(result, end - start);
      sum -= nums[start];
      start++;
    }
  }
  return result === Infinity ? 0 : result;
};

console.log(
  minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), // 2
  minSubArrayLen(0, []), // 0
  minSubArrayLen(1, [1, 2, 3]), // 1
  minSubArrayLen(3, [1, 1, 1, 6, 3, 2, 9, 1, 1, 1]), // 1
);