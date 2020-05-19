// https://leetcode.com/problems/3sum/

// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// brute force - three loops O(N^3) time and O(N) space
// const threeSum = arr => {
//   const result = [];
//   for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         if (arr[i] + arr[j] + arr[k] === 0) {
//           const temp = [arr[i], arr[j], arr[k]];
//           let push = true;
//           temp.sort((a, b) => a - b);
//           for (let l = 0; l < result.length; l++) {
//             if (result[l][0] === temp[0] && result[l][1] === temp[1] && result[l][2] === temp[2]) {
//               push = false;
//               break;
//             }
//           }
//           if (push) result.push(temp);
//         };
//       }
//     }
//   }
//   return result;
// };

// 3 pointers, sorted- O(N^2) time and O(N) space using outer loop and inner loop with 2 pointers
// const threeSum = arr => {
//   const result = [];
//   arr = arr.sort((a, b) => a - b);

//   for (let i = 0; i < arr.length - 2; i++) {
//     let start = i + 1;
//     let end = arr.length - 1;
//     while (start < end) {
//       const val = arr[i];
//       if (-val > arr[start] + arr[end]) {
//         start++;
//       } else if (-val < arr[start] + arr[end]) {
//         end--;
//       } else {
//         const temp = [arr[i], arr[start], arr[end]];
//         let push = true;
//         for (let l = 0; l < result.length; l++) {
//           if (result[l][0] === temp[0] && result[l][1] === temp[1] && result[l][2] === temp[2]) {
//             push = false;
//             break;
//           }
//         }
//         if (push) result.push(temp);
//         start++;
//       }
//     }
//   }
//   return result;
// };

// Memoized version without sorting - O(N^2) time and O(N) space
const threeSum = arr => {
  const result = [];
  const complements = {};

  for (let i = 0; i < arr.length; i++) {
    complements[arr[i]] = i;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      if (complements[-sum] && complements[-sum] !== i && complements[-sum] !== j) {
        const temp = [-sum, arr[i], arr[j]];
        let push = true;
        temp.sort((a, b) => a - b);
        for (let l = 0; l < result.length; l++) {
          if (result[l][0] === temp[0] && result[l][1] === temp[1] && result[l][2] === temp[2]) {
            push = false;
            break;
          }
        }
        if (push) result.push(temp);
      }
    }
  }

  return result;
};

console.log(
  threeSum([-1, 0, 1, 2, -1, -4]),
  //[
  //   [-1, 0, 1],
  //   [-1, -1, 2]
  // ]
  threeSum([-5, 3, -2, 4, -2, 7]),
  //[
  //  [-5, -2, 7]
  //  [-2, 4, -2]
  //]
);