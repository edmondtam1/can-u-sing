function findPeak(arr) {
  if (arr.length === 1) return arr[0];

  let mid = Math.floor(arr.length / 2);
  let curr = arr[mid];
  let left = arr[mid - 1] || -Infinity;
  let right = arr[mid + 1] || -Infinity;

  if (left < curr && curr > right) {
    return arr[mid];
  } else if (left > curr) {
    return findPeak(arr.slice(0, mid));
  } else {
    return findPeak(arr.slice(mid, arr.length));
  }
}


console.log(findPeak([3, 2, 1, 8])); //==> 3, 8;
console.log(findPeak([3, 4, 2, 1, 8])); //==> 4, 8;
console.log(findPeak([1, 2, 3, 10, 3, 2, 1])); //==> 10;
console.log(findPeak([1, 2, 3, 5])); //==> 5