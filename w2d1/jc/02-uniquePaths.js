/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time. 
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
How many possible unique paths are there?
*/

/**
 * Top Down
 * - Instantiate a cache
 * - Instantiate a helper fn
 *   - return the base case
 *   - add the recursive result to the cache
 *   - return the cache
 * - Call and return the helper fn
 */
const uniquePathsTD = (m, n) => {
  // This will hold the number of paths from each [m,n]
  const cache = {};

  const helper = (m, n) => {
    // if there's only 1 step left
    if (m === 1 || n === 1) return 1;

    // If we already have a num of unique paths from the coordinates, return it
    if (cache[[m, n]]) return cache[[m, n]];

    // Store a num of unique paths from the coordinates
    cache[[m, n]] = helper(m - 1, n) + helper(m, n - 1);

    return cache[[m, n]];
  };
  return helper(m, n);
};
console.log(uniquePathsTD(3, 2));

/**
 * Bottom Up
 * - Instantiate an object with the keys and values we already know
 *   - dp[[1,0]] = 1;
 *   - dp[[0, 1]] = 1;
 * - Iterate beginning to end, at each iteration, iterating over possible moves
 * - Return dp[[m,n]]
 */
const uniquePathsBU = (m, n) => {
  const dp = {};
  dp[[0, 0]] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!dp[[i, j]]) {
        dp[[i, j]] = dp[[i - 1, j]] + dp[[i, j - 1]];
      }
    }
  }
  console.log(dp);
  return dp[[m, n]];
};
console.log(uniquePathsBU(3, 2));
