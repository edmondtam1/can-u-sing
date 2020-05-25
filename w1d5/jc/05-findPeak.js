/**
 * Find peak in array of numbers (any peak, assume before/after array is negative infinity)
 *
 *
 * - Find midpoint
 * - If m > m+1 && m > m-1, return m
 * - else if m+1 > m, look right
 * - else, look left
 *
 * -infinity [5, 4, 1, 2] -infinity
 *  [5, 4]
 */

const findPeak = (arr, start = 0, end = arr.length - 1) => {
  const mid = Math.floor((start + end) / 2);
  const left = arr[mid - 1] || -Infinity;
  const right = arr[mid + 1] || -Infinity;

  if (arr[mid] > right && arr[mid] > left) {
    return mid;
  } else if (arr[mid + 1] > arr[mid]) {
    return findPeak(arr, mid + 1, end);
  } else {
    return findPeak(arr, start, mid - 1);
  }
};

console.log(findPeak([5, 4, 1, 2]));
console.log(findPeak([4, 5, 1, 2]));
console.log(findPeak([4, 5, 6, 7]));
