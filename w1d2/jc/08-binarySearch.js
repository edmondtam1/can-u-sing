/**
 * Input: Array (sorted integers), Integer (search term)
 * Output: Integer (index or -1)
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

console.log(binarySearch([1, 2, 3, 5, 8, 9], 8));
