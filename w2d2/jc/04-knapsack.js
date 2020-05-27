/**
 * Knapsack has a set capacity
 * Items have a value and a weight
 * Maximize the value of the items in the knapsack
 *
 * ex.
 * Weight 1,2,4,2,5
 * Value  5,3,5,3,2
 *
 * Approach
 * - start from end
 * - keep track of
 *   - items we have left (position from end)
 *   - capacity we have left
 *   - value we have so far
 */

/** RECURSIVE (2^n) **/
const knapsack = (capacity, weights, values) => {
  const helper = (remainingCapacity, currentItem) => {
    // if we have no items to consider, or no capacity
    if (currentItem === 0 || remainingCapacity === 0) return 0;

    // if the weight of the current item is > the capacity we have left, move on
    if (weights[currentItem] > remainingCapacity) {
      result = helper(remainingCapacity, currentItem - 1);
    }

    // otherwise, try putting the current item in, and not putting it in, and find the max of those 2
    const dontIncludeCurrent = knapsack(remainingCapacity, currentItem - 1);
    const includeCurrent =
      values[currentItem] + knapsack(remainingCapacity, currentItem - 1);

    return Math.max(dontIncludeCurrent, includeCurrent);
  };
  return helper(capacity, weights.length - 1);
};

/** RECURISVE WITH MEMOIZATION  **/
const knapsackMemo = (weights, values, totalCapacity) => {
  const memo = [];

  const helper = (remainingCapacity, currentItem) => {
    console.log(memo);
    let currentMemo = memo[currentItem] && memo[currentItem][remainingCapacity];
    // If we already have a result, return it
    if (currentMemo) {
      return currentMemo;
    }

    // if we have no items to consider, or no capacity
    if (currentItem === 0 || remainingCapacity === 0) return 0;

    // if the weight of the current item is > the capacity we have left, move on
    if (weights[currentItem] > remainingCapacity) {
      result = helper(remainingCapacity, currentItem - 1);
    }

    // otherwise, try putting the current item in, and not putting it in, and find the max of those 2
    const dontIncludeCurrent = knapsack(remainingCapacity, currentItem - 1);
    const includeCurrent =
      values[currentItem] + knapsack(remainingCapacity, currentItem - 1);
    const result = Math.max(dontIncludeCurrent, includeCurrent);

    currentMemo = result;
    return currentMemo;
  };
  return helper(totalCapacity, weights.length - 1);
};
console.log(knapsack(10, [1, 2, 4, 2, 5], [5, 3, 5, 3, 2]));
