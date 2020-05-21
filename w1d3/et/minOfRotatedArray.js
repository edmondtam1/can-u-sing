// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/#/description

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// You may assume no duplicate exists in the array.

// algo
// binary search: choose element if left > element and right > element (basically trough of the array)
// left/right condition: find whether mid is in "first" or "second" array
// - check whether left is greater than mid + 1
//    - if greater than mid + 1, then we're in "second" array => go left
//    - if less than mid + 1, then we're in "first" array => go right

const isTrough = (array, index) => {
  let before = index === 0 ? array.length - 1 : index - 1;
  let after = index === array.length - 1 ? 0 : index + 1;

  return array[before] > array[index] && array[after] > array[index];
}

const findMin = nums => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let first = nums[left];

    if (isTrough(nums, mid)) {
      return nums[mid];
    } else if (nums[mid] < first) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  console.log(left, right);
  if (isTrough(left)) return nums[left];
  if (isTrough(right)) return nums[right];
};

console.log(
  findMin([3, 4, 5, 1, 2]), // 1
  findMin([4, 5, 6, 7, 0, 1, 2]), // 0
)