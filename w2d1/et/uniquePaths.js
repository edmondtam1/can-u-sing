// https://leetcode.com/problems/unique-paths/?tab=Description

// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// 1 <= m, n <= 100
// It's guaranteed that the answer will be less than or equal to 2 * 10 ^ 9.

const uniquePaths = (m, n) => {
  if (m <= 1 || n <= 1) return m * n;
  return uniquePathsHelper(m - 1, n - 1, 0, 0, {});
};

const uniquePathsHelper = (cols, rows, col, row, cache) => {
  const key = `${row}|${col}`;
  if (col === cols || row === rows) {
    cache[key] = 1;
    return cache[key];
  } else {
    const right = cache[`${row}|${col + 1}`] || uniquePathsHelper(cols, rows, col + 1, row, cache);
    const bottom = cache[`${row + 1}|${col}`] || uniquePathsHelper(cols, rows, col, row + 1, cache);
    const val = right + bottom;
    cache[key] = val;
    return val;
  }
};

console.log(
  uniquePaths(3, 2), // 3
  uniquePaths(7, 3), // 28
)