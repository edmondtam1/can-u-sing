/**
 * Input: Array of integers
 * Output: Array of arrays of triplets
 *
 * Rules
 * - No duplicate triplets
 *
 * Algorithm #1 - O(N^3)
 * - 3 nested for loops
 *
 * Algorithm #2
 * - sort array
 * - fix one number, start and end pointers on remainder
 * - while start < end:
 * - if sum < 0, start++
 * - if sum > 0, end--
 * - if sum === 0, push values as subarray to result array
 * - [-1, 0, 1, 2, -1, -4]
 * - [-4, -1, -1, 0, 1, 2]
 * - -4-1+2, -4-1+2, -4+0+2, -4+1+2
 * - -1-1+2, -1+0+1
 * - -1+0+2, -1+0+1
 * - result = [[-1, -1, 2], [-1, 0, 1]]
 *
 * Algorithm #3 - O(N^2) hash map
 * - Iterate over elements starting with i=0
 * - Iterate over elements starting with j=i+1
 * - Map arr[j]:j to object
 * - Check object for -(arr[i] + arr[j])
 * - If exists, push the 3 indexes to result array
 */

const threeSum = nums => {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1;
    let end = nums.length - 1;
    if (i !== 0 && nums[i] === nums[i - 1]) continue;

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        result.push([nums[i], nums[start], nums[end]]);
        while (nums[start] === nums[start + 1]) {
          start++;
        }
        while (nums[end] === nums[end - 1]) {
          end--;
        }
        start++;
        end--;
      } else if (sum < 0) {
        start++;
      } else {
        end--;
      }
    }
  }
  return result;
};

// const threeSum = arr => {
//   const result = [];
//   const visited = {};

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       const complementInteger = -(arr[i] + arr[j]);
//       if (visited[complementInteger]) {
//         result.push([arr[i], arr[j], complementInteger]);
//         visited[complementInteger] = false;
//       } else {
//         visited[arr[j]] = true;
//       }
//     }
//   }

//   return result;
// };

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
