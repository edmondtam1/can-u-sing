/**
 * Input: Array (integers, sorted ascending), Integer (target # to sum to)
 * Output: [idx1, idx2]
 *
 * Algorithm:
 *
 * Iterate over arr
 * Binary search for arr[i] - target (exclude i)
 * if result !== -1, return [i, return value]
 */

const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);

    if (arr[mid] === num) {
      return mid;
    } else if (num < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

const twoSumSorted = (sortedNums, target) => {
  for (let i = 0; i < sortedNums.length; i++) {
    const currentVal = sortedNums[i];
    const remainder = target - currentVal;
    const idx2 = binarySearch(sortedNums, remainder);

    if (idx2 !== -1 && i !== idx2) {
      return [i + 1, idx2 + 1].sort((a, b) => a - b);
    }
  }
};

console.log(twoSumSorted([2, 7, 11, 15], 9)); //9
console.log(twoSumSorted([2, 7, 11, 15], 26)); //9
