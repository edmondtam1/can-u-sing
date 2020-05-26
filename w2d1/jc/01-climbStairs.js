/** TOP DOWN **/
const climbStairs = n => {
  const cache = {};

  const helper = n => {
    if (n <= 2) return n;

    firstResult = cache[n - 1] || helper(n - 1);
    secondResult = cache[n - 2] || helper(n - 2);

    cache[n] = firstResult + secondResult;

    return cache[n];
  };
  return helper(n);
};
console.log(climbStairs(5));

/** BOTTOM UP **/
const climbStairsBU = n => {
  if (n === 1) return 1;

  const dp = {};
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
console.log(climbStairsBU(5));
