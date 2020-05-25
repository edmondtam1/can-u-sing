/**
 * Merge
 * - Instantiate result array
 * - Iterate over arr1 (i) and arr 2 (j)
 * - if i === arr1.length-1, concat result with remaining arr2
 * - if j = arr2.length-1, concat result with remaining arr1
 * - If arr1[i] < arr2[j] result.push(arr[i])
 * - return result;
 *
 * arr1 [1,2,3]
 * arr2 [2,5]
 *
 * arr1 [1,2,3]
 *             i
 * arr2 [2,5]
 *         j
 *
 * result [1,2,2,3]
 *
 * Mergesort
 * - break array into halves until we have arrays that are empty or have 1 element
 *   - this is the BASE CASE
 * - merge arrays with other sorted arrays until back at full length of the array
 * - return the merged and sorted array
 */

// Merge 2 sorted arrays into one sorted array
const merge = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;

  // Iterate over both arrays, pushing lowest value to result
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Concat result with items remaining from array we didn't finish iterating through
  if (i === arr1.length) {
    result = result.concat(arr2.slice(j));
  }
  if (j === arr2.length) {
    result = result.concat(arr1.slice(i - 1));
  }

  return result;
};

const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2) - 1;
  const left = mergeSort(arr.slice(0, mid + 1));
  const right = mergeSort(arr.slice(mid + 1, arr.length));

  return merge(left, right);
};

console.log(mergeSort([3, 2, 1]));

// [3, 2, 1]
// mergeSort([3,2,1])
// left = mergeSort([3]) = [3]
// right = mergeSort([2,1]) = [1,2]
//   left = mergeSort([2]) => [2]
//   right = mergeSort([1]) => [1]
//   merge([2], [1]) => [1,2]
// merge([3], [1,2]) => [1,2,3]
