// https://leetcode.com/problems/minimum-path-sum/?tab=Description

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// algo
// top-down approach using memoisation and helper function
// begin with base case of 1x1 grid, which returns its own value
// check if value of row x col grid exists in cache
// if not, each "min sum" is the min of the grid of (row - 1, col) and (row, col - 1)

// bottom-up
// handle edge cases (empty grid, grid of 1 array)
// iterate from row = grid.length - 1 to 0
// inner loop of col = grid[0].length - 1 to 0
// handle base case of row = grid.length - 1 && col = grid[0].length
//   here, add grid[row][col] to cache and return value
// create variable key = `${row}|${col}`
// in normal case, cache[key] = Math.min(cache[`${row - 1}|${col}`], cache[`${row}|${col - 1}`]) + grid[row][col];
// return cache[key];

const minPathSum = grid => {
  if (!grid) return grid;
  return minPathHelper(grid, 0, 0, {});
};

const minPathHelper = (grid, row, col, cache) => {
  const key = `${row}|${col}`;

  if (row === grid.length - 1 && col === grid[0].length - 1) {
    cache[key] = grid[row][col];
    return grid[row][col];
  } else if (row === grid.length - 1) {
    const val = minPathHelper(grid, row, col + 1, cache);
    cache[`${row}|${col + 1}`] = val;
    return grid[row][col] + val;
  } else if (col === grid[0].length - 1) {
    const val = minPathHelper(grid, row + 1, col, cache);
    cache[`${row + 1}|${col}`] = val;
    return grid[row][col] + val;
  }

  let nextRow = cache[`${row + 1}|${col}`] || minPathHelper(grid, row + 1, col, cache);
  let nextCol = cache[`${row}|${col + 1}`] || minPathHelper(grid, row, col + 1, cache);

  cache[key] = Math.min(nextRow, nextCol) + grid[row][col];
  return cache[key];
};

const grid1 = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];

const grid2 = [
  [1, 2, 3]
]

console.log(
  minPathSum(grid1), // 7
  minPathSum(grid2), // 6
);