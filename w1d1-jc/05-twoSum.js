/**
 * Given array of integers, find 2 numbers such that they add up to a specific target number
 * Return indices of the 2 numbers such that they add up tot he target, where index1 < index2
 * Assume each input has exactly 1 solution
 *
 * Input: Array of integers, Integer (target)
 * Output: Array length 2 of integers (index1 and index2)
 *
 * Algo
 * - Instantiate object to store values visited (keys) and their index (values)
 * - Iterate over numbers, check if target - numbers[i] exists in our object
 *   - if so, return index from object, and i
 *   - if not, add current value and index to object
 * - Since we are assuming each input has exactly 1 solution, no further checks required
 * - O(N) time, O(N) space
 */

const twoSum = (numbers, target) => {
  const visited = {};

  for (let i = 0; i < numbers.length; i++) {
    const complementIndex = visited[target - numbers[i]];

    if (complementIndex) {
      return [complementIndex, i];
    } else {
      visited[numbers[i]] = i;
    }
  }
};

console.log(twoSum([5, 8, 6, 2, 3], 9)); // [2, 4]
console.log(twoSum([5, 8, 6, 7, 3], 10)); // [3, 4]
