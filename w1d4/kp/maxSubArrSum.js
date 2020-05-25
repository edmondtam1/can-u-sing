function maxSubArray(arr, low = 0, mid, high = arr.length - 1) {
  if (arr.length === 1) return arr[low];

  mid = Math.floor((low + high) / 2);
  leftArrSum = maxSubArray(arr, low, mid - 1);
  rightArrSum = maxSubArray(arr, mid + 1, high);
  crossingSum = maxCrossingSubArray(arr, low, mid, high);
}
