/**
 * Given a triangle, find the minimum path sum from top to bottom.
 * Each step you may move to adjacent numbers on the row below.
 * Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
 *
 * Input: Array of arrays (triangle)
 * Output: Integer (min path sum)
 */
/*
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]

[
   [2],
  [3,4],
 [3,4,4],
]



Base: if r === 0, return triangle[r][0]
Recursive: return triangle[r][c] + Min(triangle[r-1][c-1], triangle[r-1][c])

*/

// const minimumTotal = triangle => {
//   const helper = (triangle, r) => {
//     if (r === 0) return triangle[0][0];

//   };
//   return helper(triangle, triangle.length - 1);
// };

/**
 * Bottom up
 */
const minimumTotal = triangle => {
  const rows = triangle.length - 1;
  const memo = {};

  // get minimum path sum of bottom nodes, which is just the node value itself
  for (let col = 0; col < triangle[rows].length; col++) {
    memo[[rows, col]] = triangle[rows][col];
  }

  // traverse from 2nd to last row, iterating over each element
  for (let row = rows - 1; row >= 0; row--) {
    for (let col = 0; col < triangle[row].length; col++) {
      // get min sum from here to end (here + Min(nextRow[col], nextRow[col+1]))
      const nextRowVal = memo[[row + 1, col]];
      const nextRowAdjVal = memo[[row + 1, col + 1]];

      memo[[row, col]] =
        triangle[row][col] + Math.min(nextRowVal, nextRowAdjVal);
    }
  }
  return memo[[0, 0]];
};

// console.log(minimumTotal([[2], [3, 4]]));
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
