/*
You are given coins of different denominations and a total amount of money amount.
Write a function to compute the fewest number of coins that you need to make up
that amount. If that amount of money cannot be made up by any combination of the
coins, return -1.

INPUT: array of integers representing coin denomincations & integer amount
OUTPUT: integer

RULES: You may assume that you have an infinite number of each kind of coin.

-------------EXAMPLES---------------
console.log(coinChange([1, 2, 5], 11) === 3)
console.log(coinChange([2], 3) === -1)

-------------DATA STRUCTURES---------
Use an array to keep track of minimum # of coins needed for each value

-------------ALGORITHM---------------
1. Initialize minCoinsArr to an array of length amount filled with Infinity;
2. Initialize i to 1 and iterate to amount
   a. Itereate through the coins array
   b. IF index - coin >= 0
     i. minCoinsArr at position i is the minimum of the current value or index - coin + 1
3. Return true if last element of minCoinsArr is not Infinity ELSE return last element
*/

var coinChange = function(coins, amount) {
  let minCoinsArr = new Array(amount + 1).fill(amount + 1);
  minCoinsArr[0] = 0;

  for (let i = 1; i <= amount; i += 1) {
    for (let coinIdx = 0; coinIdx < coins.length; coinIdx += 1) {
      let denomination = coins[coinIdx];

      if (i - denomination >= 0) {
        minCoinsArr[i] = Math.min(minCoinsArr[i], minCoinsArr[i - denomination] + 1)
      }
    }
  }
  if (minCoinsArr[amount] === amount + 1) {
    return -1;
  } else {
    return minCoinsArr[amount];
  }
}

console.log(coinChange([1, 2, 5], 11) === 3)
console.log(coinChange([2], 3) === -1)
