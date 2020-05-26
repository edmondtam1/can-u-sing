/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
If not found, return [-1,-1]

- Find the left target using recursive binary search
- If not found, return [-1, -1]
- Find the right target using recursive bs, starting left at left target
- return [leftTarget, rightTarget]

  // [5,7,7,8,8,10]
  // [8,8,10]
  // [8]

*/

const searchRange = (nums, target) => {
  const getLeft = (nums, target, left, right) => {
    if (left >= right && nums[left] === target) return left;
    if (left > right) return -1;

    let mid = Math.floor(left + (right - left) / 2);

    // if (nums[mid] === target || nums[mid - 1] !== target) {
    //   return mid;
    // } else if (nums[mid] > target) {
    //   return getLeft(nums, target, mid + 1, right);
    // } else {
    //   return getLeft(nums, target, left, mid - 1);
    // }
    if (nums[mid] > target || nums[mid] === target) {
      return getLeft(nums, target, left, mid - 1);
    } else {
      return getLeft(nums, target, mid + 1, right);
    }
  };

  const getRight = (nums, target, left, right) => {
    if (left >= right && nums[right] === target) return right;
    if (left > right) return -1;

    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > target) {
      return getRight(nums, target, left, mid - 1);
    } else if (nums[mid + 1] !== target) {
      return mid;
    } else {
      return getRight(nums, target, mid + 1, right);
    }
  };

  firstIndex = getLeft(nums, target, 0, nums.length - 1);

  if (firstIndex === -1) return [-1, -1];

  lastIndex = getRight(nums, target, firstIndex, nums.length - 1);

  return [firstIndex, lastIndex];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([2, 2], 2));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));