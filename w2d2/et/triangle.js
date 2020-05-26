// https://leetcode.com/problems/triangle/description/

// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

// For example, given the following triangle

// [
//      [2],                  [2]
//     [3,4],               [3,4,5]
//    [6,5,7],
//   [4,1,8,3]
// ]

// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

// Note:

// Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

// to get the MPS at the top, we want to calculate
//   minimum of MPS for left and right of row (top + 1)
// this all goes down to the bottom of the tree
// the base case (the only MPS we know is at the bottom of the tree)

// pure recursion
// const minimumTotal = triangle => {
//   return helper(triangle, 0, 0);
// };

// const helper = (triangle, row, col) => {
//   if (row === triangle.length - 1) return triangle[row][col];
//   return Math.min(helper(triangle, row + 1, col), helper(triangle, row + 1, col + 1)) + triangle[row][col];
// };

// recursion with memoisation
// const minimumTotal = triangle => {
//   return helper(triangle, 0, 0, {});
// };

// const helper = (triangle, row, col, cache) => {
//   if (row === triangle.length - 1) {
//     cache[[row, col]] = triangle[row][col];
//     return cache[[row, col]];
//   }

//   if (!cache[[row, col]]) {
//     cache[[row, col]] = Math.min(helper(triangle, row + 1, col, cache), helper(triangle, row + 1, col + 1, cache)) + triangle[row][col];
//   }

//   return cache[[row, col]];
// };

// -------------- iteration --------------
// go from the bottom and store triangle[row][col] info
// then for the above row, iterate through and store the min + triangle[row][col]
// return value at triangle[0][0]

// iteration with new cache
// can modify in place via tabulation
const minimumTotal = triangle => {
  let cache = {};
  let last = triangle.length - 1;
  for (let col = 0; col < triangle[last].length; col++) {
    cache[[last, col]] = triangle[last][col];
  }
  for (let row = last - 1; row >= 0; row--) {
    for (let col = 0; col < triangle[row].length; col++) {
      if (!cache[[row, col]]) {
        cache[[row, col]] = triangle[row][col] +
          Math.min(
            cache[[row + 1, col]],
            cache[[row + 1, col + 1]]
          );
      }
    }
  }
  return cache[[0, 0]];
};

console.log(
  minimumTotal(
    [
      [2],
      [3, 4],
      [6, 5, 7],
      [4, 1, 8, 3]
    ]
  ), // 11
);