const maxNumber = (arr) => {
  if (arr.length === 1) return arr[0];

  // const max = maxNumber(arr.slice(1));
  return Math.max(maxNumber(arr.slice(1)), arr[0]);
};

// const maxNumber = (arr, index = 0, max = -Infinity) => {
//   if (arr[index] > max) max = arr[index];

//   if (index === arr.length - 1) return max;

//   index++;
//   return maxNumber(arr, index, max);
// };


console.log(
  maxNumber([3, 2, 5, 6, 4]), // 6
);

// [3, 2, 5, 6, 4]
// 
// is 3 > subarray([2, 5, 6, 4])
// is 3 > 2 > subarray([5, 6, 4])
// is 3 > 2 > 5 > subarray([6, 4])
// is 3 > 2 > 5 > 6 > subarray([4])

//                 