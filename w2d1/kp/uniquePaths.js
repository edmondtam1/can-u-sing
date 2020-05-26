/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the
diagram below).

The robot can only move either down or right at any point in time. The robot is
trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

*/

var uniquePaths = function(m, n) {
  let grid = [];

  for (let i = 0; i < n; i++) {
    let row = new Array(m)
    row[0] = 1;
    grid.push(row);
  }

  for (let i = 1; i < m; i++) {
    grid[0][i] = 1;
  }

  let row = 1;
  let column = 1;

  while (row < grid.length) {
    while(column < grid[row].length) {
      grid[row][column] = grid[row-1][column] + grid[row][column-1];
      column++;
    }

    column = 1;
    row++;
  }

  return grid[n-1][m-1]
}

console.log(uniquePaths(5, 4));
