/**
 * Find a number in an array of numbers and return its index, else return -1
 *
 * [1,3,2] n = 2
 * [1]
 *
 * [1,2,3] n = 5
 *
 */

const findNumIndex = (arr, num, count = 0) => {
  if (arr.length === 0) return -1;
  if (arr[0] === num) return count;

  return findNumIndex(arr.slice(1), num, count + 1);
};

console.log(findNumIndex([1, 2, 3], 2));
