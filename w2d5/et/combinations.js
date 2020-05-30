// https://leetcode.com/problems/combinations/#/description

// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// 4, 2

// base case: candidate.length === k
// 

const combine = (n, k) => {
  const result = [];

  const helper = (n, k, candidate) => {
    if (candidate.length === k) result.push([...candidate]);

    for (let i = n; i >= 1; i--) {
      candidate.push(i);
      helper(i - 1, k, candidate);
      candidate.pop();
    }
  };

  helper(n, k, []);
  return result;
};