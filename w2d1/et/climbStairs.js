// https://leetcode.com/problems/climbing-stairs/

// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// const climbStairs = n => {
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//   return climbStairs(n - 1) + climbStairs(n - 2);
// };

const climbStairs1 = n => {
  return climbStairsHelper(n, {});
};

const climbStairsHelper = (n, cache) => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let left = cache[n - 1] || climbStairsHelper(n - 1, cache);
  let right = cache[n - 2] || climbStairsHelper(n - 2, cache);

  return left + right;
};

const climbStairs = (n) => {
  if (n <= 3) return n;
  const cache = { 1: 1, 2: 2, 3: 3 };
  for (let i = 4; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
  return cache[n];
};

console.log(
  climbStairs(2), // 2
  climbStairs(3), // 3
  climbStairs(4), // 5
  climbStairs(5), // 8
  climbStairs(6), // 13
  climbStairs(45), // 1836311903
);