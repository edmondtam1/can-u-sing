// https://leetcode.com/problems/coin-change/#/description

// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Note:
// You may assume that you have an infinite number of each kind of coin.

// naive
// keep a tally of # of all coins
// add 1 coin to largest coin, until it goes above amount
// reduce largest coin by 1, and add 1 of the second largest coin
// if sum > amount, then reduce 1 of second largest coin, add 1 of third largest coin etc
// if sum < amount, then add 1 of third largest coin until last coin
// if not found, then reduce largest coin by 1 more, and add 1 of second largest coin
// if sum > amount, reduce 1 of last added coin and add next smaller coin
// if sum < amount, add 1 of last added coin
// iterate until smallest coin

// recursion
// want a function that takes an amount and looks for possible solutions from set of coins
// after iterating from the set of coins, look for something smaller until 0
// how does this guarantee you're getting the lowest amount?

const coinChange = (coins, amount) => {
  if (amount === 0) return 0;
  return coinHelper(coins, amount, []);
};

const coinHelper = (coins, amount, memo) => {
  console.log(memo, amount);
  if (amount === 0) return 0;
  if (amount < 0) return -1;
  if (memo[amount]) { // this is a short circuit in case we've calculated it before
    return memo[amount];
  }

  let temp = Infinity;

  for (let i = 0; i < coins.length; i++) {
    const count = coinHelper(coins, amount - coins[i], memo);
    if (count === -1) continue;
    temp = Math.min(temp, 1 + count);
  }
  memo[amount] = (temp === Infinity) ? -1 : temp;
  console.log(memo[amount]);

  return memo[amount]; // this is the only value returned to the main function coinChange, otherwise it's the return value for coinHelper(coins, amount, memo)
};

console.log(
  coinChange([2, 5, 3], 11), // 3
  // coinChange([1, 2, 5], 13), // 4
  // coinChange([1, 2, 5], 10), // 2
  // coinChange([1, 2, 5], 50), // 10
  // coinChange([1, 2, 5], 8), // 3
  // coinChange([2], 3), // -1
  // coinChange([3], 3), // 1
  // coinChange([1, 2147483647], 2), // 2
)