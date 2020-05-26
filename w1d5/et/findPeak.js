const findPeak = (arr, start = 0, end = arr.length - 1) => {
  const mid = Math.floor(start + (end - start) / 2);
  const left = arr[mid - 1] || -Infinity;
  const right = arr[mid + 1] || -Infinity;

  if (arr[mid] > right && arr[mid] > left) {
    return mid;
  } else if (arr[mid] < right) {
    return findPeak(arr, mid + 1, end);
  } else {
    return findPeak(arr, start, mid - 1);
  }
};

console.log(
  findPeak([3, 2, 5, 6, 4, 1]), // 0, 3
  findPeak([5, 4, 3, 2, 1, 2, 3, 4, 5]), // 0, 8
);