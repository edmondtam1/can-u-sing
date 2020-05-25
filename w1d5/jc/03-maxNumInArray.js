/**
 * Input: Array
 * Output: Integer (the max number)
 *
 * [1,2,3]
 * - subproblem #1 find max of arr[0]
 * - subproblem #2 find max of the rest of the array
 */

const maxNumber = arr => {
  if (arr.length === 1) return arr[0];

  return Math.max(arr[0], maxNumber(arr.slice(1)));
};

console.log(maxNumber([1, 2, 5, 3, 4]));
