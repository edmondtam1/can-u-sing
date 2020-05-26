/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you
climb to the top?

Bottom-Up Approach
*/


var climbStairs = function(n) {
  if (n <= 2) return n;

  let steps = [1, 2];

  for (let i = 2; i < n; i += 1) {
    steps[i] = steps[i-1] + steps[i-2];
  }

  return steps[n-1]
}
