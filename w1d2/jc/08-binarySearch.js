/**
 * Input: Array (sorted integers), Integer (search term)
 * Output: Integer (index or -1)
 */

const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    // mid = left + (right - left) / 2; // To minimize overflow
    mid = Math.floor((right + left) / 2);

    if (arr[mid] === num) {
      return mid;
    } else if (num < arr[mid]) {
      right = mid - 1;
      // right = mid;
    } else {
      left = mid + 1;
      // left = mid;
    }
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 5, 8, 9], 8));
