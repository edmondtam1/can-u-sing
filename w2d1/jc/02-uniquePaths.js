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
 * - Start from the end
 *   - If there's one move left, return 1
 * - Instantiate an object with the keys and values we already know
 *   - dp[[1,n]] = 1;
 *   - dp[[m, 1]] = 1;
 * - Iterate from end to beginning, at each iteration, iterating over possible moves
 * - Return dp[[m,n]]
 */
const uniquePathsBU = (m, n) => {
  const dp = {};

  while (m >= 0) {
    while (n >= 0) {}
  }
};
console.log(uniquePathsBU(3, 2));
