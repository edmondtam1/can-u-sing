// const twoSum = (nums, target) => {
//   if (nums.length === 0) return [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };

// returned value does not use zero-based indices
const twoSum = (numbers, target) => {
  let start = 0;
  let end = numbers.length - 1;
  while (start < end) {
    const sum = numbers[start] + numbers[end];
    if (sum === target) {
      return [start + 1, end + 1];
    } else if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
  return [];
};

console.log(
  twoSum([1, 2, 3], 5), // [1, 2],
  twoSum([]),
  twoSum([5, 3, 7, 2, 4], 10) // [1, 2]
);