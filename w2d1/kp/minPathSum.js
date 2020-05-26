/*
------------PROBLEM--------------
Given a m x n grid filled with non-negative numbers, find a path from top left
to bottom right which minimizes the sum of all numbers along its path.

INPUT: array of arrays
OUTPUT: integer representing smallest sum

RULES: can only move either down or right at any point in time

------------EXAMPLES---------------
let test1 = [[1,3,1],[1,5,1],[4,2,1]];
console.log(minPathSum(test1) === 7)

-----------DATA STRUCTURES----------
use hash to store overlapping solutions

-----------ALGORITHM-----------------
1. initialize empty arr that will keep track of minimum cost to each square
2. the cost of the top left most square is the value itself
3. fill in the minimum cost of all squares in the first row which is just the cost of the current square plus the left square
4. fill in the minimum cost of all squares in the first column which is just the cost of the current square plus the top square
5. start filling the remaining squares with the minimum cost to the path. Either current + top or current + left
6. return last element of last row

                   [  1     3     1  ]
                   [  1     5     1  ]
                   [  4     2     1  ]
*/

function minPathSum(grid) {
  //initialize empty arr that will keep track of minimum cost to each square
  let minCostGrid = [];
  let row = 1;
  let column = 1;

  //add as many rows to minCostGrid as there are in grid;
  grid.forEach(row => minCostGrid.push([]));

  //the cost of the top left most square is the value itself
  minCostGrid[0][0] = grid[0][0];

  //fill in the minimum cost of all squares in the first row which is just the cost of the current square plus the left square
  for (column; column < grid[0].length; column++) {
    minCostGrid[0][column] = grid[0][column] + minCostGrid[0][column-1];
  }

  //fill in the minimum cost of all squares in the first column which is just the cost of the current square plus the top square
  for (row; row < grid.length; row++) {
    minCostGrid[row][0] = grid[row][0] + minCostGrid[row-1][0];
  }

  //start filling the remaining squares with the minimum cost to the path. Either current + top or current + left
  row = 1;
  column = 1;

  while (row < grid.length) {
    while(column < grid[row].length) {
      if (minCostGrid[row][column-1] < minCostGrid[row-1][column]) {
        minCostGrid[row][column] = grid[row][column] + minCostGrid[row][column-1];
      } else {
        minCostGrid[row][column] = grid[row][column] + minCostGrid[row-1][column];
      }

      column++;
    }

    column = 1;
    row++;
  }

  return minCostGrid[minCostGrid.length-1][minCostGrid[0].length-1];
}

let test1 = [[1,3,1],[1,5,1],[4,2,1]];
console.log(minPathSum(test1) === 7);
