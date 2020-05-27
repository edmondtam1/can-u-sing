/**
 * Base
 * - m-1 === 0 return n-1
 * - n-1 === 0 return m-1
 *
 * Recursive
 * - add the greater of m-1 or n-1
 */

/**
 * No Memoization
 */
const minPathSum = grid => {
  const rows = grid.length - 1;
  const columns = grid[0].length - 1;

  const helper = (grid, row, col) => {
    // Base case: at the bottom right cell
    if (row === rows && col === columns) {
      return grid[rows][columns];
      // At the rightmost column, we can only go down
    } else if (col === columns) {
      return grid[row][col] + helper(grid, row + 1, col);
    } // At the bottom row, we can only go right
    else if (row === rows) {
      return grid[row][col] + helper(grid, row, col + 1);
    } else {
      return (
        grid[row][col] +
        Math.min(helper(grid, row + 1, col), helper(grid, row, col + 1))
      );
    }
  };
  return helper(grid, 0, 0);
};

/**
 * With Memoization
 */
const minPathSumMemo = grid => {
  const rows = grid.length - 1;
  const columns = grid[0].length - 1;

  const helper = (grid, row, col, memo = {}) => {
    // Base case: at the bottom right cell
    if (row === rows && col === columns) {
      return grid[rows][columns];
      // At the rightmost column, we can only go down
    } else if (col === columns) {
      return grid[row][col] + helper(grid, row + 1, col);
    } // At the bottom row, we can only go right
    else if (row === rows) {
      return grid[row][col] + helper(grid, row, col + 1);
    } else {
      if (!memo[[row, col]]) {
        memo[[row, col]] =
          grid[row][col] +
          Math.min(helper(grid, row + 1, col), helper(grid, row, col + 1));
      }
      return memo[[row, col]];
    }
  };
  return helper(grid, 0, 0);
};

console.log(
  minPathSum([
    [1, 2, 5],
    [3, 2, 1],
  ])
);

// console.log(
//   minPathSumMemo([
//     [1, 2],
//     [3, 4],
//   ])
// );

// console.log(
//   minPathSum([
//     [1, 3, 1],
//     [1, 5, 1],
//     [4, 2, 1],
//   ])
// );
