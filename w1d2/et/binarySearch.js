const binarySearch = (arr, searchTerm, low = 0, high = arr.length - 1) => {
  if (arr.length === 0 || low > high) return -1;

  let median = Math.floor(low + (high - low) / 2);
  if (arr[median] === searchTerm) {
    return median;
  } else if (arr[median] < searchTerm) {
    return binarySearch(arr, searchTerm, median + 1, high);
  } else {
    return binarySearch(arr, searchTerm, low, median - 1);
  }
};

console.log(
  binarySearch([], 11),
  binarySearch([1, 2, 4, 6, 8, 11], 11),
  binarySearch([1, 2, 4, 6, 8, 11], 4),
  binarySearch([1, 2, 4, 4, 4, 4, 4, 6, 8, 11], 4),
  binarySearch([-5, -3, 0, 0, 0, 5], 11),
  binarySearch([-5, -3, 0, 0, 0, 5], 0),
);