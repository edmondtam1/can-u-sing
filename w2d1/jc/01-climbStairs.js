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
