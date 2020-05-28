/*
-----------UNDERSTANDING THE PROBLEM-------------
Given a triangle, find the minimum path sum from top to bottom. Each step you
may move to adjacent numbers on the row below.

INPUT: array of arrays
OUTPUT: integer

----------EXAMPLES---------------------
console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]) === 11)

------DATA STRUCTURES---------------
use an object to cache different path sums helping reduce time complexity

-------ALGORITHM Time O(2^N) Space O(N)--------------------
1. start at [0,0]
2. at each step, return the minimum of the sum to the triangle[row+1][column] and triangle[row+1][column+1]

-------ALGORITHM Time O(N^2) Space O(N)--------------------
Use memoization to cache the results

-------ALGORITHM Time O(N) Space O(1)--------------------
1. start at the 2nd to last row and iterate to the top
2. For each element in row, replace with min(element at bottom left, element at bottom right)
3. Return element at [0][0]
*/

// var minimumTotalBrute = function(triangle) {
//
//   return totalHelper(triangle, 0, 0);
// }
//
// var totalHelper = function(triangle, row, column) {
//   let currentStep = triangle[row][column];
//
//   if (row === triangle.length - 1) return currentStep;
//
//   let leftSum = totalHelper(triangle, row + 1, column) + currentStep;
//   let rightSum = totalHelper(triangle, row + 1, column + 1) + currentStep;
//   console.log(row, column, Math.min(leftSum, rightSum));
//   return Math.min(leftSum, rightSum);
// }

// var minimumTotalMemo = function(triangle) {
//
//   return totalHelper(triangle, 0, 0);
// }
//
// var totalHelper = function(triangle, row, column, memo={}) {
//   let currentStep = triangle[row][column];
//
//   if (row === triangle.length - 1) {
//     memo[[row, column]] = currentStep;
//     return currentStep;
//   }
//
//   if (memo[[row, column]]) {
//     return memo[[row, column]];
//   }
//
//   let leftSum = totalHelper(triangle, row + 1, column, memo) + currentStep;
//   let rightSum = totalHelper(triangle, row + 1, column + 1, memo) + currentStep;
//   memo[[row, column]] = Math.min(leftSum, rightSum);
//
//   return memo[[row, column]];
// }

        [2]         [ ]
       [3,4]       [ , ]
      [6,5,7]     [ , , ]
     [4,1,8,3]   [ , , , ]


var minimumTotal = function(triangle) {
  for (let row = triangle.length - 2; row >= 0; row -= 1) {
    triangle[row].forEach((step, col) => {
      let leftPathSum = triangle[row+1][col] + step;
      let rightPathSum = triangle[row+1][col+1] + step;

      triangle[row][col] = Math.min(leftPathSum, rightPathSum);
    });
  }

  return triangle[0][0];
}

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]) === 11)
